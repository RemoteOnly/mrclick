$(function() {
  'use strict';
  $('#js-mark-all-as-read').on('click', function() {
    if (confirm('全ての通知を既読にします。よろしいですか？')) {
      return true;
    }
    return false;
  });
});
