// 
$(function () {

    $('[data-slider="home"]').on('init', function (e, slick) {
        slick.$prevArrow.append(function (index) {
            return $('<span class="slide-name">')
        });
        slick.$nextArrow.append(function (index) {
            return $('<span class="slide-name">')
        });
    });

    $('[data-slider="home"]').on('init afterChange', function (e, slick) {
        let currentSlick = $('.slick-current.slick-active', slick.$slideTrack),
            prevName = currentSlick.prev().data('slide-name'),
            nextName = currentSlick.next().data('slide-name');

        slick.$prevArrow.find($('.slide-name')).hide(0).html(prevName).show(300);
        slick.$nextArrow.find($('.slide-name')).hide(0).html(nextName).show(300);

    });

    $('[data-slider="home"]').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'

    });
})


$(function () {

    $('[data-slider="basic"]').each(function () {
        $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            let countSlide = slick.$slideTrack.find($(".slick-active")).length,
                i = (currentSlide ? currentSlide : 0)

            $(this).parents('.container').find('.quantity-slide').html(slick.slideCount);
            $(this).parents('.container').find(".number-slide").text(countSlide + i);

        })
        $(this).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            appendArrows: $(this).parents('.container').find('.slider-basic__arrow'),
            responsive: [
                {
                    breakpoint: 991.98,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 569.98,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true

                    }
                },


            ]
        });

    });

})

$(function () {

    $(window).on('resize', function (e) {
        var init3 = $('[data-slider="basic-digest"]').data('init-slider3');
        if (window.innerWidth > 767.98) {
            if (init3 != 1) {
                $('[data-slider="basic-digest"]').each(function () {
                    $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                        let countSlide = slick.$slideTrack.find($(".slick-active")).length,
                            i = (currentSlide ? currentSlide : 0)

                        $(this).parents('.container').find('.quantity-slide').html(slick.slideCount);
                        $(this).parents('.container').find(".number-slide").text(countSlide + i);

                    })
                    $(this).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        appendArrows: $(this).parents('.container').find('.slider-basic__arrow')
                    });
                }).data({ 'init-slider3': 1 });
            }

        }
        else {
            if (init3 == 1) {
                $('[data-slider="basic-digest"]').slick("unslick").data({ 'init-slider3': 0 });
            }
        }

    }).trigger('resize');


})

$(function () {
    $('[data-slider="calendar-events"]').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1292.98,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    vertical: false,
                    verticalSwiping: false
                }
            }

        ]
    });
})

$(function () {
    $('[data-slider="blog"]').each(function () {
        $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            let countSlide = slick.$slideTrack.find($(".slick-active")).length,
                i = (currentSlide ? currentSlide : 0)

            $(this).parents('.container').find('.quantity-slide').html(slick.slideCount);
            $(this).parents('.container').find(".number-slide").text(countSlide + i);

        })
        $(this).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            appendArrows: $(this).parents('.container').find('.slider-basic__arrow'),
            responsive: [
                {
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 569.98,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true

                    }
                },
            ]
        });
    });

})

$(function () {
    $('[data-slider="reviews"]').each(function () {
        $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            let countSlide = slick.$slideTrack.find($(".slick-active")).length,
                i = (currentSlide ? currentSlide : 0)

            $(this).parents('.container').find('.quantity-slide').html(slick.slideCount);
            $(this).parents('.container').find(".number-slide").text(countSlide + i);

        })
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            appendArrows: $(this).parents('.container').find('.slider-basic__arrow')
        });
    });

})

$(function () {
    $('[data-slider="gallery"]').each(function () {
        $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            let countSlide = slick.$slideTrack.find($(".slick-active")).length,
                i = (currentSlide ? currentSlide : 0)

            $(this).parents('.container').find('.quantity-slide').html(slick.slideCount);
            $(this).parents('.container').find(".number-slide").text(countSlide + i);

        })
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            speed: 1000,
            fade: true,
            appendArrows: $(this).parents('.container').find('.slider-basic__arrow')
        });
    });

})

$(function () {
    $('[data-menu="hover"]').hover(function () {
        $(this).toggleClass('active');
    });
})

$(function () {
    let accountBtn = $('[data-dropdown-btn="account"]'),
        accountMenu = $('[data-dropdown-menu="account"]');

    accountBtn.on('click', function (e) {
        e.stopPropagation();
        accountBtn.toggleClass('active');
        accountMenu.toggleClass('active');
    });
    $(document).on('click', function (e) {
        if (!accountBtn.is(e.target) && !accountMenu.is(e.target) && accountMenu.has(e.target).length === 0) {
            accountMenu.removeClass('active');
            accountBtn.removeClass('active');
        };
    });
});


$(function () {
    let menuBtn = $('[data-dropdown-btn="menu"]'),
        menu = $('[data-dropdown-menu="header"]');

    menuBtn.on('click', function (e) {
        e.stopPropagation();
        menuBtn.toggleClass('active');
        menu.toggleClass('active');
    });

    $(document).on('click', function (e) {
        if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('active');
            menuBtn.removeClass('active');
        };
    });
});

