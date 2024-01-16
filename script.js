AOS.init({
   duration: 1000,
   delay: 400
})
$(document).ready(function () {

   $('.fa-bars').click(function () {
      $(this).toggleClass('fa-times');
      $('.nav').toggleClass('nav-toggle')
   });

   $(windows).on('load scroll', function () {
      $('.fa-bars').removeClass('fa-times');
      $('.nav').removeClass('nav-toggle')
   });

   if ($(windows).scrollTop() > 10) {
      $('header').addClass('header-active');
   }
   else {
      $('header').removeClass('header-active');
   };
});
$(".facility").magnificPopup({
   delegate: "a",
   type: 'image',
   gallery: {
      enabled: true
   }
});
