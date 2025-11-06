// Set experience tab as default active tab
window.addEventListener('load', function() {
    // Remove active class from skills
    document.querySelector('.tab-item[data-target=".skills"]').classList.remove('active');
    document.querySelector('.skills.tab-content').classList.remove('active');
    
    // Add active class to experience
    document.querySelector('.tab-item[data-target=".experience"]').classList.add('active');
    document.querySelector('.experience.tab-content').classList.add('active');
});