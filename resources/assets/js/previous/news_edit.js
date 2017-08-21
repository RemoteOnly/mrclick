$(function() {
  "use strict";
  $.extend( $.fn.pickadate.defaults, {
    monthsFull: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
    monthsShort: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
    weekdaysFull: [ '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日' ],
    weekdaysShort: [ '日', '月', '火', '水', '木', '金', '土' ],
    today: '今日',
    clear: '消去',
    firstDay: 1,
    format: 'yyyy mm dd',
    formatSubmit: 'yyyy/mm/dd'
  });
  $("#date").pickadate({
    format: "yyyy-mm-dd",
    formatSubmit: "yyyy-mm-dd",
    close: "閉じる"
  });
  $('#subjects').select2();
  $("button[name=delete]").on("click", function() {
    if (confirm("本当に削除してよろしいですか？")) {
      return true;
    }
    return false;
  });
  $("#status").on("change", function() {
    var status = $(this).val();
    var $saveBtn = $("button[name=save]");
    if (status === "published") {
      $saveBtn.html("保存して送信する");
    } else {
      $saveBtn.html("保存する");
    }
  });

  $('#content').froalaEditor({
    language: 'ja', theme: 'custom',
    placeholderText: '内容を入力してください',
    height: 300,
    toolbarSticky: false,
    key: 'umd1C-13xf1fB1C-7f==',
    imageUploadParam: 'image_param',
    imageUploadParams: {id: 'my_editor'},
    imageUploadURL: '/api/' + $('input[name=school_slug]').val() + '/image/upload',
    imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
    imageUploadMethod: 'POST',
    imageMaxSize: 5 * 1024 * 1024,
    toolbarButtonsXS: ['fullscreen', 'bold', 'paragraphFormat', 'color', 'align', 'formatOL', 'formatUL', 'insertLink', 'insertImage'],
    toolbarButtonsSM: ['fullscreen', 'bold', 'italic', 'underline', '|', 'subscript', 'superscript', '|',
     'fontFamily', 'fontSize', 'paragraphFormat', 'color', 'emoticons', '|', 'indent', 'outdent', '|', 'formatOL', 'formatUL', '|', 'align', '-',
     'insertTable', 'insertHR', 'insertLink', 'insertImage', 'quote', '|','undo', 'redo', '|', 'clearFormatting', 'selectAll'],
    toolbarButtonsMD: ['fullscreen', 'bold', 'italic', 'underline', '|', 'subscript', 'superscript', '|',
     'fontFamily', 'fontSize', 'paragraphFormat', 'color', 'emoticons', '|', 'indent', 'outdent', '|', 'formatOL', 'formatUL', '|', 'align', '-',
     'insertTable', 'insertHR', 'insertLink', 'insertImage', 'quote', '|','undo', 'redo', '|', 'clearFormatting', 'selectAll'],
    toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', '|', 'subscript', 'superscript', '|',
     'fontFamily', 'fontSize', 'paragraphFormat', 'color', 'emoticons', '|', 'indent', 'outdent', '|', 'formatOL', 'formatUL', '|', 'align', '-',
     'insertTable', 'insertHR', 'insertLink', 'insertImage', 'quote', '|','undo', 'redo', '|', 'clearFormatting', 'selectAll']
  })
  .on('froalaEditor.image.uploaded', function (e, editor, response) {
    var data = $.parseJSON(response);
    var aid = data.attachment_id;
    var $input = $('<input>',{type:'hidden', name:'inserted_image[]', value: aid, id: aid});
    $('.form-group-hidden').append($input);
  })
  .on('froalaEditor.image.removed', function (e, editor, $img) {
    $.ajax({
      method: "POST",
      url: '/api/' + $('input[name=school_slug]').val() + '/image/delete',
      data: { src: $img.attr('src') }
    })
    .done (function (response) {
      var aid = response.attachment_id;
      if (response.exists_in_na === 'true') {
        var $input = $('<input>',{type:'hidden', name:'removed_image[]', value: aid, id: aid});
        $('.form-group-hidden').append($input);
      } else if (response.exists_in_na === 'false') {
        $('input[name=inserted_image\\[\\]]'+'#'+aid).remove();
      }
    });
  })
  .on('froalaEditor.image.error', function (e, editor, error) {
    var $errorMessage = $('.fr-error .fr-message');
    switch (error.code) {
      case 1: $errorMessage.text('Error: 入力された画像リンクが不正です。'); break;
      case 2: $errorMessage.text('Error: 画像リンクを入力してください。'); break;
      case 3: $errorMessage.text('Error: アップロードに失敗しました。時間をおいて再度アップロードしてください。'); break;
      case 5: $errorMessage.text('Error: ファイルサイズが上限を超えています。'); break;
      case 6: $errorMessage.text('Error: アップロードできないファイル形式です。'); break;
      case 7: $errorMessage.text('Error: Internet Explorer 8, 9はこの機能に対応していません。'); break;
    }
  });

  var beforeTemplate = 0;
  $('#template').on('change', function() {
    if (!confirm("タイトルと本文の書き換えが発生します。よろしいですか？")) {
      $(this).val(beforeTemplate);
        return false;
    }
    var nid = $('#template option:selected').val(),
        url = '/api/' + $(this).siblings('input[name=school_slug]').val() + '/news/get/' + nid,
        title = "",
        content = "",
        attachments = [],
        result = "OK";
    if (nid !== "0") {
      $.ajax({
        url: url,
        type:'GET',
        dataType: 'json',
        data: {
          news_id: nid
        },
        timeout: 10000,
        async: false,
        success: function(news) {
          title = news.title;
          content = news.content;
          attachments = news.attachments;
        },
        error: function(error) {
          console.log(error.statusText);
          result = "NG";
        },
      });
    }
    if (result === "NG") {
      $(this).val(beforeTemplate);
      $('#toast-message').stop().fadeOut(100, function() {
        $('#toast-message p').html("エラーが発生しました");
        $('#toast-message').fadeIn(500).delay(2000).fadeOut(500);
      });
      return false;
    }

    $('#title').val(title);
    $('.fr-element').html($.nl2br(content));
    $('.fr-wrapper').removeClass('show-placeholder');
    beforeTemplate = nid;

    $('.file-link').remove();
    var count = 0;
    $.each(attachments, function() {
    　if (!this.on_wysiwyg) {
        var fileLink = '<div class="file-link">' +
                         '<input type="checkbox" name="attachment_ids[]" value="' + this.attachment_id + '" checked>' +
                         '<i class="fa fa-paperclip"></i>' +
                         '<a href="' + this.download_url + '">' + this.attachment.file_name + '</a>' +
                       '</div>';
        $('#file_label').after(fileLink);
        count++;
      }
    });
    if (count > 0) {
      $('#file_label').after('<div class="file-link form-help-block">使用するファイルを選択できます</div>');
    }
  });
});