$(function () {
    let submenuBtn = $('[data-dropdown-btn="submenu"]')
    submenuBtn.on('click', function (e) {
        $(this).toggleClass('active');
    });

    $(document).on('click', function (e) {
        if (!submenuBtn.is(e.target) && submenuBtn.has(e.target).length === 0) {
            submenuBtn.removeClass('active');
        };
    });
});


$(function () {
    let select = $('[data-select="sorting-calendar"]'),
        selectDefault = $('[data-select="default-sorting"]'),
        selectDefaultElement = $('[data-select="default-element-sorting"]'),
        selectElement = $('[data-select="select-element-sorting"]')

    selectDefault.on('click', function () {
        let $this = $(this).closest(select)
        $this.toggleClass("active");
    })
    selectElement.on('click', function () {
        let $this = $(this).closest(select),
            currentele = $(this).html();
        $this.find(selectElement).removeClass('active');
        $(this).addClass('active');

        $this.find(selectDefaultElement).html(currentele);
        $this.removeClass("active");
    });

    $(document).on('click', function (e) {
        if (select !== e.target && !select.has(e.target).length) {
            select.removeClass('active');
        }
    });
});

$(function () {
    let select = $('[data-select="select"]'),
        selectBtn = $('[data-select="btn"]'),
        selectDefaultElement = $('[data-select="default-element"]'),
        selectElement = $('[data-select="select-element"]');

    selectBtn.on('click', function () {
        $(this).closest(select).toggleClass('active');
    });

    selectElement.on('click', function () {
        let $this = $(this).closest(select),
            currentele = $(this).html();

        selectElement.removeClass('active')
        $(this).addClass('active')


        $this.find(selectDefaultElement).html(currentele);
        select.removeClass("active");

    });
    $(document).on('click', function (e) {
        if (!select.is(e.target) && select.has(e.target).length === 0) {
            select.removeClass('active');
        };
    });
});

$(function () {
    let select = $('[data-select="sorting-blog"]'),
        selectDefault = $('[data-select="default-sorting"]'),
        selectDefaultElement = $('[data-select="default-element-sorting"]'),
        selectElement = $('[data-select="select-element-sorting"]')

    selectDefault.on('click', function () {
        let $this = $(this).closest(select)
        $this.toggleClass("active");
    })
    selectElement.on('click', function () {
        let $this = $(this).closest(select),
            currentele = $(this).html();
        $this.find(selectElement).removeClass('active');
        $(this).addClass('active');

        $this.find(selectDefaultElement).html(currentele);
        $this.removeClass("active");
    });

    $(document).on('click', function (e) {
        if (select !== e.target && !select.has(e.target).length) {
            select.removeClass('active');
        }
    });
});
$(function () {

    $('.slider-basic__row ').slice(0, 1).addClass('active');
    $('.btn__load-more').on("click", function (e) {
        e.preventDefault();
        $('.slider-basic__row:hidden').slice(0, 1).addClass('active');
        if ($('.slider-basic__row:hidden').length == 0) {
            $('.btn__load-more').hide();
        }
    });

})

$(function () {
    tinymce.init({
        selector: 'textarea#default',
        height: 220,
        plugins: "link image code lists advlist",
        toolbar: 'styleselect |  bold italic  underline strikethrough| forecolor | alignleft aligncenter alignright alignjustify | numlist bullist | link image ',
        menubar: false,
        language: 'ru',
    });
    tinymce.init({
        selector: 'textarea#default1',
        height: 220,
        plugins: "link image code lists advlist",
        toolbar: 'styleselect |  bold italic  underline strikethrough| forecolor | alignleft aligncenter alignright alignjustify | numlist bullist | link image ',
        menubar: false,
        language: 'ru',
    });
    tinymce.init({
        selector: 'textarea#default2',
        height: 220,
        plugins: "link image code lists advlist",
        toolbar: 'styleselect |  bold italic  underline strikethrough| forecolor | alignleft aligncenter alignright alignjustify | numlist bullist | link image ',
        menubar: false,
        language: 'ru',
    });
    tinymce.init({
        selector: 'textarea#default3',
        height: 220,
        plugins: "link image code lists advlist",
        toolbar: 'styleselect |  bold italic  underline strikethrough| forecolor | alignleft aligncenter alignright alignjustify | numlist bullist | link image ',
        menubar: false,
        language: 'ru',
    });
});

$(function () {
    $("#my-dropzone-img").dropzone({
        url: "/target-url",
        thumbnailMethod: 'contain',
        thumbnailWidth: "550",
        thumbnailHeight: "550",
        clickable: ".fileinput-zone"
    });
});

$(function () {
    $('.calendar__icons').on('click', function (e) {
        $(this).prev().attr('type', 'date').focus();
    });
});

// $(function () {
//     $(".dropzone").each(function () {
//         let childLength = $('.dropzone').children().length;
//         console.log(childLength)
//         if (childLength == 1) {
//             $('.dropzone').addClass('col-1')
//         }
//         if (childLength == 2) {
//             $('.dropzone').removeClass('col-1').addClass('col-2')
//         }

//     })

// });




