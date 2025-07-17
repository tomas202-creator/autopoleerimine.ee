// Services Navigation Scroll Handler
document.addEventListener('DOMContentLoaded', function() {
    const servicesNav = document.querySelector('.cs-services-nav');
    const contactSection = document.querySelector('#contact-1893');
    const contentSections = document.querySelectorAll('#content-page-1945 .cs-content-wrapper, #content-page-1945 .cs-content-default');
    
    if (!servicesNav || !contactSection) return;
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }
    
    // Function to check if we're in contact area
    function isInContactArea() {
        const contactRect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide navigation when contact section is approaching
        return contactRect.top <= windowHeight - 50;
    }
    
    // Function to check if we're in content area
    function isInContentArea() {
        for (const section of contentSections) {
            if (isInViewport(section)) {
                return true;
            }
        }
        return false;
    }
    
    // Function to update navigation visibility
    function updateNavVisibility() {
        const inContactArea = isInContactArea();
        const inContentArea = isInContentArea();
        
        if (inContactArea || !inContentArea) {
            servicesNav.style.opacity = '0';
            servicesNav.style.visibility = 'hidden';
            servicesNav.style.transform = 'translateY(100%)';
        } else {
            servicesNav.style.opacity = '1';
            servicesNav.style.visibility = 'visible';
            servicesNav.style.transform = 'translateY(0)';
        }
    }
    
    // Add transition styles to navigation
    servicesNav.style.transition = 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease';
    
    // Initial check
    updateNavVisibility();
    
    // Listen for scroll events
    let ticking = false;
    
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateNavVisibility();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateNavVisibility);
}); 