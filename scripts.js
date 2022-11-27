//  $(document).ready(function(){
    

//   $("#navbarDropdown-est").hover(function(){
//     $('#menu-estudiantes').addClass("show");
    
  
//   },function(){
//     $('#menu-estudiantes').removeClass("show");
    
//   });

//   $("#navbarDropdown-doc").hover(function(){
//     $('#menu-docentes').addClass("show");
     
  
//   },function(){
//     $('#menu-docentes').removeClass("show");
   
//   });



// }) ;


window.onload = function(){

  var item1 = document.getElementById("item-1");
  var item1img = document.getElementById("item-1-img");
  var item1dec = document.getElementById("item-1-dec");
  
  var item2 = document.getElementById("item-2");
  var item2img = document.getElementById("item-2-img");
  var item2dec = document.getElementById("item-2-dec");
  
  var item3 = document.getElementById("item-3");
  var item3img = document.getElementById("item-3-img");
  var item3dec = document.getElementById("item-3-dec");
  
  var item4 = document.getElementById("item-4");
  var item4img = document.getElementById("item-4-img");
  var item4dec = document.getElementById("item-4-dec");
  


  //hover on item 1
  //move dec 1
  item1.addEventListener('mouseover', ()=> item1dec.style.transform ="translateY(-20px)");
  item1.addEventListener('mouseleave', ()=> item1dec.style.transform ="translateY(40px)");

  //move dec 2
  item1.addEventListener('mouseover', ()=> item2dec.style.transform ="translateX(-440px)");
  item1.addEventListener('mouseleave', ()=> item2dec.style.transform ="translateX(-380px)");

  //hover on item 2
    //move dec 2
    item2.addEventListener('mouseover', ()=> item2dec.style.transform ="translateX(20px)");
    item2.addEventListener('mouseleave', ()=> item2dec.style.transform ="translateX(-380px)");
    //move dec 4
    item2.addEventListener('mouseover', ()=> item4dec.style.transform ="translateY(-310px)");
    item2.addEventListener('mouseleave', ()=> item4dec.style.transform ="translateY(-40px)");
  

      //hover on item 3
  //move dec 1
  item3.addEventListener('mouseover', ()=> item3dec.style.transform ="translateX(-20px)");
  item3.addEventListener('mouseleave', ()=> item3dec.style.transform ="translateX(350px)");
  //move dec 3
  item3.addEventListener('mouseover', ()=> item1dec.style.transform ="translateY(300px)");
  item3.addEventListener('mouseleave', ()=> item1dec.style.transform ="translateY(40px)");

        //hover on item 4
  //move dec 3
  item4.addEventListener('mouseover', ()=> item3dec.style.transform ="translateX(420px)");
  item4.addEventListener('mouseleave', ()=> item3dec.style.transform ="translateX(380px)");
  //move dec4
  item4.addEventListener('mouseover', ()=> item4dec.style.transform ="translateY(30px)");
  item4.addEventListener('mouseleave', ()=> item4dec.style.transform ="translateY(-30px)");


}
$(document).ready(function () {
  var carousel = document.getElementById("carousel");
  carousel.addEventListener('mouseleave', function(event){
    $('.carousel').carousel({
      interval: 3000
  });

  $('.carousel').carousel('cycle');
  });
  $('.carousel').carousel({
      interval: 3000
  });

  $('.carousel').carousel('cycle');
});



// function carouselNext(){

//   $('.carousel').carousel().carousel('next');

// }
// function carouselPrev(){

//   $('.carousel').carousel().carousel('prev');
// }




/*Mode Toggle*/

var isDark = false;
var bodyDefault = document.body.style;
var navBarBDDefault = document.getElementById("container-fluid").style.backgroundColor;
var navBarBorderDefault = document.getElementById("container-fluid").style.border;
var logoColorDefault = document.getElementById("logo-container").style.backgroundColor;
var contactInfoDefault =  document.getElementById("contact-info").style.backgroundColor;
function changeMode(){

  if(isDark){
    isDark = false;
    console.log("light");
    ToLight();
  }
  else{
    isDark = true;
    console.log("dark");
    ToDark();
  }
  console.log("TOGGLE");

}
function ToDark(){
  document.getElementById("mode-toggler").src="src/sun.png"
  document.body.style = "background-color:#2b2426!important;"
  var navBar = document.getElementById("container-fluid");
  navBar.style.backgroundColor = "#332a2c";
  navBar.style.borderBottom = "2px solid var(--blackCoffee)"
  var logo = document.getElementById("logo-container");
  logo.style.backgroundColor = "var(--blackCoffee)"
  logo.style.border = "none"
  document.getElementById("contact-info").style.backgroundColor = "#332a2c" 
}
function ToLight(){
  document.getElementById("mode-toggler").src="src/crescent-moon.png "
  document.body.style = bodyDefault;
  var navBar = document.getElementById("container-fluid");
  navBar.style.backgroundColor = navBarBDDefault;
  navBar.style.borderBottom = navBarBorderDefault;
  var logo = document.getElementById("logo-container");
  logo.style.backgroundColor = logoColorDefault;
  logo.style.border = "none"
  document.getElementById("contact-info").style.backgroundColor = contactInfoDefault;

}