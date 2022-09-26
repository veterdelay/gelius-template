$(document).ready(function(){

    infotabsResize();
    let startHeight = $('.infotabs_item').height();

    if ($(window).outerWidth() < '991'){
        $('.infotabs_items').css('height',startHeight+'px');
    }
    
    function infotabsResize(){
        let maxHeight = 0;
        if ($(window).outerWidth() > '991'){
            $('.infotabs_item').each(function(){
                let hght = $(this).height();
                if (hght > maxHeight){
                    maxHeight = $(this).height();
                }
            });
            $('.infotabs_items').css('height',maxHeight+'px');
        }
    }

    $( window ).resize(function() {
        let actualHeight = $('.infotabs-active').height();
        if ($(window).outerWidth() > '991'){
            infotabsResize();
        }else{
            $('.infotabs_items').css('height',actualHeight+'px');
        }
      });

    $('.infotabs_trigger').hover(function(){
        let tab = $(this).attr('data-tab');
        $('.infotabs_trigger').not(this).removeClass('infotabs-trigger-active');
        $(this).addClass('infotabs-trigger-active');
        $('.infotabs_item').each(function(){
            if($(this).attr('data-tab') == tab){
                $(this).addClass('infotabs-active').siblings().removeClass('infotabs-active');
                if ($(window).outerWidth() < '991'){
                    $('.infotabs_items').css('height',$(this).height()+'px');
                }
            }
        });
    });


});