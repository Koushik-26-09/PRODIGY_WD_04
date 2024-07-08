// task4.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize typing effect
    new Typed('#typed-text', {
        strings: ['Web Developer', 'AI Enthusiast', 'Tech Lover'],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top button functionality
    const scrollBtn = document.getElementById('scrollBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form validation
    (() => {
        'use strict'
        const forms = document.querySelectorAll('.needs-validation')
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    })();
});
