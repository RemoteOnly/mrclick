$(function() {
  "use strict";
  $(".report-select-all-students a").on("click", function(e) {
    e.preventDefault();
    $(".x-student-id").each(function(idx, elm) {
      $(elm).prop("checked", true);
    });
  });

  $('select').change(function(){
    location.href = $(this).val();
  });

  $('input[name="grade"]').click(function(e) {
   var g_num = Number(this.id);
   if (g_num) {
     if ($(this).prop('checked')) {
       // その学年の全生徒を選択
       $('input[name="student_ids[]"][class=' + g_num + ']').prop('checked',true);
     } else {
       // その学年の全生徒を非選択
       $('input[name="student_ids[]"][class=' + g_num + ']').prop('checked',false);
     }
   }
   else {
     var i,selector;
     if ($(this).prop('checked')) {
       //全員選択
       $('input[name="grade"]').prop('checked',true);
       $('input[name="student_ids[]"]').prop('checked',true);
       for (i = 1; i <= $('[id^=choosing]').length; i++) {
         selector = "[id=choosing" + i + "]";
         var choosing = "[class=" + i + "]";
         $(selector).html($(choosing).length);
       }
     } else {
       $('input[name="grade"]:not([id="0"])').prop('checked',false);
       $('input[name="student_ids[]"]').prop('checked',false);
       for (i = 1; i <= $('[id^=choosing]').length; i++) {
         selector = "[id=choosing" + i + "]";
         $(selector).html("0");
       }
     }
   }
   e.stopPropagation();
  });

  $('input[name="student_ids[]"]').on('click once', function(e) {
   var g_num = Number(this.className);
   //その学年の全生徒が選択されている場合チェックボックスをON、そうでなければOFF
   if ($('input[name="student_ids[]"][class=' + g_num + ']:checked').length === $('input[name="student_ids[]"][class=' + g_num + ']').length) {
     $('input[name="grade"][id=' + g_num + ']').prop('checked',true);
   } else {
     $('input[name="grade"][id=' + g_num + ']').prop('checked',false);
   }
   e.stopPropagation();
  }).trigger('once');

  $('input[type="checkbox"]').on('click once', function() {
    if ($('input[name="student_ids[]"]:checked').length === $('input[name="student_ids[]"]').length) {
      //すべての生徒が選択されている場合、全選択のチェックボックスをON
      $('input[name="grade"][id="0"]').prop('checked',true);
    } else {
      //そうでなければOFF
      $('input[name="grade"][id="0"]').prop('checked',false);
    }
  }).first().trigger('once');

  $('input').on('click', function() {
    var number;
    var selector;
    if(this.name === 'grade') {
      number = this.id;
    } else {
      number = this.className;
    }
    selector = "[id=choosing" + number + "]";
    var choosing = "[class=" + number + "]";
    var count = 0;
    for (var i = 0; i < $(choosing).length; i++) {
      var checkChoosing = choosing + ":eq(" + i + ")";
      if($(checkChoosing).is(':checked')) {
        count++;
      }
    }
    $(selector).html(count);
  });

  function getChooseCount(){
    for (var i = 1; i <= $(".tableRowMain").length; i++) {
      var selector = "[id=choosing" + i + "]";
      var choosing = "[class=" + i +"]";
      var count = 0;
      for (var j = 0; j < $(choosing).length; j++) {
        var checkChoosing = choosing + ":eq(" + j + ")";
        if($(checkChoosing).is(':checked')) {
          count++;
        }
      }
      $(selector).html(count);
    }
  }
  getChooseCount();

});
