$(function() {
  "use strict";

      $(".news-comment-student__comments").css('display','none');
      $(".news-comment-student__name").on("click", function() {
          $(this).next(".news-comment-student__comments").slideToggle();
          $(this).children(".accordion_btn").children("i.fa").toggleClass("fa-chevron-right").toggleClass("fa-chevron-down");
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

          var id = 'id';
          var studentId = paramArray[id];
          $("#" + studentId).click();
          var p = $("#" + studentId).offset().top;
          $('html,body').animate({ scrollTop: p }, 'normal');
      }

});
