$(function() {
  "use strict";
  var showTermsForTeachers = function() {
    $("#terms-for-teachers").show();
    $("#terms-for-students").hide();
    var url = location.pathname + "#terms-for-teachers";
    window.history.pushState(null, null, url);
  };
  var showTermsForStudents = function() {
    $("#terms-for-students").show();
    $("#terms-for-teachers").hide();
    var url = location.pathname + "#terms-for-students";
    window.history.pushState(null, null, url);
  };
  $("#nav-for-teachers").on("click", function(e) {
    e.preventDefault();
    showTermsForTeachers();
  });
  $("#nav-for-students").on("click", function(e) {
    e.preventDefault();
    showTermsForStudents();
  });
  switch ($(location).attr("hash")) {
    case "#terms-for-students":
      showTermsForStudents();
      break;
    case "#terms-for-teachers":
      showTermsForTeachers();
      break;
    default:
      showTermsForTeachers();
      break;
  }
});
