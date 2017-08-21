$(function() {
  'use strict';
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
  $("#date-start").pickadate({
    format: "yyyy-mm-dd",
    formatSubmit: "yyyy-mm-dd",
    close: "閉じる",
    onOpen: function() {
      var de = $("#date-end").val();
      this.set("max", (de && de.length > 0) ? new Date(de) : "");
    }
  });
  $("#date-end").pickadate({
    format: "yyyy-mm-dd",
    formatSubmit: "yyyy-mm-dd",
    close: "閉じる",
    onOpen: function() {
      var ds = $("#date-start").val();
      this.set("min", (ds && ds.length > 0) ? new Date(ds) : "");
    }
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
});
