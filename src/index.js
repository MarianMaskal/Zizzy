$('.card-small__info-showMore').click(function() {
    // $( "#card-hidden" ).toggleClass( "hidden" );
    // $( ".card" ).toggleClass( "max-height" );
    // $('#showMore').hide();
    // $('#showLess').show();
    console.log($(this));
    $(this).parents().siblings('.card-hidden').toggleClass( "hidden" );
    $(this).parents('.card').toggleClass( "max-height" );
    $(this).hide();
    $(this).parents().siblings('.card-hidden').find('.showLess').show()
});

$('.card-big__showMore').click(function() {
    console.log($(this));

    $(this).parents('.card-hidden').toggleClass( "hidden" );
    $(this).parents('.card').toggleClass( "max-height" );
    $(this).hide();
    $(this).parents('.card').find('.showMore').show()
});





