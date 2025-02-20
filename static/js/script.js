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
                offset = 800; 
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

    // Intersection Observer for animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.target.id === 'intro') {
                entry.target.classList.toggle('hidden', !entry.isIntersecting);
            }

            if (entry.target.id === 'about') {
                const aboutHeader = document.querySelector('.about h1');
                const aboutText = document.querySelector('.about-text');
                const aboutImage = document.querySelector('.about-image');
                if (entry.isIntersecting) {
                    aboutHeader.classList.add('visible');
                    aboutText.classList.add('visible');
                    aboutImage.classList.add('visible');
                } else {
                    aboutHeader.classList.remove('visible');
                    aboutText.classList.remove('visible');
                    aboutImage.classList.remove('visible');
                }
            }

            if (entry.target.id === 'projects') {
                entry.target.classList.toggle('visible', entry.isIntersecting);
            }
        });
    }, { threshold: 0.2 });

    ['#intro', '#projects', '#about'].forEach(id => observer.observe(document.querySelector(id)));

    // Swipe & Drag Support for Project Carousel
    let startX, endX, isSwiping = false;
    const projectContainer = document.querySelector('.project-container');

    function handleSwipe() {
        if (!endX) return; 
        if (startX - endX > 50) showProject(currentProjectIndex + 1, 'right');
        else if (endX - startX > 50) showProject(currentProjectIndex - 1, 'left');
        isSwiping = false;
    }

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
