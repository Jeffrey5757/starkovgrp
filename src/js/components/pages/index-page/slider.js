const $slider = $('.single-item');

const $count_slider = document.querySelector('.count-slide');
if ($count_slider) {
    $count_slider.innerHTML = ('0' + $count_slider.textContent).slice(-2);

    $slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        document.getElementById('current-slide').innerHTML = ('0' + (nextSlide + 1)).slice(-2) + ' /';
    }).slick({
        infinite: true,
        dots: true,
        prevArrow: document.querySelector('.main-slider-arrow.prev'),
        nextArrow: document.querySelector('.main-slider-arrow.next'),
        adaptiveHeight: true
    });
}
