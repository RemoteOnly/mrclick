$(function() {
  'use strict';
  $('.release-sibling-button').on('click', function() {
    if (confirm('「' + $(this).val() + '」を兄弟姉妹アカウントから解除してよろしいですか？')) {
      return true;
    } else {
      return false;
    }
  });

  if($('.verified').length === 1) {
    $('.verified').hide();
  }

});
