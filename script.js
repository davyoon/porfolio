$(function(){
  $('a[href^="#"]').on('click', function(event) {

     var target = $( $(this).attr('href') );
     console.log($(this));
     //remove active class
     $("li.active").removeClass("active");
     $(this).addClass("active");
     if( target.length ) {
         event.preventDefault();
         $('html, body').animate({
             scrollTop: target.offset().top
         }, 1000);
     }

  });


  $('.contact-hover').mouseover(function(){
    $(this).css('color', 'rgba(24,202,230,1)')   
    // or rgba(255,255,0,0.8)
  });

  $('.contact-hover').mouseout(function(){
    $(this).css('color', 'white')
  });








});