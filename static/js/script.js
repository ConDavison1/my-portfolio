document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.id === 'intro') {
            entry.target.classList.toggle('hidden', !entry.isIntersecting);
        }

        if (entry.target.classList.contains('projects')) {
            entry.target.classList.toggle('visible', entry.isIntersecting);
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
    });
}, { threshold: 0.2 });

const projects = document.querySelector('.projects');
const aboutSection = document.querySelector('#about');

observer.observe(document.querySelector('#intro'));
observer.observe(projects);
observer.observe(aboutSection);
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});
