(function($) {
  "use strict";
  $.extend({
    nl2br: function nl2br(str) {
      return str.replace(/\r\n|\n\r/g, "<br>");
    }
  });
})(jQuery);
