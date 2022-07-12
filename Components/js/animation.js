$(window).scroll(function(){
    $('.section_animation').each(function(){

        let blockPosition = $(this).offset().top;
        let scrollTOp = $(window).scrollTop();

            if(scrollTOp > blockPosition - 400){
                $(this).find('.animate_view').addClass('animate_goview');
            }
    
    });
});