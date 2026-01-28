export function initGallerySlider() {
    const gallerySlider = document.querySelector('.gallery__slider');
    
    if (!gallerySlider) return;
    
    return new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32
            },
            1101: {
                slidesPerView: 4,
            },
        },
    });
}