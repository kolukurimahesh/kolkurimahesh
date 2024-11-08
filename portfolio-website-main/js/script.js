// JavaScript code to make the website responsive

// Function to adjust font sizes based on screen width
function adjustFontSize() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 768) {
      // Adjust font sizes for mobile devices
      document.body.style.fontSize = "12px";
    } else if (screenWidth <= 992) {
      // Adjust font sizes for tablets
      document.body.style.fontSize = "14px";
    } else {
      // Default font size for larger screens
      document.body.style.fontSize = "16px";
    }
  }
  
  // Call the function on page load and resize
  window.addEventListener('load', adjustFontSize);
  window.addEventListener('resize', adjustFontSize);
  
  // JavaScript for sticky navbar
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar-top');
    if (window.scrollY > 50) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });
  
  // JavaScript for smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // JavaScript for progress bar animation
  // (Your existing JavaScript code for progress bars can be used here)
  
  // JavaScript for back-to-top button
  const backToTopButton = document.getElementById('btn-back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });