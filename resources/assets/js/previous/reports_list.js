$(function() {
  
  "use strict";
  
  function getSchoolID () {
    var currentpath = location.href.split("/");
    var currentdir = currentpath[currentpath.length - 2];
    return currentdir;
  }
  
  function getSortingParam() {
    var obj = {
      date: $('#date').prop("class"),
      public: $('#public').prop("class"),
      read: $('#read').prop("class")
    };
    return obj;
  }
  
  function getListRequest () {
    $.ajax({
      type: "GET",
      url: "/api/" + getSchoolID() + "/reports",
      data: getSortingParam(),
      dataType: "html",
      scriptCharset: "utf-8",
      success: function(data)
      {
        $('tbody').html(data);
      }
    });
  }
  
  function switchPageRequest ($page) {
    $.ajax({
      type: "GET",
      url: "/api/" + getSchoolID() + "/reports?page=" + $page,
      data: getSortingParam(),
      dataType: "html",
      scriptCharset: "utf-8",
      success: function(data)
      {
        $('tbody').html(data);
      }
    });
  }
  
  $('th').click(function() {
    switch ($(this).prop("id")) {
      case "date":
        if ($(this).prop("class") === "off") {
          $(this).html('授業のあった日 <i class="fa fa-caret-up"></i>').addClass("on").removeClass("off");
        }
        else {
          $(this).html('授業のあった日 <i class="fa fa-caret-down"></i>').addClass("off").removeClass("on");
        }
        break;
      case "public":
        if ($(this).prop("class") === "all") {
          $(this).html('下書き <i class="fa fa-caret-down"></i>').addClass("off").removeClass("all");
        }
        else if ($(this).prop("class") === "off") {
          $(this).html('公開 <i class="fa fa-caret-down"></i>').addClass("on").removeClass("off");
        }
        else if ($(this).prop("class") === "on") {
          $(this).html('すべて <i class="fa fa-caret-down"></i>').addClass("all").removeClass("on");
        }
        break;
      case "read":
        if ($(this).prop("class") === "all") {
          $(this).html('未読 <i class="fa fa-caret-down"></i>').addClass("off").removeClass("all");
        }
        else if ($(this).prop("class") === "off") { 
          $(this).html('既読 <i class="fa fa-caret-down"></i>').addClass("on").removeClass("off");
        }
        else if ($(this).prop("class") === "on") {
          $(this).html('すべて <i class="fa fa-caret-down"></i>').addClass("all").removeClass("on");
        }
        break;
    }
    getListRequest();
  });
  
  $('tbody').on('click', 'li', function() {
    switchPageRequest($(this).prop("id"));
  });
  
});
