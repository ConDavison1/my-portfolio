document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentProjectIndex = 0;

    // Function to show a specific project card with sliding effect
    function showProject(index, direction = 'right') {
        projectCards.forEach((card, i) => {
            card.classList.remove('visible', 'slide-left', 'slide-right'); // Reset all previous states

            if (i === index) {
                card.classList.add('visible'); // Show the current project card
                card.style.transition = 'transform 0.5s ease'; // Apply smooth transition
            } else {
                // Add slide direction to the other cards
                card.classList.add(direction === 'right' ? 'slide-right' : 'slide-left');
                card.style.transition = 'transform 0.5s ease'; // Apply transition for sliding effect
            }
        });
    }

    // Ensure the first project is visible initially
    showProject(currentProjectIndex, 'right');

    // Event listeners for arrow navigation
    arrowLeft.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex === 0) ? projectCards.length - 1 : currentProjectIndex - 1;
        showProject(currentProjectIndex, 'left'); // Slide left when going back
    });

    arrowRight.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex === projectCards.length - 1) ? 0 : currentProjectIndex + 1;
        showProject(currentProjectIndex, 'right'); // Slide right when moving forward
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer for sections
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

const projects = document.querySelector('.projects');
const aboutSection = document.querySelector('#about');

// Observe the sections, not the individual project cards
observer.observe(document.querySelector('#intro'));
observer.observe(projects);
observer.observe(aboutSection);

// Get all the dots and project cards
const dots = document.querySelectorAll('.dot');
const projectCards = document.querySelectorAll('.project-card');

// Function to update active dot
function updateActiveDot(index) {
    dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
    dots[index].classList.add('active'); // Add active class to the current dot
}

// Initially set the first dot to active
updateActiveDot(0);

// Function to update the class of project cards for sliding
function updateSlide(currentIndex) {
    projectCards.forEach((card, index) => {
        // Remove sliding classes from all project cards
        card.classList.remove('slide-left', 'slide-right');
        
        // Add slide-left or slide-right based on the index
        if (index < currentIndex) {
            card.classList.add('slide-left');
        } else if (index > currentIndex) {
            card.classList.add('slide-right');
        }
    });
}

// Event listeners for the arrows
let currentIndex = 0; // Keep track of the current project

document.querySelector('.arrow-left').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectCards.length - 1; // Move left, loop around if at the first project
    updateActiveDot(currentIndex);
    updateSlide(currentIndex); // Update the sliding classes based on the current index
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    currentIndex = (currentIndex < projectCards.length - 1) ? currentIndex + 1 : 0; // Move right, loop around if at the last project
    updateActiveDot(currentIndex);
    updateSlide(currentIndex); // Update the sliding classes based on the current index
});

