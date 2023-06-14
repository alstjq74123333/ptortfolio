
$(function(){

    let header = $('header');
    let title = $('.about .title');
    let song = $('.about .title h2');
    let krName = $('.kr_name h2');
    let imSkill = $('.im_skill p');

    // ------web ----------

    let razer = $('.web .razer');
    let alcohol = $('.web .alcohol');
    let vem = $('.web .vem');
    let local = $('.web .local');
    let paba = $('.web .paba');
    let bur = $('.web .bur');
    let songTop = song.offset().top;
    console.log(songTop);
    
    /* 위치 스크롤 이벤트 */
    $(window).scroll(function(){
        let scrollBar = $(window).scrollTop();
        console.log(scrollBar);
        if(songTop + 200 < scrollBar) {
            song.addClass('on');
        }else {
            song.removeClass('on');
        }

        if(songTop < scrollBar) {
            krName.addClass('on');
        }else {
            krName.removeClass('on');
        }

        if(900 <= scrollBar) {
            header.addClass('on');
        }else {
            header.removeClass('on');
        }

        if (800 <= scrollBar) {
            title.addClass('on');
        }else {
            title.removeClass('on');
        }

        if(3200 <= scrollBar) {
            imSkill.addClass('on');
        }else {
            imSkill.removeClass('on');
        }

        if(5000 <= scrollBar) {
            title.removeClass('on');
            header.removeClass('on');
            title.addClass('off');
        }else {
            title.removeClass('off');
        }

        if($('.web .razer').offset().top - 50 <= scrollBar) {
            razer.addClass('on');
            header.addClass('on_b');
        }else {
            razer.removeClass('on');
            header.removeClass('on_b');
        }

        if($('.web .local').offset().top - 100 <= scrollBar){
            header.removeClass('on_b');
            local.addClass('on');
            header.addClass('on_f');
        }else {
            local.removeClass('on');
            header.removeClass('on_f');
        }

        if($('.web .paba').offset().top - 50 <= scrollBar) {
            header.removeClass('on_f');
            paba.addClass('on');
            header.addClass('on_g');
        }else {
            header.removeClass('on_g');
            paba.removeClass('on');
        }

        if($('.web .alcohol').offset().top - 100 <= scrollBar) {
            header.removeClass('on_g');
            alcohol.addClass('on');
            header.addClass('on_c');
        }else {
            alcohol.removeClass('on');
            header.removeClass('on_c');
        }

        
        if($('.web .vem').offset().top - 50  <= scrollBar) {
            header.removeClass('on_c');
            header.addClass('on_d');
            vem.addClass('on');
        } else {
            header.removeClass('on_d');
            vem.removeClass('on');
        }
        
        if($('.web .bur').offset().top - 50 <= scrollBar) {
            header.removeClass('on_d');
            bur.addClass('on');
            header.addClass('on_h');
        }else {
            bur.removeClass('on');
            header.removeClass('on_h');
        }

        if($('.design').offset().top - 200 <= scrollBar) {
            header.removeClass('on_h');
            header.addClass('on_e');
        }else {
            header.removeClass('on_e');
        }
    })
})