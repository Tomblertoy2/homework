export function initTestimonialsSlider() {
    const testimonialsSlider = document.querySelector('.testimonials__slider');
    
    if (!testimonialsSlider) return;
    
    return new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },
        },
    });
}