$('.price-main').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToShow: 3,
    prevArrow: '<span class="a-prev"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow: '<span class="a-next"><i class="fa-solid fa-arrow-right"></i></span>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToShow: 1,
            }
        }
    ]
});

$('.healthcare').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<span class="a-prev2"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow: '<span class="a-next2"><i class="fa-solid fa-arrow-right"></i></span>',

    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToShow: 1,
            }
        }
    ]

});
$('.about').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="a-prev2"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow: '<span class="a-next2"><i class="fa-solid fa-arrow-right"></i></span>',

    responsive: [
        {
            breakpoint: 991,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToShow: 1,
            }
        }
    ]
});