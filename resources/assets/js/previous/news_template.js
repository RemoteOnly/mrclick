$(function() {
  'use strict';
  $('.star-o, .star').on('click', function() {
    var csrfToken = $('input[name=_csrf_token]').val(),
        schoolSlug = $('input[name=school_slug]').val(),
        url = "/api/" + schoolSlug + "/news/template",
        isTemplate = $(this).hasClass('fa-star-o'),
        star = $(this),
        result = 'NG',
        msg = "";
    $.ajax({
      url: url,
      type:'POST',
      dataType: 'json',
      data: {
          news_id: star.siblings('input[name=nid]').val(),
          is_template: isTemplate,
          _csrf_token: csrfToken
      },
      timeout: 10000,
      async: false,
      success: function(data) {
         result = data.result;
         if (result !== 'OK') {
             return;
         }
         if (isTemplate) {
             msg = 'テンプレートとして登録しました';
         } else {
             msg = 'テンプレートから削除しました';
         }
      },
      error: function(error) {
        console.log(error.statusText);
        msg = 'エラーが発生しました';
      },
      complete: function() {
        $('#toast-message').stop().fadeOut(100, function() {
          $('#toast-message p').html(msg);
          $('#toast-message').fadeIn(500).delay(2000).fadeOut(500);
        });
        if (result !== 'OK') {
          return;
        }
        if (isTemplate) {
          star.removeClass('fa-star-o');
          star.removeClass('star-o');
          star.addClass('fa-star');
          star.addClass('star');
        } else {
          star.removeClass('fa-star');
          star.removeClass('star');
          star.addClass('fa-star-o');
          star.addClass('star-o');
        }
      }
    });
    return false;
  });
});
