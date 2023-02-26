'use strict'

{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const overlay = document.querySelector('.overlay');
    const mainImage = document.getElementById('main-image');
    const items = document.querySelectorAll('.item');
    const largeImg = document.getElementById('img');
    const view = document.querySelector('.view-larger');
    let imgList = [1,];

    // openボタンを押した時のイベント
    open.addEventListener('click', ()=> {
        overlay.classList.add('show');
        open.classList.add('hide')
    });

    // closeボタンを押した時のイベント
    close.addEventListener('click', ()=> {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });

    // 画像をランダムに切り替える
    mainImage.addEventListener('animationiteration', () => {
        let count = Math.floor(Math.random() * 10);
        let flag = true;
        while (flag) {
            if (imgList.length === 10) {
                imgList = [];
            } else if (imgList.includes(count)){
                count = Math.floor(Math.random() * 10);
            } else {
                imgList.push(count);
                flag = false;
            }
        }
        mainImage.src = `imgs/pic${count}.jpg`;
    });
}


