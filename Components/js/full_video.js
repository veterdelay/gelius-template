$('.full_video_block').click(function(){
    $('.pre-video').each(function(){
        $(this).css('display','none');
    });
    $('.video-iframe').css('display','block');
    $('.video-iframe')[0].src += "?autoplay=1";
});