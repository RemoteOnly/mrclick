$(function(){"use strict";$("button[name=delete]").on("click",function(){return!!confirm("本当に削除してよろしいですか？")}),$("#x-change-student-no").on("click",function(t){t.preventDefault(),$(this).parent().hide(),$("#student-no").show()}),$("#x-add-student-email").on("click",function(t){t.preventDefault(),$(this).parent().hide(),$("#student-email").show(),$("#student-email-config").show()}),$("#teacher-selector").select2(),$("#form-student").on("submit",function(){return $("#my-teacher-ids").val($("#teacher-selector").val()),!0}),$("#attach-sibling").click(function(t){t.preventDefault();var e=$("#relative-student-no").val(),n=$(this).data("student-id"),a=$(this).data("school-slug");e&&$.ajax({url:"/"+a+"/students/"+n+"/attach_sibling",type:"post",dataType:"json",data:{relative_no:e,_csrf_token:$("[name=_csrf_token]").attr("content")},success:function(t){if(1===t.status){$("#siblings ul").children().remove();for(var e=0;e<t.siblings.length;e++)$("#siblings ul").append("<li>"+t.siblings[e].name+'&nbsp;<button class="detach-sibling btn btn-negative btn-very-small" data-student-id="'+t.siblings[e].id+'">削除</button></li>')}else alert(t.message)},error:function(){alert("Something goes wrong. Please refresh the page and try again")}})}),$("#siblings").on("click",".detach-sibling",function(t){t.preventDefault();var e=$("#attach-sibling").data("student-id"),n=$("#attach-sibling").data("school-slug"),a=$(this).data("student-id"),s=this,i=confirm("本当に削除してよろしいですか？");i&&$.ajax({url:"/"+n+"/students/"+e+"/detach_sibling",type:"delete",dataType:"json",data:{relative_id:a,_csrf_token:$("[name=_csrf_token]").attr("content")},success:function(t){1===t.status?$(s).parent().remove():alert(t.message)},error:function(){alert("Something goes wrong. Please refresh the page and try again")}})})});