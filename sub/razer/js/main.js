$(function(){
    let menu01 = $('.menu01');
    let menu02 = $('.menu02');
    let menu02Li = $('.menu02 li');

/*     menu01.mouseenter(function(){
        $(this).children().stop().slideDown();
    })

    menu01.mouseleave(function(){
        menu02.stop().slideUp();
    }) */

    menu02Li.mouseenter(function(){
        $(this).css({
            'background-color' : '#2E4F4F',
            'color' : '#ffffff'
        })
    })

    menu02Li.mouseleave(function(){
        $(this).css({
            'background-color' : '#ffffff',
            'color' : '#333333'
        })
    })
})