$(document).ready(function () {

    setTimeout(function () {
        $('body').attr('data-state', 'on');
    }, 250);

    var swiperParcerias = new Swiper('.swiper-container.swiper-parcerias', {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        navigation: {
            nextEl: '#clientes .swiper-navigation-next',
            prevEl: '#clientes .swiper-navigation-prev',
        },
    });

    var swiperParcerias = new Swiper('.swiper-container.swiper-portfolio', {
        direction: 'vertical',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '#portfolio .swiper-navigation-next',
            prevEl: '#portfolio .swiper-navigation-prev',
        },
        pagination: {
            el: '#portfolio .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '">0' + (index + 1) + '</div>';
            },
        }
    });


    // ROLAGEM DE PÁGINA SUAVE
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top-100
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                      //  $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                         //   $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                         //   $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    //FIM - ROLAGEM DE PAGINA SUAVE


    var fixmeTop = $('nav').offset().top; // get initial position of the element

    $(window).scroll(function () { // assign scroll event listener

        var currentScroll = $(window).scrollTop(); // get current position

        if (currentScroll >= fixmeTop) { // apply position: fixed if you
            $('nav').css({ // scroll to that element or below it
                position: 'fixed',
                top: '0',
                maxWidth: '100%'
            });
        } else { // apply position: static
            $('nav').css({ // if you scroll above it
                position: 'absolute',
                top: 55,
                maxWidth: '1260px'
            });
        }

    });

});
