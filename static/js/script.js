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

        if (index < 0) {
            index = projectCards.length - 1;
        } else if (index >= projectCards.length) {
            index = 0;
        }

        projectCards.forEach((card, i) => {
            card.classList.remove('visible', 'slide-left', 'slide-right');
            card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            card.style.opacity = '0';
            card.style.transform = '';


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

    arrowLeft.addEventListener('click', () => {
        showProject(currentProjectIndex - 1, 'left');
    });

    arrowRight.addEventListener('click', () => {
        showProject(currentProjectIndex + 1, 'right');
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index !== currentProjectIndex) {
                showProject(index, index > currentProjectIndex ? 'right' : 'left');
            }
        });
    });

   
    showProject(currentProjectIndex, 'right');  

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });


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

    observer.observe(document.querySelector('#intro'));
    observer.observe(document.querySelector('#projects'));
    observer.observe(document.querySelector('#about'));
});
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navbarContainer = document.querySelector('.navbar-container');

    hamburgerIcon.addEventListener('click', function () {
        navbarContainer.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

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

    observer.observe(document.querySelector('#intro'));
    observer.observe(document.querySelector('#projects'));
    observer.observe(document.querySelector('#about'));
});

let startX, endX, isSwiping = false;
const projectContainer = document.querySelector('.project-container');
const projectCards = document.querySelectorAll('.project-card');


projectCards[0].classList.add('visible');


projectContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

projectContainer.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    endX = e.touches[0].clientX;
});

projectContainer.addEventListener('touchend', () => {
    if (isSwiping) {
        if (startX - endX > 50) {
            moveToNextProject();
        } else if (endX - startX > 50) {
            moveToPreviousProject(); 
        }
    }
    isSwiping = false;
});


projectContainer.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isSwiping = true;
});

projectContainer.addEventListener('mousemove', (e) => {
    if (!isSwiping) return;
    endX = e.clientX;
});

projectContainer.addEventListener('mouseup', () => {
    if (isSwiping) {
        if (startX - endX > 50) {
            moveToNextProject(); 
        } else if (endX - startX > 50) {
            moveToPreviousProject(); 
        }
    }
    isSwiping = false;
});

// Show next project
function moveToNextProject() {
    const currentProject = document.querySelector('.project-card.visible');
    const nextProject = currentProject.nextElementSibling || projectCards[0]; 
    currentProject.classList.remove('visible');
    nextProject.classList.add('visible');
}

// Show previous project
function moveToPreviousProject() {
    const currentProject = document.querySelector('.project-card.visible');
    const prevProject = currentProject.previousElementSibling || projectCards[projectCards.length - 1]; 
    currentProject.classList.remove('visible');
    prevProject.classList.add('visible');
}
