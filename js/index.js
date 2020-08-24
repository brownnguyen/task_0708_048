window.onload = function () {
    let arrowLeft = document.querySelector('.staff-content .slick-next');
    arrowLeft.innerHTML = '<span class="arrow-right"></span>'
    let arrowRight = document.querySelector('.staff-content .slick-prev');
    arrowRight.innerHTML = '<span class="arrow-left"></span>'
}



$(document).ready(function () {
    $('.top-slide').slick({
        arrows: false
    });
});
$(document).ready(function () {
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
});