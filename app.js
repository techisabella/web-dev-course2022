
// Hamburger Event Listener
const hamburger = document.querySelector ('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector ('.header .nav-bar .nav-list ul');
const header = document.querySelector ('.header.container');


hamburger.addEventListener('click', ()=> {
   hamburger.classList.toggle('active');
   mobile_menu.classList.toggle('active')
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }

//event listener for a mouse enter and mouse leave that changes the colour of the nav button background
const nav_li = document.querySelectorAll(".Nav_link li") 
for (let i = 0; i < nav_li.length; i++) {

  let current_li = nav_li[i];
  original_color = current_li.style.backgroundColor
  current_li.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = '#F4ABAA'
  })
  current_li.addEventListener('mouseleave', function(event) {
    event.target.style.backgroundColor = original_color;
  
  })
}

//change background colour to magenta when hover over Created by Team 5
let p2 = document.getElementById("p2");
  original_color = p2.style.backgroundColor
p2.addEventListener('mouseenter', function(event){
  event.target.style.backgroundColor = '#F4ABAA'
})
p2.addEventListener('mouseleave', function(event){
  event.target.style.backgroundColor = original_color;

})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

