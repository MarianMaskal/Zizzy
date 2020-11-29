$('.card-small__info-showMore').click(function() {
    $(this).parents().siblings('.card-hidden').toggleClass( "hidden" );
    $(this).parents('.card').toggleClass( "max-height" );
    $(this).hide();
    $(this).parents().siblings('.card-hidden').find('.showLess').show()
});

$('.card-big__showMore').click(function() {
    $(this).parents('.card-hidden').toggleClass( "hidden" );
    $(this).parents('.card').toggleClass( "max-height" );
    $(this).hide();
    $(this).parents('.card').find('.showMore').show()
});





