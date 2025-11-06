// Modern animations for portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Smooth reveal animation for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
        section.classList.add('reveal-section');
        observer.observe(section);
    });

    // Parallax effect for home section
    window.addEventListener('scroll', () => {
        const scroll = window.scrollTop;
        document.querySelector('.home-text').style.transform = `translateY(${scroll * 0.3}px)`;
        document.querySelector('.home-text').style.opacity = 1 - (scroll * 0.003);
    });

    // Animated skill bars
    document.querySelectorAll('.skill-item').forEach((skill) => {
        const progressBar = skill.querySelector('.progress-bar');
        const percentage = progressBar.style.width;
        progressBar.style.width = '0';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBar.style.width = percentage;
                    progressBar.style.transition = 'width 1.5s ease-out';
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skill);
    });

    // Portfolio item hover effects
    document.querySelectorAll('.portfolio-item').forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.portfolio-item-inner').style.transform = 'scale(1.03)';
            item.querySelector('.portfolio-item-inner').style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.querySelector('.portfolio-item-inner').style.transform = 'scale(1)';
            item.querySelector('.portfolio-item-inner').style.transition = 'all 0.3s ease';
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animated contact cards
    document.querySelectorAll('.contact-item').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.3s ease';
        });
    });
});