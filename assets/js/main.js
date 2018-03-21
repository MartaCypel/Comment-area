$('.write-comment-box').hide();
$('.cover-comment').hide();
$('.write-comment-box').css({
    bottom:'-450px'
})

$('.post-me').on('click', function(){
    $('.cover-comment').fadeIn();

    $('.write-comment-box').show();
    $('.write-comment-box').animate({
        bottom:'0px'
    });

    $('.comment-text').focus();
    }
);

$('.cover-comment').on('click',function(){
    $(this).fadeOut();

    $('.write-comment-box').animate({
        bottom:'-450px'
    }); 
    $('.comment-text').val('');
    }
);

/*HEART*/

$('.icon-heart').on('click', function(){
    $(this).toggleClass('icon-heart-marked');
});
