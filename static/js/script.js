document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    // Grid layout
    projectCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
    });

    // Smooth scrolling 
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
    
    // Observe 
    document.querySelectorAll('#intro, #about, #projects, .stack, .resume').forEach(section => {
        observer.observe(section);
    });

    // Sidebar
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    const sidebarLinks = document.querySelectorAll('#sidebar .nav-link'); 

    hamburgerIcon.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        body.classList.toggle('sidebar-open'); 
    });

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

    // particles.js 
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 200,
                "density": {
                    "enable": true,
                    "value_area": 1000 
                }
            },
            "color": {
                "value": "#080516" 
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 10
                }
            },
            "opacity": {
                "value": 0.5, 
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1
                }
            },
            "size": {
                "value": 4, 
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 40,
                    "size_min": 0.1
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150, 
                "color": "#ffffff", 
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out", 
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse" 
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" 
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
});
