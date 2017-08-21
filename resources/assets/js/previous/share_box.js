$(function() {
  'use strict';
  $('#share_url').on('click', function(e) {
    e.target.setSelectionRange(0, e.target.value.length);
  });
});
