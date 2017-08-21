$(function() {
  'use strict';
  function checkHandshaked(studentId, schoolSlug, button, times) {
    var td = button.parent('td');
    var span = td.children('span');
    if (times === 0) {
      setTimeout(function() {checkHandshaked(studentId, schoolSlug, button, times + 1);}, 3000);
    } else if (times <= 5) {
      $.getJSON('/api/' + schoolSlug + '/touch/check-handshaked/' + studentId, function(json){
        if (json.is_handshaked) {
          span.html(json.card_id);
          td.find('.card-release-button').css('display', 'inline');
          $('.card-handshaking-button, .card-release-button, .card-checking-button').removeClass('btn-disabled');
        } else {
          setTimeout(function() {checkHandshaked(studentId, schoolSlug, button, times + 1);}, 3000);
        }
      });
    } else {
      span.html('');
      td.children('.card-handshaking-button').css('display', 'inline');
      $('.card-handshaking-button, .card-release-button, .card-checking-button').removeClass('btn-disabled');
    }
  }
  $('.card-handshaking-button').on('click', function() {
    var button = $(this);
    if (button.hasClass('btn-disabled')) {
      return false;
    }
    var td = button.parent('td');
    var span = td.children('span');
    var studentId = button.data('student_id');
    var schoolSlug = button.data('slug');
    var messageLength = button.data('message');
    $.getJSON('/api/' + schoolSlug + '/touch/start-handshake/' + studentId, function(json){
      if (json.started) {
        button.css('display', 'none');
        $('.card-handshaking-button, .card-release-button, .card-checking-button').addClass('btn-disabled');
        if (messageLength === 'short') {
          span.html('<i class="fa fa-spin fa-spinner"></i> 15秒以内にタッチ...');
        } else {
          span.html('<i class="fa fa-spin fa-spinner"></i> 15秒以内に未登録のカードをタッチしてください。<br>Comiru Touchのランプが緑色に光り、ここにカードIDが表示されれば登録成功です。');
        }
        checkHandshaked(studentId, schoolSlug, button, 0);
      }
    });
    return false;
  });
  $('.card-release-button').on('click', function() {
    if ($(this).hasClass('btn-disabled')) {
      return false;
    }
    if (confirm('カードIDの設定を解除してよろしいですか？')) {
      return true;
    } else {
      return false;
    }
  });
  function checkCardId(schoolSlug, button, times) {
    var div = button.parent('div');
    var p = div.children('p');
    if (times === 0) {
      setTimeout(function() {checkCardId(schoolSlug, button, times + 1);}, 3000);
    } else if (times <= 5) {
      $.getJSON('/api/' + schoolSlug + '/touch/check-card-id', function(json){
        if (json.is_checked) {
          p.html(json.card_id + ' (' + (json.student_id ? '<a href="' + json.student_id + '">' + json.name + '</a>' : '未登録') + ')');
          $('.card-handshaking-button, .card-release-button, .card-checking-button').removeClass('btn-disabled');
        } else {
          setTimeout(function() {checkCardId(schoolSlug, button, times + 1);}, 3000);
        }
      });
    } else {
      p.html('');
      $('.card-handshaking-button, .card-release-button, .card-checking-button').removeClass('btn-disabled');
    }
  }
  $('.card-checking-button').on('click', function() {
    var button = $(this);
    if (button.hasClass('btn-disabled')) {
      return false;
    }
    var div = button.parent('div');
    var p = div.children('p');
    var schoolSlug = button.data('slug');
    $.getJSON('/api/' + schoolSlug + '/touch/start-checking-card-id', function(json){
      if (json.started) {
        button.addClass('btn-disabled');
        $('.card-handshaking-button, .card-release-button, .card-checking-button').addClass('btn-disabled');
        p.html('<i class="fa fa-spin fa-spinner"></i> 15秒以内にカードを1度だけタッチしてください。<br>Comiru Touchのランプが緑色に光り、ここにカードIDが表示されます。<br>※15秒を経過した後にカードをタッチすると、入退室の記録・通知が発生することがありますので、ご注意ください。');
        checkCardId(schoolSlug, button, 0);
      }
    });
    return false;
  });
});
