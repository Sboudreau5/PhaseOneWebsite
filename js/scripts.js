function toggleNav(toggleClass, activeClass) {
  if (document.querySelector('.' + toggleClass)) {
    function toggle() {
      if (!document.body.classList.contains(activeClass)) {
        document.body.classList.add(activeClass)
      } else {
        document.body.classList.remove(activeClass)
      }
    }
    document.querySelector('.' + toggleClass).addEventListener('click', toggle)
  }
}

toggleNav('nav-toggle', 'nav-active')


// Modals
var grads = document.querySelectorAll('#grads figure')
var close = document.querySelectorAll('.close-modal')
for (var i = 0; i < grads.length; i++) {
    grads[i].addEventListener('click', function() {
      if (document.getElementById('modal-active')) 
    document.getElementById('modal-active').id = '';
      if (this.querySelector('.modal'))
    this.querySelector('.modal').id = 'modal-active';
    })
}
for (var j = 0; j < close.length; j++) {
    close[j].addEventListener('click', function(e) {
        this.parentElement.id = '';
  e.stopPropagation();
    })
}


//SLideshow
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
  var dots = document.getElementsByClassName("dot");
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
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
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
}
