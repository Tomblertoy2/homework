export function initTabs() {
    const tabControls = document.querySelector('.tab-control');
    
    if (!tabControls) return;
    
    tabControls.addEventListener('click', toggleTab);

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-control__link');
        
        if (!tabControl) return;
        e.preventDefault();
        if (tabControl.classList.contains('tab-control__link--active')) return;

        const tabContentID = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentID);
        const activeControl = document.querySelector('.tab-control__link--active');
        const activeContent = document.querySelector('.tab-content--show');

        // Удаляем активные классы
        activeControl?.classList.remove('tab-control__link--active');
        activeContent?.classList.remove('tab-content--show');

        // Добавляем новые активные классы
        tabControl.classList.add('tab-control__link--active');
        tabContent?.classList.add('tab-content--show');
    }
}