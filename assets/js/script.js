// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('hidden');
}

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollToTop = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }

    // Update active nav item
    const sections = ['home', 'timeline', 'organizations', 'science', 'faq', 'sources', 'conclusion'];
    const navbar = document.querySelector('.navbar');

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                // Update active state if needed
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections with fade animation
document.querySelectorAll('.section-fade').forEach(section => {
    observer.observe(section);
});

// Science tab switching
function showScienceTab(tabId) {
    // Hide all content
    document.querySelectorAll('.science-content').forEach(content => {
        content.classList.add('hidden');
    });

    // Show selected content
    document.getElementById('content-' + tabId).classList.remove('hidden');

    // Update tab buttons
    document.querySelectorAll('[id^="tab-"]').forEach(tab => {
        tab.classList.remove('bg-blue-600', 'text-white');
        tab.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-300');
    });

    document.getElementById('tab-' + tabId).classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-300');
    document.getElementById('tab-' + tabId).classList.add('bg-blue-600', 'text-white');
}

// FAQ toggle
function toggleFAQ(faqId) {
    const faqItem = document.querySelectorAll('.faq-item')[faqId - 1];
    const answer = faqItem.querySelector('.faq-answer');
    const toggleIcon = faqItem.querySelector('.toggle-icon');

    if (faqItem.classList.contains('expanded')) {
        faqItem.classList.remove('expanded');
        toggleIcon.textContent = '+';
    } else {
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('expanded');
            item.querySelector('.toggle-icon').textContent = '+';
        });

        // Open clicked FAQ
        faqItem.classList.add('expanded');
        toggleIcon.textContent = '−';
    }
}

// Initialize animations on load
document.addEventListener('DOMContentLoaded', function() {
    // Add initial delay for animations
    setTimeout(() => {
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.animationDelay = (index * 0.2) + 's';
        });
    }, 100);
});
