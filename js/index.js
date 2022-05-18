'use strict';


const contentBlock = document.querySelectorAll('.content_block');

autoSquare();
window.addEventListener('resize', () => {
    console.log(document.body.clientWidth);
    if(document.body.clientWidth > 420) {
        autoSquare();
    }
});

// セクションごとに正方形に調整してくれるシステム
function autoSquare() {
    contentBlock.forEach(e => {
        const elementArea = e.getBoundingClientRect();
        e.style.height = `${elementArea.width /2}px`;
    });
}

// 勝手に背景画像用のafterを付与してくれるシステム
const contentBlockChildren = document.querySelectorAll('.content_block div[style]');
contentBlockChildren.forEach(e => {
    const before = document.createElement('div');
    before.classList.add('before');
    before.style.backgroundImage = e.style.backgroundImage;
    e.style.backgroundImage = '';
    e.prepend(before);
});