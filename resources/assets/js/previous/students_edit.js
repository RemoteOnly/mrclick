$(function() {
  "use strict";
  $("button[name=delete]").on("click", function() {
    if (confirm("本当に削除してよろしいですか？")) {
      return true;
    }
    return false;
  });
  $("#x-change-student-no").on("click", function(e) {
    e.preventDefault();
    $(this).parent().hide();
    $("#student-no").show();
  });
  $("#x-add-student-email").on("click", function(e) {
    e.preventDefault();
    $(this).parent().hide();
    $("#student-email").show();
    $("#student-email-config").show();
  });
  $('#teacher-selector').select2();
  $('#form-student').on('submit', function() {
    $('#my-teacher-ids').val($('#teacher-selector').val());
    return true;
  });

  $('#attach-sibling').click(function(e) {
    e.preventDefault();

    var relative_no = $('#relative-student-no').val();
    var student_id = $(this).data('student-id');
    var school_slug = $(this).data('school-slug');

    if (!relative_no) {
      return;
    }

    $.ajax({
      url: '/' + school_slug + '/students/' + student_id + '/attach_sibling',
      type: 'post',
      dataType: 'json',
      data: {
        relative_no: relative_no,
        _csrf_token: $('[name=_csrf_token]').attr('content')
      },
      success: function(data) {
        if (data.status === 1) {
          $('#siblings ul').children().remove();
          for (var i = 0; i < data.siblings.length; i++) {
            $('#siblings ul').append('<li>' + data.siblings[i].name + '&nbsp;<button class="detach-sibling btn btn-negative btn-very-small" data-student-id="' + data.siblings[i].id + '">削除</button></li>');
          }
        } else {
          alert(data.message);
        }
      },
      error: function() {
        alert('Something goes wrong. Please refresh the page and try again');
      }
    });

  });

  $('#siblings').on('click', '.detach-sibling', function(e) {
    e.preventDefault();
    var student_id = $('#attach-sibling').data('student-id');
    var school_slug = $('#attach-sibling').data('school-slug');
    var relative_id = $(this).data('student-id');
    var _this = this;
    var result = confirm('本当に削除してよろしいですか？');
    if (result) {
      $.ajax({
        url: '/' + school_slug + '/students/' + student_id + '/detach_sibling',
        type: 'delete',
        dataType: 'json',
        data: {
          relative_id: relative_id,
          _csrf_token: $('[name=_csrf_token]').attr('content')
        },
        success: function(data) {
          if (data.status === 1) {
            $(_this).parent().remove();
          } else {
            alert(data.message);
          }
        },
        error: function() {
          alert('Something goes wrong. Please refresh the page and try again');
        }
      });
    }
  });

});