$(function() {
  "use strict";
  $("button[name=delete]").on('click', function() {
    if (confirm('本当に削除してよろしいですか？')){
      return true;
    }
    return false;
  });
});
