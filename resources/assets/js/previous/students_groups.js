
$(function() {
  "use strict";
  $("button[name=delete]").on("click", function() {
  if (confirm("本当に削除してよろしいですか？")) {
    return true;
  }
    return false;
  });

  $('input[name="grade"]').click(function() {
   var g_num = Number(this.id);
   if (g_num) {
     if ($(this).prop('checked')) {
       // その学年の全生徒を選択
       $('input[name="student_ids[]"][class=' + g_num + ']').prop('checked',true);
     } else {
       // その学年の全生徒を非選択
       $('input[name="student_ids[]"][class=' + g_num + ']').prop('checked',false);
     }
   }
   else {
     if ($(this).prop('checked')) {
       //全員選択
       $('input[name="grade"]').prop('checked',true);
       $('input[name="student_ids[]"]').prop('checked',true);
     } else {
       $('input[name="grade"]:not([id="0"])').prop('checked',false);
       $('input[name="student_ids[]"]').prop('checked',false);
     }
   }
  });

  $('input[name="student_ids[]"]').on('click once', function() {
   var g_num = Number(this.className);
   //その学年の全生徒が選択されている場合チェックボックスをON、そうでなければOFF
   if ($('input[name="student_ids[]"][class=' + g_num + ']:checked').length === $('input[name="student_ids[]"][class=' + g_num + ']').length) {
     $('input[name="grade"][id=' + g_num + ']').prop('checked',true);
   } else {
     $('input[name="grade"][id=' + g_num + ']').prop('checked',false);
   }
  }).trigger('once');

  $('input[type="checkbox"]').on('click once', function() {
    if ($('input[name="student_ids[]"]:checked').length === $('input[name="student_ids[]"]').length) {
      //すべての生徒が選択されている場合、全選択のチェックボックスをON
      $('input[name="grade"][id="0"]').prop('checked',true);
    } else {
      //そうでなければOFF
      $('input[name="grade"][id="0"]').prop('checked',false);
    }
  }).first().trigger('once');

});
