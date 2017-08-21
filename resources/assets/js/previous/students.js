$(function() {
  'use strict';
  $('.delete-button').on('click', function() {
    if (confirm('「' + $(this).val() + '」を削除してよろしいですか？')) {
      return true;
    } else {
      return false;
    }
  });
  $('.send-email-button').on('click', function() {
    if (confirm('「' + $(this).val() + '」に確認メールを再送信しますか？')) {
      return true;
    } else {
      return false;
    }
  });
  $('button[name="is_entering"]').on('click', function() {
    if (confirm($(this).data('name') + 'に' + ($(this).val() === '1' ? '入室' : '退室') + '記録をつけてよろしいですか？')) {
      return true;
    } else {
      return false;
    }
  });
});
