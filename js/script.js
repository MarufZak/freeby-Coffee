document.addEventListener('DOMContentLoaded',function (e) {  
    const nav = document.querySelector('.header__nav');
    const headerSecond = document.querySelector('.header__second');
    const burger = document.querySelector('.header__burger');
    burger.addEventListener('click',function () {  
        nav.classList.toggle('active');
        headerSecond.classList.toggle('active');
        document.body.classList.toggle('locked');
    })
    if (window.outerWidth <= 494) {
        var buildSlider = new Swiper('.build__body',{
            wrapperClass: "build__wrapper",
            slideClass: 'build__slide',
            slideActiveClass: 'build__slide_active',
            slidesPerView: 1,
            pagination: {
                el: '.build__pagination',
                bulletClass: 'build__bullet',
                bulletActiveClass: 'build__bullet-active'
            }
        })
    }
    var chooseSlider = new Swiper('.choose__body',{
        wrapperClass: 'choose__wrapper',
        spaceBetween: 25,
        navigation: {
            nextEl: '.choose__prev',
            prevEl: '.choose__next',
        },
        breakpoints: {
            1350: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
            }
        }
    })
    var footerSlider = new Swiper('.footer__body',{
        wrapperClass: 'footer__wrapper',
        spaceBetween: 25,
        navigation: {
            nextEl: '.footer__prev',
            prevEl: '.footer__next',
        },
        slidesPerView: 1,
        breakpoints: {
            992: {
                slidesPerView: 3,   
            },
            676: {
                slidesPerView: 2
            }
        }
    })

    
    const presentNavItems = document.querySelectorAll('.present__list li');
    const presentMains = document.querySelectorAll('.present__main');

    for (let i = 0; i < presentNavItems.length; i++) {
        const item = presentNavItems[i];
        item.addEventListener('click',function (e) {  
            e.preventDefault();

            presentNavItems.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');


            presentMains.forEach(main => {
                main.classList.remove('active');
            });
            var itemHref = this.children[0].attributes.href.nodeValue;
            itemHref = itemHref.replace('#','');
            document.getElementById(itemHref).classList.add('active');
        })
        
    }
});