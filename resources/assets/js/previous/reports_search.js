$(function() {
  'use strict';
  if($('#teacher-selector').length > 0) {
    $('#teacher-selector').select2();
  }
  $('#form-search').on('submit', function() {
    $('#teacher-id').val($('#teacher-selector').val());
    return true;
  });

  if($('#grade-select').length > 0) {
    $('#grade-select').select2();
  }
  $('#form-search').on('submit', function() {
    $('#grade').val($('#grade-select').val());
  });

  function showEndRange(value) {
      if (value === "1") {
          $('#date-start').attr('placeholder', '日付（開始日）');
          $('#end-range').show();
      } else {
          $('#date-start').attr('placeholder', '日付');
          $('#date-end').attr('data-value', '');
          $('#date-end').val('');
          $('#end-range').hide();
      }
  }
  showEndRange($("input[name='is_range']:checked").val());
  $("input[name='is_range']").on('click', function(){
      showEndRange($(this).val());
  });

  $('#x-select-all-reports').on("click", function() {
    if ($(this).prop('checked')) {
      $('input[name="reports_ids[]"]').prop('checked',true);
    } else {
      $('input[name="reports_ids[]"]').prop('checked',false);
    }
  });
  $('input[name="reports_ids[]"]').on("click", function() {
    if ($('#x-select-all-reports').prop('checked')) {
      $('#x-select-all-reports').prop('checked',false);
    } else {
      if ($('input[name="reports_ids[]"]:checked').length === $('input[name="reports_ids[]"]').length) {
        $('#x-select-all-reports').prop('checked',true);
      }
    }
  });

  $('#details').hide();
  $("#enter-details").on("change", function () {
    if ($(this).prop('checked')){
      $('#details').show();
    } else {
      $('#details').hide();
    }
  });
  // URLのパラメータを取得
       var urlParam = location.search.substring(1);

      // URLにパラメータが存在する場合
      if(urlParam) {
          // 「&」が含まれている場合は「&」で分割
          var param = urlParam.split('&');
          // パラメータを格納する用の配列を用意
          var paramArray = [];

          // 用意した配列にパラメータを格納
          for (var i = 0; i < param.length; i++) {
              var paramItem = param[i].split('=');
              paramArray[paramItem[0]] = paramItem[1];
          }
          var grade = 'grade';
          var male = 'male';
          var female = 'female';
          var not_known = 'not_known';
          if(paramArray[grade] || paramArray[male] || paramArray[female] || paramArray[not_known]) {
            $('#enter-details').click();
          }
      }

    var offset = 20;
    var allCount = $("#allCount").val();
    var currentpath = location.href.split("/");
    var schoolId = currentpath[currentpath.indexOf('reports') - 1];
    $(".read-more").on("click", function () {
        var searchStatus = currentpath[currentpath.indexOf('reports') + 1];
        $.ajax({
            type: "GET",
            url: "/" + schoolId + "/reports/" + searchStatus + "&ajax=1&offset=" + offset,
            dataType: "html",
            scriptCharset: "utf-8",
            success: function(data)
            {
                $('.read-more').before(data);
                offset = offset + 20;
                if (offset > allCount) {
                    $(".read-more").hide();
                }
            }
        });
    });
});
