const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var tab = $('.tab-nav-item');
var tabs = $$('.tab-nav-item');


tabs.forEach((tab, index) => {
    var line = $('.line');
    var contents = $$('.content-item');

    tab.onclick = function () {
        $('.tab-nav-item.active').classList.remove('active')
        $('.content-item.active').classList.remove('active')

        tab.classList.add('active');
        contents[index].classList.add('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    }


})
