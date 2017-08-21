$(function() {

  "use strict";

  function getSchoolID () {
    var currentpath = location.href.split("/");
    var currentdir = currentpath[currentpath.indexOf('admin') - 1];
    return currentdir;
  }

  function switchPageRequest ($page) {
    $.ajax({
      type: "GET",
      url: "/api/" + getSchoolID() + "/textbooks?page=" + $page,
      dataType: "html",
      scriptCharset: "utf-8",
      success: function(data)
      {
        $('tbody').html(data);
      }
    });
  }

  function textbookButtonRequest ($textbook,$textbookName,$pageId) {
    $.ajax({
      type: "GET",
      url: "/api/" + getSchoolID() + "/textbooks?textbookId=" + $textbook.prop("id") +　"&textbookName=" + $textbookName+　"&page=" + $pageId,
      dataType: "html",
      scriptCharset: "utf-8",
      success: function()
      {
        $textbook.toggleClass('active-textbook');
      }
    });
  }

  $('tbody').on('click', 'li', function() {
    switchPageRequest($(this).prop("id"));
  });

  $('tbody').on('click', '.switch',function() {
    textbookButtonRequest($(this),$(this).attr("name"),$('.active').prop("id"));
  });
});
