var storeId = $('#storeId').val();
$(document).ready(function ($) {
    var header = $('header');
    // var height = $('#top_header').outerHeight(true) + 2;
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > height) {
    //         header.addClass('header-fixed');
    //     }else {
    //         header.removeClass('header-fixed');
    //     }
    // });

    $(".fixed-item").hover(function () {
        $(this).find(".title-fixed").css("display", "block");
    }, function () {
        $(this).find(".title-fixed").css("display", "none");
    });
    var dot = true;
    if(in_array(storeId, [143033,161410])) {
        dot = false;
    }

    if ($('.homepage_slider').length) {
        $('.homepage_slider').owlCarousel({
            items: 1,
            nav: true,
            dots: dot,
            lazyLoad: true,
            loop: true,
            autoplay: false,
            // autoplayTimeout: 5000,
            touchDrag: true,
            navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }

        });
    }

    if ($('.owl_kol_main').length) {
        $('.owl_kol_main').owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 0,
            slideTransition: 'linear',
            // autoplayTimeout: 1,
            autoplaySpeed: 15000,
            autoplayHoverPause: false,
            dots: false,
            smartSpeed: 2000,
            animateIn: 'linear',
            animateOut: 'linear',
            responsive: {
                0: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    }
    if ($(window).width() < 991) {
        if ($('#owl_brand').length) {
            $('#owl_brand').addClass('owl-carousel owl-theme')
            $('#owl_brand').owlCarousel({
                items: 3,
                loop: true,
                margin: 20,
                center: true,
                autoplay: false,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 3
                    },
                    767: {
                        items: 3
                    },
                    1024: {
                        items: 3
                    }
                }
            })
        }
    }

    if ($(window).width() < 768) {
        if ($('#items_inner_album').length) {
            $('#items_inner_album').owlCarousel({
                items: 2,
                loop: true,
                margin: 20,
                center: false,
                autoplay: false,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 2
                    },
                    767: {
                        items: 2
                    },
                    1024: {
                        items: 2
                    }
                }
            });
        }
    }
    if ($('.owl_kol_text').length) {
        $('.owl_kol_text').owlCarousel({
            items: 2,
            loop: true,
            margin: 20,
            autoplay: true,
            slideTransition: 'linear',
            autoplaySpeed: 10000,
            autoplayHoverPause: false,
            dots: false,
            smartSpeed: 2000,
            animateIn: 'linear',
            animateOut: 'linear',
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                1024: {
                    items: 2
                }
            }
        });
    }

    $('body').on('click', '.icon-m-menu', function () {
        $('#menu-mobile').addClass('open');
    });
    $('body').on('click', '.icon_search_mobile', function () {
        $('.search_mobile.header_search').toggleClass('active');
    });

    $("li.position-relative").click(function(){
        $(".fir-ma-menu__signInMenu").toggleClass("open");
    });

    $(".fir-ma-menu__closeButton").click(function(){
        $(".fir-ma-menu__signInMenu").toggleClass("close-user");
    });
    $(".icon_menu_account").click(function(){
        $(".cabinet-nav").toggleClass("active");
    });

 
    //--- fill menu mobile
    ajaxLoadView({
        view: 'menuMobile',
        delay: 300,
        onSuccess: function (rs) {
            $('#menu-mobile').html(rs);
        }
    });


    $(window).scroll(function(){
        /*setTimeout(function(){*/
        animation_check();
        /*}, 500);*/
    });

    $('[data-fancybox="gallery"]').fancybox({
        smallBtn: false
    });

    $('.news__list__item').mouseenter(function () {
        var src = $(this).find('.news-post__title').attr('data-src');
        $(this).addClass('is-active');
        $('.news__picture').addClass('vertical-clip-picture-leave-active');
        setTimeout(function(){
            $('.news__picture').addClass('vertical-clip-picture-leave-to');
        }, 1);
        setTimeout(function(){
            $('.news__picture').removeClass('vertical-clip-picture-leave-to');
            $('.news__picture img').attr('src', src);
        }, 600);

        setTimeout(function(){
            $('.news__picture').removeClass('vertical-clip-picture-leave-active');
        }, 900);
    });
    $('.news__list__item').mouseleave(function () {
        $(this).removeClass('is-active');
    });

    $('.btn-newsletter').click(function () {
        var newsletter_input = $('.newsletter-input');
        if (newsletter_input.val() == '') {
            alert('Vui lòng điền đầy đủ thông tin');
        } else {
            AppAjax.post('/newsletter/subscribe', {mail: newsletter_input.val()},
                function (rs) {
                    if (rs.code) {
                        newsletter_input.val('');
                    }
                    alert(rs.message)
                }
            );
        }
    });

    $(window).scroll(function(event){
        if ($(window).scrollTop() > 500){
            $('.back-to-top').removeClass('d-none');
        }else{
            $('.back-to-top').addClass('d-none');
        }
    });
    $('body').on('click', '.back-to-top button', function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop : 0
        }, 800);
    });

    $('.wishlist').click(function (e) {
        var t = $(this);
        if (t.hasClass('active')) {
        }else {
            AppAjax.post(
                '/product/wishlistcookie', {
                    'productId': t.attr('data-id'),
                    'type': 5
                },
                function (rs) {
                    var mes = $('#dialogMess');
                    if (rs.code == 1) {
                        t.addClass('active');
                        t.find('.pa').html('Xem Wishlist');
                        t.attr('href','/wishlist');
                        mes.html('<p><span style="float: left; margin: 0 10px 40px 0;"></span>Bạn đã thêm sản phầm vào yêu thích</p>');
                        mes.dialog({
                            title: "Thông báo!", modal: true, show: "explode", hide: "explode",
                            buttons: {
                                Ok: function () {
                                    $(this).dialog("close");
                                    location.reload();
                                }
                            }
                        });
                    } else {
                        mes.html('<p><span class="ui-icon ui-icon-notice" style="float: left; margin: 0 10px 40px 0;"></span>' +
                            rs.messages + '</p>');
                    }
                },
                'json'
            );
        }
    }); //---add favorites

    var ps = [];
    $('.pro-loop').each(function () {
        var t = $(this);
        ps.push({id: t.attr('data-id')});
    });
    WishListLoad(ps);

    $(document).on('click', '.quick-view', function (e) {
        e.preventDefault();
        quickview($(this).attr('data-id'));
    });

    // remove wishlist
    $('.wishlist-item__remove').click(function(){

        var psId = $(this).attr('data-id'), mes = $('#dialogMessage');
        mes.html('<p><span>Bạn muốn xóa sản phầm yêu thích này!!!</span></p>');
        mes.dialog({
            title: 'Xóa sản phẩm yêu thích', modal: true, show: "explode", hide: "explode",
            buttons: [
                {
                    text: "Ok",
                    click: function () {
                        AppAjax.post(
                            '/product/wishlistcookie', {
                                'productId': psId,
                                'type': 6
                            },
                            function(rs){
                                if(rs.code == 1) {
                                    // console.log(rs);
                                    location.reload();
                                }
                                else {
                                    alert(rs.message);
                                }
                            }
                        );
                    }
                },
                { text: "Cancel", click: function () {
                        $(this).dialog("close");
                    } }
            ]
        });
    });

    // popup index
    var popupHomeCookie = $('#popupHome.cookie');
    if(popupHomeCookie.length){
        popupHomeCookie.modal('show');
    }

    $(".user__header").on("click",  function (e) {
        e.preventDefault();
        $('.fir-ma-menu__signInMenu').addClass('active');
    });
    $(".fir-ma-menu__closeButton").on("click",  function (e) {
        e.preventDefault();
        $('.fir-ma-menu__signInMenu').removeClass('active');
    });

    $(".js-placeholder-input").on("focusout",  function (e) {
        e.preventDefault();
        $(this).val() ? $(this).addClass("input--not-empty") : $(this).removeClass("input--not-empty")
    });

    $('#Subscribe').click(function (e) {
        e.preventDefault();
        if ($("#newsletter_form").validationEngine('validate')) {
            AppAjax.post('/newsletter/subscribe', {
                    mail: $('body #subscribeEmail').val(),
                    name: $('body input#first_name').val() + $('body input#last_name').val(),
                },
                function (rs) {
                    if (rs.code == 1) {
                        $.fancybox.close();
                    }
                    $('#popupHome').addClass('contact-form--success')
                }
            );
        }
        return false;
    });


    $('#btnsignin_header').on('click',function () {
        signinHeader();
    });

    /*checkInventory*/
    var ps = [];
    if($('.pro-loop')) {
        $('.pro-loop').each(function () {
            ps.push({
                id: parseInt($(this).attr('data-id')),
                storeId: storeId,
                typeId: $(this).attr('data-type')
            });
        });
    }
    if (ps.length) {
        checkInventory(ps, function (rs) {
            if (rs.inventories != "") {
                $.each(rs.inventories, function (key, vl) {
                    var check = $('.pro-loop[data-id="' + key + '"]').find('.ProductItem__Wrapper');
                    if (vl <= 0) {
                        check.append('<span class="out-stock-product">Hết hàng</span>');
                    }
                });
            }
        });
    }


    var psImg = [], proLoop = $('.pro-loop');
    if (proLoop.length) {
        proLoop.each(function () {
            psImg.push({id: $(this).attr('data-id'), code: 2, storeId: storeId});
        });
    }
});
function signinHeader() {
    if($("#formAcount_header").validationEngine('validate')){
        AppAjax.ajax({
            type: "POST",
            data: $("#formAcount_header").serialize(),
            cache: false,
            dataType: 'json',
            url: "/user/ajaxsignin",
            success: function(rs) {
                if(rs.code){
                    window.location.href = '/';
                }
                else if(rs.message['username'] != undefined){
                    alert(rs.message['username']);
                }
                else if(rs.message['email'] != undefined){
                    alert(rs.message['email']);
                } else {
                    alert(rs.message);
                }
            }
        });
    }
}

