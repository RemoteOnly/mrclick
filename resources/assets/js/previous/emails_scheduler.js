$(function() {
  "use strict";
  $("#form-group-email").css("display","none");
  $("#email-date").prop('disabled', true).css("background-color","#f5f5f5");
  $("#email-time").prop('disabled', true).css("background-color","#f5f5f5");
  $("#status").on("change", function() {
    var status = $(this).val();
    if (status === "draft" || $(this).prop('type') === "checkbox" && !$(this).prop('checked')) {
      $("#form-group-email").css("display","none");
    } else {
      $("#form-group-email").css("display","block");
    }
  });
  $("#is-scheduled").on("change", function() {
    var is_scheduled = $(this).prop('checked');
    if (is_scheduled) {
      $("#email-date").prop('disabled', false).css("background-color","#fff");
      $("#email-time").prop('disabled', false).css("background-color","#fff");
    } else {
      $("#email-date").prop('disabled', true).css("background-color","#f5f5f5");
      $("#email-time").prop('disabled', true).css("background-color","#f5f5f5");
    }
  });
  $.extend( $.fn.pickadate.defaults, {
    monthsFull: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
    monthsShort: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
    weekdaysFull: [ '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日' ],
    weekdaysShort: [ '日', '月', '火', '水', '木', '金', '土' ],
    today: '今日',
    clear: '消去',
    firstDay: 1,
    format: 'yyyy mm dd',
    formatSubmit: 'yyyy/mm/dd'
  });
  $("#email-date").pickadate({
    format: "yyyy-mm-dd",
    formatSubmit: "yyyy-mm-dd",
    close: "閉じる",
    min: new Date(),
  });
  $("#email-time").pickatime({
    format: "H:i",
    formatSubmit: "H:i:00",
    interval: 60,
    close: "閉じる",
  });
});
