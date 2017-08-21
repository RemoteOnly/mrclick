$(function() {
  'use strict';

  $(".menu").on("click", function(e) {
    var grade = $(this).attr('id');
    var dataNode = $('.'+grade);
    if($(this).hasClass('active')) {
      dataNode.show();
      $(this).removeClass('active').addClass('inactive');
    } else {
      dataNode.hide();
      $(this).removeClass('inactive').addClass('active');
    }
    e.stopPropagation();
  });
  $(".tableRowMain").click(function() {
    $(this).find(".menu").click();
  });
  $(".js-expand-all, .js-shrink-all").click(function(e) {
    e.preventDefault();
    if($(this).hasClass("js-expand-all")) {
      $(".menu.active").click();
    } else {
      $(".menu.inactive").click();
    }
    $(".js-expand-all, .js-shrink-all").toggleClass("abs-hide");
  });
});
