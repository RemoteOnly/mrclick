!function(){"use strict";$(".related-account a").click(function(){console.log(1);var t=$(this).data("account-id");$.ajax({url:"/switch_account",type:"post",dataType:"json",data:{id:t},success:function(t){1===t.status?(alert("切换成功，页面即将跳转"),window.location.href="/school/index"):(alert("切换失败，页面即将跳转到登录页面"),window.location.href="/login")},error:function(){alert("切换出错，请手动退出并重新登录想登录的账号")}})})}();