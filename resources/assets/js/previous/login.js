$(function() {
  'use strict';

  function changeInputType(inputId, type) {
    var input = $("#" + inputId);
    $(input).replaceWith(
      $(input).val(input.val()).attr({
        type: type,
        name: "password",
        id: "password",
        class: "form-control",
      })
    );
  }

  $('#show-password').change(function() {
    if($('#show-password:checked').val()) {
      changeInputType("password", "text");
    } else {
      changeInputType("password", "password");
    }
  });
});
