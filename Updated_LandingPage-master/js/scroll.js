var num = 1;
$('#WeloBanner').attr("src","img/logo/logo-welo.png");
$(window).scroll(function () { 
  num = $(window).scrollTop()/3;
  
// if(parseInt(num) === num)
// {
//     $('#WeloBanner').attr("src","img/logo/logo-welo-grey.png");
// }
// else
// {
//     $('#WeloBanner').attr("src","img/logo/logo-welo-green.png");
// }
  
if (num<.1){
        $('#WeloBanner').attr("src","img/logo/logo-welo.png");
  }
else if (num>.1){
        $('#WeloBanner').attr("src","img/logo/logo-welo-green.png");
 }

// if (num<1){
//     $('#WeloBanner').show();
//     $("#GreenBanner").hide();
// }
// else if (num>1){
//     $('#WeloBanner').hide();
//     $("#GreenBanner").show();
// }


});