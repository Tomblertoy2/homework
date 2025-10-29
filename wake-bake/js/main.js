(function () {
    document.addEventListener('click', burderInit)

    function burderInit(e) {

        const burderIcon = e.target.closest('.burger-icon')
        const burderNavLink = e.target.closest('.nav__link')

        if(!burderIcon && !burderNavLink) return

        if(document.documentElement.clientWidth > 900) return

        if(!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }
})()

