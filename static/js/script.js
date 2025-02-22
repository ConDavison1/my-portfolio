document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const dots = document.querySelectorAll('.dot');
    let currentProjectIndex = 0;
    let isTransitioning = false;

    function showProject(index, direction) {
        if (isTransitioning) return;
        isTransitioning = true;

        if (index < 0) index = projectCards.length - 1;
        if (index >= projectCards.length) index = 0;

        projectCards.forEach((card, i) => {
            card.classList.remove('visible', 'slide-left', 'slide-right');
            card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            card.style.opacity = '0';

            if (i === index) {
                card.classList.add('visible');
                card.style.opacity = '1';
                card.style.transform = 'translateX(0)';
            } else if (i === currentProjectIndex) {
                card.style.opacity = '0';
                card.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
            } else {
                card.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
            }
        });

        updateActiveDot(index);
        currentProjectIndex = index;
        setTimeout(() => { isTransitioning = false; }, 500);
    }

    function updateActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    arrowLeft.addEventListener('click', () => showProject(currentProjectIndex - 1, 'left'));
    arrowRight.addEventListener('click', () => showProject(currentProjectIndex + 1, 'right'));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index !== currentProjectIndex) {
                showProject(index, index > currentProjectIndex ? 'right' : 'left');
            }
        });
    });

    // Initialize the first project
    showProject(currentProjectIndex, 'right');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
    
            let offset = 0; 
    
            if (this.getAttribute('href') === "#experience") {
                offset = 1200; 
            }
    
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
    
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
    
    

    // Mobile navigation
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navbarContainer = document.querySelector('.navbar-container');

    hamburgerIcon.addEventListener('click', function () {
        navbarContainer.classList.toggle('active');
    });

    // Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        
            if (entry.target.id === 'intro') {
                entry.target.classList.toggle('hidden', !entry.isIntersecting);
            }
    
            if (entry.target.id === 'about') {
                const aboutHeader = document.querySelector('.about h1');
                const aboutText = document.querySelector('.about-text');
                const aboutInfo = document.querySelector('.about-info');  
    
                if (entry.isIntersecting) {
                    aboutHeader.classList.add('visible');
                    aboutText.classList.add('visible');
                    aboutInfo.classList.add('visible');
                } else {
                    aboutHeader.classList.remove('visible');
                    aboutText.classList.remove('visible');
                    aboutInfo.classList.remove('visible');
                }
            }
    
            if (entry.target.id === 'projects') {
                entry.target.classList.toggle('visible', entry.isIntersecting);
            }
    
            if (entry.target.classList.contains('stack')) {
                entry.target.classList.toggle('visible', entry.isIntersecting);
            }
    
            if (entry.target.classList.contains('resume')) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                } else {
                    entry.target.classList.add('hidden');
                    entry.target.classList.remove('visible');
                }
            }
        });
    }, { threshold: 0 });
    
// Observe all relevant sections
document.querySelectorAll('#intro, #about, #projects, .stack, .resume').forEach(section => {
    observer.observe(section);
});
    

// Observe all relevant sections
document.querySelectorAll('#intro, #about, #projects, .stack, .resume').forEach(section => {
    observer.observe(section);
});


// Observe all relevant sections
document.querySelectorAll('#intro, #about, #projects, .stack').forEach(section => {
    observer.observe(section);
});


    ['#intro', '#projects', '#about'].forEach(id => observer.observe(document.querySelector(id)));

    // Swipe & Drag Support for Project Carousel
    let startX, endX, isSwiping = false;
    const projectContainer = document.querySelector('.project-container');

    function handleSwipe(e) {
        if (!isSwiping || !endX) return; 
        
        const swipeDistance = Math.abs(startX - endX);
        const swipeThreshold = 50; 
        
        if (swipeDistance > swipeThreshold) {
            if (startX - endX > 0) {
                showProject(currentProjectIndex + 1, 'right');
            } else {
                showProject(currentProjectIndex - 1, 'left');
            }
        }
    
        isSwiping = false;
    }
    
document.querySelectorAll('.project-link').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); 
    });
});

    projectContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    projectContainer.addEventListener('touchmove', (e) => {
        if (isSwiping) endX = e.touches[0].clientX;
    });

    projectContainer.addEventListener('touchend', handleSwipe);

    projectContainer.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isSwiping = true;
    });

    projectContainer.addEventListener('mousemove', (e) => {
        if (isSwiping) endX = e.clientX;
    });

    projectContainer.addEventListener('mouseup', handleSwipe);
});


const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');
const body = document.body;
const sidebarLinks = document.querySelectorAll('#sidebar .nav-link'); 

// Toggle the 'active' class 
hamburgerIcon.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    body.classList.toggle('sidebar-open'); 
});

// Close sidebar 
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        sidebar.classList.remove('active'); 
        body.classList.remove('sidebar-open'); 
    });
});

/**
 * Hero type effect
 */
const typed = document.querySelector('.typed');
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}


// Initialize particles.js configuration
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 200, // Number of particles
            "density": {
                "enable": true,
                "value_area": 1000 // Density area of particles
            }
        },
        "color": {
            "value": "#080516" // Particle color
        },
        "shape": {
            "type": "polygon", // Shape of the particles
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 10
            }
        },
        "opacity": {
            "value": 0.5, // Opacity of particles
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 4, // Particle size
            "random": true,
            "anim": {
                "enable": true,
                "speed": 40,
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150, // Distance between connected particles
            "color": "#ffffff", // Line color
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out", // Particles will move out of the container
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Repel particles when hovering over them
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Push particles when clicking
            }
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});
