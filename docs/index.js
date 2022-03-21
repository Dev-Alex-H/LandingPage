const toggleMenu = document.getElementById('toggle-menu'),
    contentMenu = document.getElementById('content_menu'),
    imgMenu = document.getElementById('img_menu'),
    slider = document.querySelector('#slider'),
    btnLeft = document.querySelector('#btn--left'),
    btnRight = document.querySelector('#btn--right');

let suscribeBtn = document.getElementById('suscribe'),
    sendBtn = document.querySelector('#btn_send'),
    sliderSection = document.querySelectorAll('.slider__section'),
    sliderSectionLast = sliderSection[sliderSection.length - 1];

toggleMenu.addEventListener('click', () => {
    contentMenu.classList.toggle('show_menu');
    if (contentMenu.classList.contains('show_menu')) {
        imgMenu.src = "./img/close.png";
    } else {
        imgMenu.src = "./img/lista.png";
    }
});

contentMenu.addEventListener('click', e => {
    if (!e.target.classList.contains('navbar')) {
        contentMenu.classList.remove('show_menu');
        imgMenu.src = "./img/lista.png";
    }
});

suscribeBtn.addEventListener('', (e) => {
    e.preventDefault();
});

sendBtn.addEventListener('', (e) => {
    e.preventDefault();
});

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = '0.5s linear';
    setTimeout(function () {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}
function Prev() {
    let sliderSection = document.querySelectorAll('.slider__section'),
        sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '0%';
    slider.style.transition = '0.5s linear';
    setTimeout(function () {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}

btnRight.addEventListener('click', function () { Next(); });
btnLeft.addEventListener('click', function () { Prev(); });

setInterval(function () { Next(); }, 7000);
