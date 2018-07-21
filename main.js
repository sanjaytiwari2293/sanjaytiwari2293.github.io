$("li a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 });
 $("#seemore").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},1000)
})