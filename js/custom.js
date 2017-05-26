/*show and hide navigation*/
$(document).ready(function(){

  'use strict';
  $(window).scroll(function(){
    'use strcit'
    if ($(window).scrollTop() < 80) {
      $('.navbar').css ({
        'margin-top':'-100px',
        'opacity':'0'
      })
      $('.navbar').css({
        'background-color':'rgba(59, 59, 59, 0)'
      })

    }else {
      $('.navbar').css ({
        'margin-top':'0px',
        'opacity':'1'
      });
      $('.navbar').css({
        'background-color':'rgba(59, 59, 59, 0.7)',
        'border-color':'#444'
      })
      $('.navbar-brand img').css({
        'height':'35px',
        'padding-top':'0px'
      })
      $('.navbar > li > a ').css({
        'padding-top':'15px'
      })
    }

  });

});

//add smooth scrolling
$(document).ready(function(){
  'use strict';
  $('.nav-link, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });
});

/*active menu item on click */
$(document).ready(function(){
  'use strict';

   $('.navbar-nav li a').click(function(){

    $('.navbar-nav li a').parent().removeClass("active")
    $(this).parent().addClass("active");
  });
});
//highlight menu item on scroll
$(document).ready(function(){

  'use strict';
   $(window).scroll(function(){
     'use strict';
      $("section").each(function(){

      'use strict';
      var bb = $(this).attr("id");  // about, contact, download-now
      var hei = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;

      if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {

        $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");

      }else {
          $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");

      }
  })
 })
})
