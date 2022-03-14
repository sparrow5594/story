$(document).ready(function () {

    let modal = $('.modal');
    let modal_close = $('.modal-close');

    $(document).click(function(e){
        if(modal.has(e.target).length == 0){
            modal.hide();
        }
    })

    modal_close.click(function(){
        modal.hide();
    });

    let swiper = new Swiper('.swiper', {
        loop: true,
        loopedSlides: 2,
        touchEventsTarget: 'wrapper',
        observer: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
        }
    });

    // $(window).resize(function () {
    //     if (window.innerWidth > 769) {
    //         let swiper = new Swiper('.swiper', {
    //             loop: true,
    //             loopedSlides: 2,
    //             touchEventsTarget: 'wrapper',
    //             observer: true,
    //             navigation: {
    //                 nextEl: '.swiper-next',
    //                 prevEl: '.swiper-prev',
    //             },
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 clickable: true,
    //                 type: 'bullets'
    //             }
    //         });
    //     } else {
    //         let swiper = new Swiper('.swiper', {
    //             loop: true,
    //             loopedSlides: 2,
    //             touchEventsTarget: 'wrapper',
    //             observer: true,
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 type: 'fraction'
    //             }
    //         });
    //     }
    // });
    $('.menu-btn').click(function(event){
        event.preventDefault();
        $('.btn-menu').show();
    })
    $('.ham-close').click(function(event){
        event.preventDefault();
        $('.btn-menu').hide();
        $('.ham-sub').hide();
    });

    $(document).mouseup(function (e){
        if($('.btn-box').has(e.target).length == 0){
            $('.btn-menu').hide();
        }
    });
    

    let ham_menu = $('.ham-menu > a');
    let ham_sub = $('.ham-sub');

    $.each(ham_menu, function (index, item) {
        $(this).click(function(event) {
            event.preventDefault();
            ham_sub.hide();
            ham_sub.eq(index).show();
        });
    });

    let g = $('.gnb')
    let gnb = $('.gnb > li');
    let gnb_menu = $('.gnb > li > a')
    let gnb_out = $('.gnb-wrap');

    let sub = $('.sub-gnb');
    let sub_item = $('.sub-gnb > li')
    let sub_menu = $('.sub-text')
    let sub_bg = $('.sub-bg');

    //gnb 호버시 메뉴펼침.
    $(g).mouseover(function () {
        sub.css('display', 'block');
        sub_bg.css('display', 'block');
    });
    // 주메뉴 호버시 포커스주기.
    $.each(gnb, function (index, item) {
        $(this).mouseenter(function () {
            gnb_menu.removeClass('gnb-focus');
            $(this).find(gnb_menu).addClass('gnb-focus');
        });
    });

    //  서브메뉴 호버시 포커스주기.
    $.each(sub_item, function (index, item) {
        $(this).mouseenter(function () {
            sub_menu.removeClass('sub-focus');
            $(this).find(sub_menu).addClass('sub-focus');
        });
    });

    // 주메뉴 호버시 서브메뉴 초기화
    $.each(gnb_menu, function () {
        $(this).mouseenter(function () {
            sub_menu.removeClass('sub-focus');
        });
    });

    // 주메뉴 밖으로 마우스 이동시 메뉴창 초기화
    $(gnb_out).mouseleave(function () {
        gnb_menu.removeClass('gnb-focus');
        sub_menu.removeClass('sub-focus');
        sub.css('display', 'none',);
        sub_bg.css('display', 'none');
    });

    // // // 서치창 마우스 호버시 메뉴창 초기화
    $('.gnb-search').mousemove(function () {
        sub_menu.removeClass('sub-focus');
        gnb_menu.removeClass('gnb-focus');
        sub.css('display', 'none');
        sub_bg.css('display', 'none')
    });

    $(function () {

        let side = $('.side-news');

        $(window).scroll(function (e) {
            let scroll = $(this).scrollTop();
            if (scroll > 800) {
                $(side).css('position', 'fixed');
                $(side).css('top', '50px');
            } else {
                $(side).css('position', 'absolute');
                $(side).css('top', '850px');
                $(side).css('left', '50% + 610px');
            }
        });
    });

    $('.mobile-search').click(function(){
        $('.gnb-search').toggle();
    });

    $('.family-button').click(function(){
        $('.family-site').toggle();
    });

    $(window).resize(function(){
        $('.btn-menu').hide();
    });
});
