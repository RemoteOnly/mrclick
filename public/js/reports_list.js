$(function(){"use strict";function s(){var s=location.href.split("/"),a=s[s.length-2];return a}function a(){var s={date:$("#date").prop("class"),"public":$("#public").prop("class"),read:$("#read").prop("class")};return s}function t(){$.ajax({type:"GET",url:"/api/"+s()+"/reports",data:a(),dataType:"html",scriptCharset:"utf-8",success:function(s){$("tbody").html(s)}})}function l(t){$.ajax({type:"GET",url:"/api/"+s()+"/reports?page="+t,data:a(),dataType:"html",scriptCharset:"utf-8",success:function(s){$("tbody").html(s)}})}$("th").click(function(){switch($(this).prop("id")){case"date":"off"===$(this).prop("class")?$(this).html('授業のあった日 <i class="fa fa-caret-up"></i>').addClass("on").removeClass("off"):$(this).html('授業のあった日 <i class="fa fa-caret-down"></i>').addClass("off").removeClass("on");break;case"public":"all"===$(this).prop("class")?$(this).html('下書き <i class="fa fa-caret-down"></i>').addClass("off").removeClass("all"):"off"===$(this).prop("class")?$(this).html('公開 <i class="fa fa-caret-down"></i>').addClass("on").removeClass("off"):"on"===$(this).prop("class")&&$(this).html('すべて <i class="fa fa-caret-down"></i>').addClass("all").removeClass("on");break;case"read":"all"===$(this).prop("class")?$(this).html('未読 <i class="fa fa-caret-down"></i>').addClass("off").removeClass("all"):"off"===$(this).prop("class")?$(this).html('既読 <i class="fa fa-caret-down"></i>').addClass("on").removeClass("off"):"on"===$(this).prop("class")&&$(this).html('すべて <i class="fa fa-caret-down"></i>').addClass("all").removeClass("on")}t()}),$("tbody").on("click","li",function(){l($(this).prop("id"))})});