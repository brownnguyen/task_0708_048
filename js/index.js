
$(document).ready(function () {
    $('.top-slide').slick({
        arrows: false
    });
    $('.staff-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    let arrowLeft = document.querySelector('.staff-content .slick-next');
    arrowLeft.innerHTML = '<span class="arrow-right"></span>'
    let arrowRight = document.querySelector('.staff-content .slick-prev');
    arrowRight.innerHTML = '<span class="arrow-left"></span>'
});

let menuBurger = document.querySelector(".menu-burger .menu");
let drawer = document.querySelector('.drawer');
menuBurger.onclick = function () {
    menuBurger.classList.toggle('active');
    if (menuBurger.classList.contains('active')) {
        drawer.classList.add('active');
    }
    else {
        drawer.classList.remove('active');
    }
}
$('#backTop').click(function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing');
    return false;
});
window.onscroll = function () {
    if (window.pageYOffset > window.innerHeight / 2) {
        document.querySelector('#backTop').style.opacity = 0.8;
        document.querySelector('#backTop').style.visibility = "visible"
    }
    else {
        document.querySelector('#backTop').style.opacity = 0;
        document.querySelector('#backTop').style.visibility = "hidden"
    }
}