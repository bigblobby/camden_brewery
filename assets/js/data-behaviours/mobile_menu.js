(function(){

    var mobileMenu = document.querySelector('[data-mobile-menu]');
    var mainNavigation = document.querySelector('[data-main-navigation]');

    mobileMenu.addEventListener('click', function(){
        this.classList.toggle('active');
        mainNavigation.classList.toggle('active');
    });

})();