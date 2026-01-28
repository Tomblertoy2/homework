import { initBurger } from './modules/burger.js';
import { initModal } from './modules/modal.js';
import { initTabs } from './modules/tabs.js';
import { initAccordion } from './modules/accordion.js';
import { initGallerySlider } from './modules/gallery-slider.js';
import { initTestimonialsSlider } from './modules/testimonials-slider.js';
import { initPhoneMask } from './modules/phone-mask.js';

// Инициализация всех модулей при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    initBurger();
    initModal();
    initTabs();
    initAccordion();
    initGallerySlider();
    initTestimonialsSlider();
    initPhoneMask();
});

// Экспортируем функции для возможного использования извне
export {
    initBurger,
    initModal,
    initTabs,
    initAccordion,
    initGallerySlider,
    initTestimonialsSlider,
    initPhoneMask
};