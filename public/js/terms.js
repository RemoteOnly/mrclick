$(function(){"use strict";var t=function(){$("#terms-for-teachers").show(),$("#terms-for-students").hide();var t=location.pathname+"#terms-for-teachers";window.history.pushState(null,null,t)},e=function(){$("#terms-for-students").show(),$("#terms-for-teachers").hide();var t=location.pathname+"#terms-for-students";window.history.pushState(null,null,t)};switch($("#nav-for-teachers").on("click",function(e){e.preventDefault(),t()}),$("#nav-for-students").on("click",function(t){t.preventDefault(),e()}),$(location).attr("hash")){case"#terms-for-students":e();break;case"#terms-for-teachers":t();break;default:t()}});