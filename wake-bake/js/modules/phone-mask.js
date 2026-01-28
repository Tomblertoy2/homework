export function initPhoneMask() {
    const telInputs = document.querySelectorAll('input[type="tel"]');
    
    if (telInputs.length === 0 || typeof Inputmask === 'undefined') return;
    
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);
}