const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});



// Set active link on load
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Scroll progress bar logic
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = `${scrollPercent}%`;
  });

  
  // Particle JS Initialization
particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      size: { value: 3 },
      color: { value: "#E6A537" },
      line_linked: {
        enable: true,
        color: "#E6A537",
        opacity: 0.4
      },
      move: {
        speed: 2
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    }
  });

  document.getElementById('smartToggleBtn').addEventListener('click', () => {
    const popup = document.getElementById('smartPopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  });

  const backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  

  