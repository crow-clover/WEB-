// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
  $('.glowAnime').each(function () {
    var elemPos = $(this).offset().top -50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height;
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("glow");

    }else {
      $(this).removeClass("glow");
    }
  });
}

// ロード画面
function time() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

function loadTime() {
    // spanタグを追加する
    var element = $(".glowAnime");
    element.each(function () {
      // コンソールログに以下２つの動きを出す！
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== "") {
          if (i < 9) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i + 1;
            textbox += '<span style="animation-delay:.' + n + 's;">' + t + '</span>';
          }
  
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
}


const promise = new Promise(function (resolve, reject) {

  setTimeout(function() {
    time;
    resolve();
  }, 4000);
});

promise.then(function () {
  GlowAnimeControl;
  loadTime;
  console.log('こんにちは');
})



