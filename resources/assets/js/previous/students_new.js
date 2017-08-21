$(function() {
  "use strict";
  function displayStudentNoForm(isAuto) {
      var studentNo = $("#student-no");
      studentNo.css("display", isAuto ? "none" : "block");
      studentNo.prop("disabled", isAuto);
      $("#student-no-hidden").prop("disabled", !isAuto);
  }
  $("#student-no-flag").on("click", function() {
      displayStudentNoForm($(this).prop('checked'));
  });
  $("#x-add-student-email").on("click", function(e) {
    e.preventDefault();
    $(this).parent().hide();
    $("#student-email").show();
    $("#student-email-config").show();
  });
  $('#teacher-selector').select2();
  $('#form-student').on('submit', function() {
    $('#my-teacher-ids').val($('#teacher-selector').val());
    return true;
  });
  displayStudentNoForm($("#student-no-flag").prop('checked'));
});
