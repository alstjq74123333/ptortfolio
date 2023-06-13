$(function(){
    let menu01 = $('.menu01');
    let menu02 = $('.menu02');
    let menu02Li = $('.menu02 li');


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


    //-----------mause----------

    let item = $('.mouse ul li');
    let list = $('.mouse .list');

    item.click(function(){
        item.removeClass('on');
        $(this).addClass('on');

        let listIndex = $(this).index();
        console.log(listIndex);
        list.removeClass('on');
        list.eq(listIndex).addClass('on');
    })
})