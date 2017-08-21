/////////////////////////////////
// Common
/////////////////////////////////
$(function() {
  'use strict';

  var H = $(window).height();
  var W = $(window).width();
  var modal = '';
  if (W < 768) { //SP_size
    //画像切り替え
    $('.imgChange').each(function() {
      $(this).attr("src", $(this).attr("src").replace('pc', 'sp'));
    });
  }
  if (W >= 768) { //PC_size
    //tocases吹き出し追加
    $("#top .secoundview").append('<a href="#cases" class="tocase">');
    //画像切り替え
    $('.imgChange').each(function() {
      $(this).attr("src", $(this).attr("src").replace('sp', 'pc'));
    });
    //mainvisualの高さを調節
    $("#top .firstview").css({
      height: H + "px"
    });
  }
  //スムーススクロール
  $('a[href^="#"]' + 'a:not(".carousel-control")').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? 'html' : href);
    var position = target.offset().top - 100;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  $(window).on('load resize', function() { //ページの読み込み時とリサイズ時の指定をまとめて
    //画面の高さを取得して、変数wHに代入
    //var wH = $(window).height();
    var wW = $(window).width();
    if (wW < 768) {
      ////////////////////////////////////
      //SP_size
      ////////////////////////////////////
      //タイトルのmargintop
      $("#points .wrapper h2").css({
        top: "-" + wW * 0.36 + "px",
        marginBottom: "-" + wW * 0.36 + "px"
      });
      $("#cases .wrapper h2").css({
        top: "-" + wW * 0.36 + "px",
        marginBottom: "-" + wW * 0.36 + "px"
      });
      $("#request .wrapper h2").css({
        top: "-" + wW * 0.38 + "px",
        marginBottom: "-" + wW * 0.38 + "px"
      });
      $("#company .wrapper h2").css({
        top: "-" + wW * 0.37 + "px",
        marginBottom: "-" + wW * 0.37 + "px"
      });
      //スライド前後ボタン
      $("#cases .wrapper .contbtns").css({
        top: wW * 0.5 + "px"
      });
    }
    if (wW >= 768) { //PC_size
      //タイトルのmargintop
      $("#points .wrapper h2").css({
        top: "-" + wW * 0.25 + "px",
        marginBottom: "-" + wW * 0.25 + "px"
      });
      $("#cases .wrapper h2").css({
        top: "-" + wW * 0.24 + "px",
        marginBottom: "-" + wW * 0.24 + "px"
      });
      $("#request .wrapper h2").css({
        top: "-" + wW * 0.265 + "px",
        marginBottom: "-" + wW * 0.265 + "px"
      });
      $("#company .wrapper h2").css({
        top: "-" + wW * 0.264 + "px",
        marginBottom: "-" + wW * 0.264 + "px"
      });
      //スライド前後ボタン
      $("#cases .wrapper .contbtns").css({
        top: "50%"
      });
    }
  });

  // モーダルコンテンツの表示位置を設定する関数
  function modalResize() {
    // ウィンドウの横幅、高さを取得
    var w = $(window).width();
    //var h = $(window).height();

    // モーダルコンテンツの表示位置を取得
    var x = (w - $(modal).outerWidth(true)) / 2;
    //var y = (h - $(modal).outerHeight(true)) / 2;

    // モーダルコンテンツの表示位置を設定
    $(modal).css({
      'left': x + 'px',
      /*'top': y + 'px'*/
    });
  }

  // リサイズしたら表示位置を再取得
  $(window).on('resize', function() {
    modalResize();
  });

  // 「.modal-open」をクリック
  $('.modal-open').click(function() {
    // オーバーレイ用の要素を追加
    $('body').append('<div class="modal-overlay"></div>');
    // オーバーレイをフェードイン
    $('.modal-overlay').fadeIn('slow');
    // bodyにnoscrollを付加
    $('body').addClass('noscroll');

    // モーダルコンテンツのIDを取得
    modal = '#' + $(this).attr('data-target');
    // モーダルコンテンツの表示位置を設定
    modalResize();
    // モーダルコンテンツフェードイン
    $(modal).fadeIn('slow');

    // 「.modal-overlay」あるいは「.modal-close」をクリック
    $('.modal-overlay, .modal-close').off().click(function() {
      // モーダルコンテンツとオーバーレイをフェードアウト
      $(modal).fadeOut('slow');
      $('.modal-overlay').fadeOut('slow', function() {
        // オーバーレイを削除
        $('.modal-overlay').remove();
      });
      // bodyにnoscrollをトル
      $('body').removeClass('noscroll');
    });
  });
});