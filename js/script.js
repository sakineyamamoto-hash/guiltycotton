//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


/**
 * IntersectionObserverを初期化する
 * @param target {HTMLElement} 監視対象の要素
 * @param options {IntersectionObserverInit} IntersectionObserverオプション
 */
const setupIntersectionObserver = (target, options) => {
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // トリガーされた要素にisActiveクラスを追加
        entry.target.classList.add("isActive");
        // アニメーションは1度だけなので、トリガーしたら監視を解除する
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
};

// aboutフェードイン
jQuery(function($) {
$(window).on('load scroll', function (){

  var box = $('.inview');
  var animated = 'active';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });
});
})

// +-btn
document.querySelectorAll('.qty').forEach(qty => {
  const down = qty.querySelector('.down');
  const up = qty.querySelector('.up');
  const input = qty.querySelector('.textBox');

  down.addEventListener('click', () => {
    if (input.value > 0) {
      input.value--;
    }
  });

  up.addEventListener('click', () => {
    input.value++;
  });
});

// add to cart
const cartCount = document.getElementById('cart-count');
const addCartBtn = document.querySelector('.add-cart');

addCartBtn.addEventListener('click', () => {
  let total = 0;

  document.querySelectorAll('.textBox').forEach(input => {
    total += Number(input.value);
  });

  if (total === 0) {
    cartCount.classList.add('is-hidden');
    alert('数量を選択してください');
    return;
  }

  cartCount.textContent = total;
  cartCount.classList.remove('is-hidden');
});

const addedMessage = document.querySelector('.added-message');

addCartBtn.addEventListener('click', () => {
  let total = 0;

  document.querySelectorAll('.textBox').forEach(input => {
    total += Number(input.value);
  });

  if (total === 0) {
    cartCount.classList.add('is-hidden');
    return;
  }

  cartCount.textContent = total;
  cartCount.classList.remove('is-hidden');

  // ✓ added 表示
  addedMessage.classList.add('is-show');

  setTimeout(() => {
    addedMessage.classList.remove('is-show');
  }, 1000);
});

//hamburger menu
let ham = document.querySelector(".ham");
let gnav = document.querySelector(".nav-list");

ham.addEventListener("click",()=>{
    ham.classList.toggle("active");
    gnav.classList.toggle("active");
});

//どこクリックしてもメニュー閉じる
gnav.addEventListener("click", ()=> { 
    ham.classList.remove("active");
    gnav.classList.remove("active");
})
