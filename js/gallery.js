'use strict';

{

    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const overlay = document.querySelector('.overlay');
    const items = document.querySelectorAll('.item');
    const largeImg = document.getElementById('img');
    const view = document.querySelector('.view-larger');
    const viewClose = document.getElementById('view-close');

    // 画像をクリックすると拡大表示
    items.forEach((item) => {
        item.addEventListener('click', () => {
            largeImg.src = item.firstElementChild.src;
            view.classList.add('show');
        });
    });

    // openボタンを押した時のイベント
    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide')
    });

    // closeボタンを押した時のイベント
    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });

    // 
    viewClose.addEventListener('click', () => {
        view.classList.remove('show');
    });
}