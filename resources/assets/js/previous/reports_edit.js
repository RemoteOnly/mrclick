$(function () {
    "use strict";
    $.extend($.fn.pickadate.defaults, {
        monthsFull: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        weekdaysFull: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
        weekdaysShort: ['日', '月', '火', '水', '木', '金', '土'],
        today: '今日',
        clear: '消去',
        firstDay: 1,
        format: 'yyyy mm dd',
        formatSubmit: 'yyyy/mm/dd'
    });
    $("#date-start").pickadate({
        format: "yyyy-mm-dd",
        formatSubmit: "yyyy-mm-dd",
        close: "閉じる",
        onOpen: function () {
            var de = $("#date-end").val();
            this.set("max", (de && de.length > 0) ? new Date(de) : "");
        }
    });
    $("#date-end").pickadate({
        format: "yyyy-mm-dd",
        formatSubmit: "yyyy-mm-dd",
        close: "閉じる",
        onOpen: function () {
            var ds = $("#date-start").val();
            this.set("min", (ds && ds.length > 0) ? new Date(ds) : "");
        }
    });
    if($('#subjects').length > 0) {
        $('#subjects').select2();
    }
    $("button[name=delete]").on("click", function () {
        if (confirm("本当に削除してよろしいですか？")) {
            return true;
        }
        return false;
    });
    $("#status").on("change", function () {
        var status = $(this).val();
        var $saveBtn = $("button[name=save]");
        if (status === "published") {
            $saveBtn.html("保存して送信する");
        } else {
            $saveBtn.html("保存する");
        }
    });

    var beforeTemplate = 0;
    $('#template').on('change', function () {
        if (!confirm("授業内容と宿題の書き換えが発生します。よろしいですか？")) {
            $(this).val(beforeTemplate);
            return false;
        }
        var rtid = $('#template option:selected').val(),
            url = '/api/' + $(this).siblings('input[name=school_slug]').val() + '/report/template/get/' + rtid,
            lessonText = "",
            homeworkText = "",
            result = "OK";
        if (rtid !== "0") {
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                data: {
                    report_template_id: rtid
                },
                timeout: 10000,
                async: false,
                success: function (reportTemplate) {
                    lessonText = reportTemplate.lesson_text;
                    homeworkText = reportTemplate.homework_text;
                },
                error: function (error) {
                    console.log(error.statusText);
                    result = "NG";
                },
            });
        }
        if (result === "NG") {
            $(this).val(beforeTemplate);
            $('#toast-message').stop().fadeOut(100, function () {
                $('#toast-message p').html("エラーが発生しました");
                $('#toast-message').fadeIn(500).delay(2000).fadeOut(500);
            });
            return false;
        }
        $('#lesson-text').val(lessonText);
        $('#homework-text').val(homeworkText);
        beforeTemplate = nid;
    });

    var count = 1;
    var limitTextbooks = 6;

    // trigger the change event for the select
    function retrieve_select() {
        for (var i = 1; i <= limitTextbooks; i++) {
            var select_seltextbook = $('#selTextbook' + i);
            var book_id = select_seltextbook.data('item-id');
            if (book_id) {
                select_seltextbook.val(book_id);
                select_seltextbook.change();
                if (i > 1) {
                    $('#Textbook' + i).show();
                    $('.minus').prop("disabled", false);
                }

            }

            var select_unit = $('#selUnit' + i);
            var unit_id = select_unit.data('item-id');
            if (unit_id) {
                select_unit.val(unit_id);
            }

            // textbookRequest function will clear the page value when it is triggered
            var select_page = $('#page' + i);
            select_page.val(select_page.data('item-value'));
        }
    }

    function getSchoolID() {
        var currentpath = location.href.split("/");
        var currentdir = currentpath[3];
        return currentdir;
    }

    function ajaxGetOldHomeworks(subjects, studentId) {
        $.ajax({
            type: "GET",
            url: "/api/" + getSchoolID() + "/getoldhomeworks?",//subjects=" + subjects + "&studentid=" + studentId,
            dataType: "json",
            data: {
                subjects: subjects ? subjects.toString() : '',
                studentid: studentId
            },
            scriptCharset: "utf-8",
            success: function (data) {
                var oldHomeworks = data.oldHomeworks;
                $('#homeworksbody tr').remove();
                $.each(oldHomeworks, function () {
                    $('#homeworksbody').append('<tr><td>' + this.date + '</td><td>' + this.subjects + '</td><td><span class="js-context">' + this.text + '</span></td></tr>');
                });
            }
        });
    }

    function ajaxGetOldNotes(subjects, studentId) {
        $.ajax({
            type: "GET",
            url: "/api/" + getSchoolID() + "/getoldnotes?",//subjects=" + subjects + "&studentid=" + studentId,
            dataType: "json",
            data: {
                subjects: subjects ? subjects.toString() : '',
                studentid: studentId
            },
            scriptCharset: "utf-8",
            success: function (data) {
                var oldNotes = data.oldNotes;
                $('#notesbody tr').remove();
                $.each(oldNotes, function () {
                    $('#notesbody').append('<tr><td>' + this.date + '</td><td>' + this.subjects + '</td><td><span class="js-context">' + this.note + '</span></td></tr>');
                });
            }
        });
    }

    $("#indicate-textbook").on("change", function () {
        var show_textbook = $(this).prop('checked');
        if (show_textbook) {
            $('#form-textbook').show();
            retrieve_select();
        } else {
            $('#form-textbook').hide();
            for (var i = 1; i <= limitTextbooks; i++) {
                $('#selTextbook' + i).val('');
                $('#selUnit' + i).val('');
                $('#page' + i).val('');
            }
            for (i = 2; i <= limitTextbooks; i++) {
                $('#Textbook' + i).hide();
            }
            count = 1;
            $('.plus').prop("disabled", false);
            $('.minus').prop("disabled", true);
        }
        //$('#homework-text').val('');
    });

    function textbookRequest(subjects, grade) {
        $.ajax({
            type: "GET",
            url: "/api/" + getSchoolID() + "/gettextbooks?",//subjects=" + subjects + "&grade=" + grade,
            dataType: "json",
            data: {
                subjects: subjects ? subjects.toString() : '',
                grade: grade
            },
            scriptCharset: "utf-8",
            success: function (data) {

                var remenber = [];
                var Subject = $('#subjects').val();
                for (var i = 1; i <= count; i++) {
                    var Textbook = $('#selTextbook' + i + ' option:selected').text().split(':')[0];
                    var flag = false;
                    if (Textbook !== '') {
                        for (var j = 0; j < Subject.length; j++) {
                            if (Textbook === Subject[j]) {
                                flag = true;
                            }
                        }
                        if (flag === true) {
                            remenber[i] = {
                                'Textbook': $('#selTextbook' + i).val(),
                                'Unit': $('#selUnit' + i).val(),
                                'Page': $('#page' + i).val()
                            };
                        }
                    }
                }

                for (i = 1; i <= limitTextbooks; i++) {
                    $('#selTextbook' + i).empty().change();
                    $('#selUnit' + i).empty();
                    $('#page' + i).val('');
                    $('#selTextbook' + i).append('<option></option>');
                    $('#selUnit' + i).append('<option></option>');
                }
                $.each(data.textbooks,
                    function (index, elem) {
                        for (var i = 1; i <= limitTextbooks; i++) {
                            $('#selTextbook' + i).append('<option value=' + elem.textbook.id + '>' + elem.textbook.subject + ':' + elem.textbook.name + '</option>');
                        }
                        $('[id^=selTextbook]').change(function () {
                            var number = $('[id^=selTextbook]').index(this) + 1;
                            var selTextbook = '#selTextbook' + number + ' option:selected';
                            var selname = (elem.textbook.subject + ':' + elem.textbook.name);
                            if ($(selTextbook).text() === selname) {
                                $('#selUnit' + number).empty();
                                $('#selUnit' + number).append('<option></option>');
                                $.each(elem.units, function (index, unit_elem) {
                                    $('#selUnit' + number).append('<option value=' + unit_elem.id + ' >' + unit_elem.name + '</option>');
                                });
                            } else if ($(selTextbook).text() === "") {
                                $('#selUnit' + number).empty();
                                $('#selUnit' + number).append('<option></option>');
                            }
                        });

                        for (i = 1; i <= limitTextbooks; i++) {
                            if (remenber[i]) {
                                $("#selTextbook" + i).val(remenber[i].Textbook).change();
                                $("#selUnit" + i).val(remenber[i].Unit);
                                $("#page" + i).val(remenber[i].Page);
                            }
                        }
                    }
                );

                // if the page is used for updating, show the information about the selected books
                if (parseInt(status) === 1) {
                    $('#indicate-textbook').prop('checked', true).change();
                }
            }
        });
    }

    $('#oldhomework').on('change', function () {
        var subjects = $('#subjects').val();
        var studentId = $('.report-profile-name').find('a:first').attr('href').split('/')[3];
        if ($('#oldhomework:checked').val()) {
            ajaxGetOldHomeworks(subjects, studentId);
            $('#homeworktable').show();
        } else {
            $('#homeworktable').hide();
        }
    });

    $('#oldnote').on('change', function () {
        var subjects = $('#subjects').val();
        var studentId = $('.report-profile-name').find('a:first').attr('href').split('/')[3];
        if ($('#oldnote:checked').val()) {
            ajaxGetOldNotes(subjects, studentId);
            $('#notetable').show();
        } else {
            $('#notetable').hide();
        }
    });

    $('#subjects').change(function () {
        if ($('#subjects').val() && $('#grade').val()) {
            textbookRequest($('#subjects').val(), $('#grade').val());
        } else {
            for (var i = 1; i <= limitTextbooks; i++) {
                $('#selTextbook' + i).empty();
                $('#selUnit' + i).empty();
                $('#selTextbook' + i).append('<option></option>');
                $('#selUnit' + i).append('<option></option>');
            }
        }

        var subjects = $('#subjects').val();
        var studentId = $('.report-profile-name').find('a:first').attr('href').split('/')[3];
        ajaxGetOldHomeworks(subjects, studentId);
    });

    $(function () {
        textbookRequest($('#subjects').val(), $('#grade').val());
    });

    $('.plus').click(function () {

        var textbook_wrapper = $('[id^="Textbook"]');
        textbook_wrapper.each(function (index) {
            var dom_select_book = $(this).find('[id^="selTextbook"]').eq(0);
            var book_id = dom_select_book.val();

            if ($.isNumeric(book_id)) {
                count = index + 2;
            }
        });

        if (count >= limitTextbooks) {
            $(".plus").prop("disabled", true);
        }
        $('#Textbook' + count).show();
        if(count>1) {
            $('.minus').prop("disabled", false);
        }
    });

    // function writeHomework() {
    //     var homework = "";
    //     var selectorTextbook;
    //     var selectorUnit;
    //     var selectorPage;
    //     for (var i = 1; i <= count; i++) {
    //         selectorTextbook = '#selTextbook' + i + ' option:selected';
    //         selectorUnit = '#selUnit' + i + ' option:selected';
    //         selectorPage = '#page' + i;
    //         if ($(selectorTextbook).text() !== '') {
    //             homework += i + '. ' +
    //                 $(selectorTextbook).text() + ' , ' +
    //                 $(selectorUnit).text() + ' , ' +
    //                 $(selectorPage).val() + '\n';
    //         }
    //     }
    //     $('#homework-text').val(homework);
    //     return 1;
    //

    $('.minus').click(function () {
      /*var textbook_wrapper = $('[id^="Textbook"]');
        textbook_wrapper.each(function (index) {
            var dom_select_book = $(this).find('[id^="selTextbook"]').eq(0);
            var book_id = dom_select_book.val();

            if ($.isNumeric(book_id)) {
                count = index + 1;
            }
        });*/

        var countOrigin = count;
        count--;
        var number = $('.minus').index(this) + 1;

        for (var i = number; i < countOrigin; i++) {
            var next = i + 1;
            var next_textbook = $('#selTextbook' + next).val();
            var next_unit = $('#selUnit' + next).val();
            var next_page = $('#page' + next).val();
            $('#selTextbook' + i).val(next_textbook).change();
            $('#selUnit' + i).val(next_unit);
            $('#page' + i).val(next_page);
        }

        $('#selTextbook' + countOrigin).val('');
        $('#selUnit' + countOrigin).val('');
        $('#page' + countOrigin).val('');

        $('#Textbook' + countOrigin).hide();
        $('.plus').prop("disabled", false);
        if (count === 1) {
            $('.minus').prop("disabled", true);
        }
        //writeHomework();
    });

    $('[id^=Textbook]').change(function () {
        //writeHomework();
    });

    var autoheight = ['#lesson-text', '#homework-text', '#comment', '#note'];
    $(document).ready(function(){
      for(var i = 0; i < 4; i++) {
        $(autoheight[i]).trigger('input');
      }
    });

    $("#lesson-text, #homework-text, #comment, #note").on("input",function(evt){
      if(evt.target.scrollHeight > evt.target.offsetHeight){
        $(evt.target).height(evt.target.scrollHeight);
      }else{
        var lineHeight = Number($(evt.target).css("lineHeight").split("px")[0]);
        while (evt.target.scrollHeight > 80){
          $(evt.target).height($(evt.target).height() - lineHeight);
          if(evt.target.scrollHeight > evt.target.offsetHeight){
            $(evt.target).height(evt.target.scrollHeight);
            break;
          }
        }
      }
    });

});
