let toggleMenu = document.getElementById('toggle-menu'),
    contentMenu = document.getElementById('content_menu'),
    suscribeBtn = document.getElementById('suscribe'),
    imgMenu = document.getElementById('img_menu');

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