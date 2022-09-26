$(document).ready(function(){

    $('.accordion_panel_heading').click(function () {
        $(this).children().toggleClass('opn');
        $(this).toggleClass('in').next().slideToggle(400);
        $('.accordion_panel_heading').not(this).children().removeClass('opn');
        $('.accordion_panel_heading').not(this).removeClass('in').next().slideUp(400);
    });

});
