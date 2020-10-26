// 　ハンバーガーメニューの操作
$(function(){
  // 初期状態でハンバーガーメニューを非表示
  $("#humberger-menu").hide();
  // ハンバーガーメニューをクリックしたときの処理
  $("#humberger").click(function(){
    $("#humberger-menu").slideDown(300);
    $("html").addClass("scroll-lock");
  });
  // ハンバーガーメニュー内の閉じるボタンをクリックしたときの処理
  $("#close-button").click(function(){
    $("#humberger-menu").slideUp(300);
    $("html").removeClass("scroll-lock");
  });
  $(".humberger-menu__link>a").click(function(){
    $("#humberger-menu").slideUp(300);
    $("html").removeClass("scroll-lock");
  });
});

// ページ内スクロール
$(function(){
   // #で始まる出発地点をクリックした場合に処理を実行
  $('a[href^="#"]').click(function() {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    const offset = -30;
    // 出発地点の値を取得
    var href= $(this).attr("href");
    // 到着地点を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 到着地点を数値で取得
    var position = target.offset().top + offset;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, 400, 'swing');
    return false;
  });
});