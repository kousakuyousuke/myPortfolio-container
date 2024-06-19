const nav = document.querySelector('#drawer');
const btn = document.querySelector('#drawerButton');
const mask = document.querySelector('#mask');

btn.onclick = () => {
  nav.classList.toggle('open');
  mask.classList.toggle('open');
  btn.classList.toggle('open');
}

mask.onclick = () => {
  nav.classList.remove('open');
  mask.classList.remove('open');
  btn.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
  const drawer = document.getElementById('drawer');
  const links = document.querySelectorAll('.drawer__link, .drawer__coupon, .logo-link'); // ロゴリンクも含める
  const couponButton = document.querySelector('.fv__button--coupon'); // クーポンボタンを選択

  // モーダルウィンドウの要素を取得
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalName = document.getElementById('modal-name');
  const modalDetail = document.getElementById('modal-detail');
  const modalPrice = document.getElementById('modal-price');
  const closeBtn = document.querySelector('.close');

  modal.style.display = 'none';

  // スクロール関数
  function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  // ドロワーメニューのリンクにイベントリスナーを追加
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // デフォルトのリンク動作をキャンセル

      const targetId = this.getAttribute('href').substring(1); // リンクのhref属性からターゲットIDを取得
      const targetElement = document.getElementById(targetId); // ターゲット要素を取得

      if (targetElement) {
        scrollToSection(targetId); // スムーズスクロール
      }

      // ドロワーメニューを閉じる
      drawer.classList.remove('open');
      nav.classList.remove('open');
      mask.classList.remove('open');
      btn.classList.remove('open');
    });
  });

  // クーポンボタンにイベントリスナーを追加
  if (couponButton) {
    couponButton.addEventListener('click', function() {
      scrollToSection('CTA');
    });
  }

  // 各メニューアイテムにクリックイベントを追加
  const menuItems = document.querySelectorAll('.menu__item-sp');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('.menu__img').src;
      const name = this.querySelector('.menu__name').innerHTML;
      const detail = this.querySelector('.menu__text--detail').innerHTML;
      const price = this.querySelector('.menu__text--price').innerHTML;

      modalImage.src = imgSrc;
      modalName.innerHTML = name;
      modalDetail.innerHTML = detail;
      modalPrice.innerHTML = price;

      modal.style.display = 'flex'; // Flexboxを使用して中央に配置
    });
  });

  // モーダルを閉じる
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // モーダル外をクリックしても閉じる
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