function WishListLoad(ps) {
    if (ps.length) {
        if($('.checkCookies').val() != "") {
            var esult = JSON.parse($('.checkCookies').val());
            $.each(esult, function (key, vl) {
                // console.log('.prd' + key + ' .wishlistItems');
                if (vl <= 0) {
                    $('.pro-loop[data-id="' + key + '"]').find('.wishlist').removeClass('active');
                } else {
                    $('.pro-loop[data-id="' + key + '"]').find('.wishlist').attr('href','/wishlist');
                    $('.pro-loop[data-id="' + key + '"]').find('.wishlist').addClass('active');
                    $('.pro-loop[data-id="' + key + '"]').find('.wishlist .pa').html('Xem Wishlist');
                }
            });
        }
    }
}

function quickview(id) {
    $.post('/product/q' + id,
        function (rs) {
            $.fancybox.open(
                rs,
                {
                    content: rs, padding: [10, 10, 10, 10], fitToView: false, wrapCSS: 'fancybox-qv',
                    helpers: { overlay: { css: { 'background': 'rgba(158, 158, 158, 0.5)' } } },
                    afterShow: function () {
                        if($('#p-sliderproduct ul').length){
                            $('#p-sliderproduct ul').owlCarousel({
                                items : 4, //10 items above 1000px browser width
                                loop:false,
                                dots: false,
                                margin: 5,
                                nav: true,
                                autoplay:true,
                                smartSpeed: 1000,
                                autoplayTimeout:5000,
                                autoplayHoverPause:true,
                                responsive:{
                                    0:{
                                        items:1,
                                        nav:false
                                    },
                                    768:{
                                        items:2,
                                        nav:false
                                    },
                                    1000:{
                                        items:4,
                                        nav:false,
                                    }
                                },
                                navText : ["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"]
                            });
                        }
                        $.getScript('/tp/T0375/js/quickview.js?6');
                    },
                });
        }
    );
}


function animation_check(){
    var scrollTop = $(window).scrollTop() - 300;
    $('.animation-tran').each(function(){
        if($(this).offset().top < scrollTop + $(window).height()){
            $(this).addClass('active');
        }else {
            $(this).addClass('active');
        }
    })
}

function showSpinLoading() {
    $(".waiting-spin-content-web").css({ "display": "flex" });
}