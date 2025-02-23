function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

function redirectToContact() {
    window.location.href = 'contactus.html';
}

function redirectToProduct(){
    window.location.href = 'products.html'
}

let currentFeatureIndex = 0;

function showNextFeature() {
    const features = document.querySelectorAll('.feature');
    features[currentFeatureIndex].classList.remove('show');
    currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
    features[currentFeatureIndex].classList.add('show');
}

// Activate rotation only for mobile view
document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    if (window.innerWidth <= 768 && features.length > 0) {
        features[0].classList.add('show');
        setInterval(showNextFeature, 3000); // Change every 3 seconds
    }
});

window.addEventListener('resize', () => {
    const features = document.querySelectorAll('.feature');
    if (window.innerWidth > 768) {
        features.forEach(feature => feature.classList.add('show'));
    } else {
        features.forEach(feature => feature.classList.remove('show'));
        if (features.length > 0) {
            features[0].classList.add('show');
        }
    }
});

const fadeInElements = document.querySelectorAll(".fade-in-view");
const fadeInObserver = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        fadeInObserver.unobserve(entry.target);
        }
    });
});
fadeInElements.forEach((el) => fadeInObserver.observe(el));

// Page Loader
window.addEventListener("load", () => {
const loader = document.getElementById("loader");
loader.style.opacity = 0;
loader.style.visibility = "hidden";

// Add this to your existing script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Scroll animation trigger
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Trigger typing animation for rupee box
        if(entry.target.querySelector('.rupee-box')) {
          const rupeeBox = entry.target.querySelector('.rupee-box');
          rupeeBox.classList.add('typing-effect');
        }
      }
    });
  }, { threshold: 0.5 });
  
  // Observe all animated elements
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
});