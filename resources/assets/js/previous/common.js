(function(CR) {
  "use strict";

  var context = CR.baseContext;

  if (context.isTeacherLogin && context.isTeacherLogin === '1') {
    window.OneSignal = window.OneSignal || [];

    OneSignal.push(["init", {
      appId: context.onesignalAppId,
      safari_web_id: context.onesignalSafariId,
      autoRegister: false,
      promptOptions: {
        /* These prompt options values configure both the HTTP prompt and the HTTP popup. */
        /* actionMessage limited to 90 characters */
        actionMessage: "WEBサイトComiruは通知を表示しようとしています。",
        /* acceptButtonText limited to 15 characters */
        acceptButtonText: "許可",
        /* cancelButtonText limited to 15 characters */
        cancelButtonText: "拒否"
      }
    }]);

    try {
      OneSignal.isPushNotificationsEnabled().then(function(result) {
        if (!result) {
          OneSignal.push(function() {
            OneSignal.on('subscriptionChange', function(isSubscribed) {
              if (isSubscribed) {
                OneSignal.push(["sendTags", {
                  teacher_id: context.teacherId
                }]);
              }
            });
          });
          OneSignal.showHttpPrompt().catch(function() {});
        }
      });
    } catch (e) {
      //do nothing
    }
  }

  $(function() {
    /* side nav
    $(function() {
      $(".header-nav-item-toggle a").on("click", function(e) {
        e.preventDefault();
        $(".sidenav").toggleClass("sidenav-shown");
      });
      $(".sidenav-close, .sidenav-overlay").on("click", function(e) {
        e.preventDefault();
        $(".sidenav").removeClass("sidenav-shown");
      });
      autosize($("textarea"));
    });
    */
    /* dropdown menu */
    if ($('#header-dropdown-trigger')) {
      $(document).click(function() {
        $('.header-dropdown').hide();
      });

      $('#header-dropdown-trigger').click(function(e) {
        e.stopPropagation();
        $('.header-dropdown').show();
      });

      /*$('.header-dropdown > ul > li').click(function() {
        $(this).children('form').submit();
      });*/
    }
  });

  $("#close-email-message").click(function() {
    localStorage.setItem('close-email-notification', 'true');
    $("#message-email").hide();
  });

  $("#close-password-message").click(function() {
    localStorage.setItem('close-password-notification', 'true');
    $("#message-password").hide();
  });

  if (localStorage.getItem('close-email-notification')) {
    $("#message-email").hide();
  }

  if (localStorage.getItem('close-password-notification')) {
    $("#message-password").hide();
  }

})(window.CR);
