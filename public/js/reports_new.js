$(function(){"use strict";function e(){for(var e=1;e<=$(".tableRowMain").length;e++){for(var n="[id=choosing"+e+"]",t="[class="+e+"]",i=0,c=0;c<$(t).length;c++){var s=t+":eq("+c+")";$(s).is(":checked")&&i++}$(n).html(i)}}$(".report-select-all-students a").on("click",function(e){e.preventDefault(),$(".x-student-id").each(function(e,n){$(n).prop("checked",!0)})}),$("select").change(function(){location.href=$(this).val()}),$('input[name="grade"]').click(function(e){var n=Number(this.id);if(n)$(this).prop("checked")?$('input[name="student_ids[]"][class='+n+"]").prop("checked",!0):$('input[name="student_ids[]"][class='+n+"]").prop("checked",!1);else{var t,i;if($(this).prop("checked"))for($('input[name="grade"]').prop("checked",!0),$('input[name="student_ids[]"]').prop("checked",!0),t=1;t<=$("[id^=choosing]").length;t++){i="[id=choosing"+t+"]";var c="[class="+t+"]";$(i).html($(c).length)}else for($('input[name="grade"]:not([id="0"])').prop("checked",!1),$('input[name="student_ids[]"]').prop("checked",!1),t=1;t<=$("[id^=choosing]").length;t++)i="[id=choosing"+t+"]",$(i).html("0")}e.stopPropagation()}),$('input[name="student_ids[]"]').on("click once",function(e){var n=Number(this.className);$('input[name="student_ids[]"][class='+n+"]:checked").length===$('input[name="student_ids[]"][class='+n+"]").length?$('input[name="grade"][id='+n+"]").prop("checked",!0):$('input[name="grade"][id='+n+"]").prop("checked",!1),e.stopPropagation()}).trigger("once"),$('input[type="checkbox"]').on("click once",function(){$('input[name="student_ids[]"]:checked').length===$('input[name="student_ids[]"]').length?$('input[name="grade"][id="0"]').prop("checked",!0):$('input[name="grade"][id="0"]').prop("checked",!1)}).first().trigger("once"),$("input").on("click",function(){var e,n;e="grade"===this.name?this.id:this.className,n="[id=choosing"+e+"]";for(var t="[class="+e+"]",i=0,c=0;c<$(t).length;c++){var s=t+":eq("+c+")";$(s).is(":checked")&&i++}$(n).html(i)}),e()});