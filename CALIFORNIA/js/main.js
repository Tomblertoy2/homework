    // бургер
document.addEventListener('click', burderInit)

    function burderInit(e) {

        const burderIcon = e.target.closest('.burger-icon')
        const burderNavLink = e.target.closest('.header__a-link')

        if (!burderIcon && !burderNavLink) return

        if (document.documentElement.clientWidth > 1100) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }



// 
document.querySelector('.link__icons').addEventListener('click', function() {
    const formOpen = document.querySelector('.form')
    
    if (formOpen.classList.contains("open")){
        formOpen.classList.remove("open");
    } else {
    formOpen.classList.add("open");
    }
})


// слайдор__галл


const swiper = new Swiper('.news__swiper', {

    pagination: {
    el: '.news__pagination',
    },

    navigation: {
    nextEl: '.news__prev',
    prevEl: '.news__next',
    },

});


        const keywordButtons = document.querySelectorAll('.connection__button');
        const searchInput = document.getElementById('searchInput');

        keywordButtons.forEach(button => {
            button.addEventListener('click', function() {

                searchInput.value = this.textContent;
                
                searchInput.focus();
                
                this.style.backgroundColor = '#1a73e8';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.style.backgroundColor = '';
                    this.style.color = '';
                }, 300);
            });
        });

        searchInput.addEventListener('focus', function() {
            this.select();
        });