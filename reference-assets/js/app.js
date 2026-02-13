/**
 * ZAVIS Healthcare Homepage - JavaScript
 * Minimal, performant interactions for navigation and scroll reveals
 */

(function() {
  'use strict';

  // ==========================================================================
  // NAVIGATION - Sticky scroll state
  // ==========================================================================

  const nav = document.getElementById('main-nav');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Add scrolled state to nav
  function handleNavScroll() {
    if (window.scrollY > 100) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  // Initial check
  handleNavScroll();

  // Listen to scroll
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(handleNavScroll);
  });

  // ==========================================================================
  // MOBILE MENU TOGGLE
  // ==========================================================================

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isOpen = navMenu.classList.contains('is-open');

      if (isOpen) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('is-open');
        navToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile menu when clicking on a link (except dropdown toggles)
    const navLinks = navMenu.querySelectorAll('a:not(.nav__link--has-dropdown)');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = nav.contains(event.target);
      const isMenuOpen = navMenu.classList.contains('is-open');

      if (!isClickInsideNav && isMenuOpen) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ==========================================================================
  // DROPDOWN MENU TOGGLE (for touch/mobile devices)
  // ==========================================================================

  const dropdownParents = document.querySelectorAll('.nav__item--has-dropdown');

  dropdownParents.forEach(function(parent) {
    const link = parent.querySelector('.nav__link');
    const dropdown = parent.querySelector('.nav__dropdown');

    if (link && dropdown) {
      // Make dropdown clickable on touch devices
      link.addEventListener('click', function(e) {
        // On mobile or tablets, toggle the dropdown
        if (window.innerWidth < 1024) {
          e.preventDefault();

          // Close all other dropdowns
          dropdownParents.forEach(function(otherParent) {
            if (otherParent !== parent) {
              otherParent.classList.remove('dropdown-open');
            }
          });

          // Toggle current dropdown
          parent.classList.toggle('dropdown-open');
        }
        // On desktop, let the hover CSS handle it (don't prevent default)
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideDropdown = Array.from(dropdownParents).some(function(parent) {
      return parent.contains(event.target);
    });

    if (!isClickInsideDropdown) {
      dropdownParents.forEach(function(parent) {
        parent.classList.remove('dropdown-open');
      });
    }
  });

  // ==========================================================================
  // SMOOTH SCROLL TO ANCHORS
  // ==========================================================================

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // SCROLL REVEAL ANIMATION
  // ==========================================================================

  // Check if browser supports IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Unobserve after reveal for performance
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with .reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(function(element) {
      revealObserver.observe(element);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    // Show all reveal elements immediately
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(function(element) {
      element.classList.add('revealed');
    });
  }

  // ==========================================================================
  // ENHANCED BUTTON INTERACTIONS
  // ==========================================================================

  const ctaButtons = document.querySelectorAll('.button--primary, .button--secondary');

  ctaButtons.forEach(function(button) {
    // Add ripple effect on click (optional enhancement)
    button.addEventListener('click', function(e) {
      // Simple feedback - button already has active state in CSS
      // This is a placeholder for future enhancements like analytics tracking
      const buttonText = this.textContent.trim();
      console.log('CTA clicked:', buttonText);

      // Example: Track with analytics
      // if (typeof gtag !== 'undefined') {
      //   gtag('event', 'cta_click', {
      //     'button_text': buttonText
      //   });
      // }
    });
  });

  // ==========================================================================
  // PERFORMANCE OPTIMIZATIONS
  // ==========================================================================

  // Lazy load images below the fold (if images are added later)
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(function(img) {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers without native lazy loading
    // Could implement IntersectionObserver-based lazy loading here
  }

  // ==========================================================================
  // ACCESSIBILITY ENHANCEMENTS
  // ==========================================================================

  // Announce page transitions for screen readers
  function announcePageChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(function() {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // Add screen-reader-only class
  const style = document.createElement('style');
  style.textContent = `
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `;
  document.head.appendChild(style);

  // ==========================================================================
  // FOCUS MANAGEMENT
  // ==========================================================================

  // Ensure focus is visible when using keyboard navigation
  let isUsingKeyboard = false;

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      isUsingKeyboard = true;
      document.body.classList.add('using-keyboard');
    }
  });

  document.addEventListener('mousedown', function() {
    isUsingKeyboard = false;
    document.body.classList.remove('using-keyboard');
  });

  // Add focus styles only for keyboard users
  const focusStyle = document.createElement('style');
  focusStyle.textContent = `
    body:not(.using-keyboard) *:focus {
      outline: none;
    }

    body.using-keyboard *:focus-visible {
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring, #3B82F6);
      outline-offset: var(--focus-ring-offset, 2px);
    }
  `;
  document.head.appendChild(focusStyle);

  // ==========================================================================
  // SECTION TRACKING (Optional - for active nav states)
  // ==========================================================================

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__menu a[href^="#"]');

  function updateActiveNavLink() {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function(link) {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // Update on scroll (throttled)
  let sectionTimeout;
  window.addEventListener('scroll', function() {
    if (sectionTimeout) {
      window.cancelAnimationFrame(sectionTimeout);
    }
    sectionTimeout = window.requestAnimationFrame(updateActiveNavLink);
  });

  // Initial check
  updateActiveNavLink();

  // ==========================================================================
  // INITIALIZATION COMPLETE
  // ==========================================================================

  console.log('ZAVIS Homepage initialized');

  // Announce page ready for screen readers
  document.addEventListener('DOMContentLoaded', function() {
    announcePageChange('Page loaded');
  });

})();

// ==========================================================================
// SPECIALTY PAGE - FAQ ACCORDION
// ==========================================================================

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(function(item) {
  const question = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');

  if (question && answer) {
    question.addEventListener('click', function() {
      const isOpen = item.classList.contains('is-open');
      
      // Close all other FAQ items
      faqItems.forEach(function(otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherQuestion = otherItem.querySelector('.faq__question');
          if (otherQuestion) {
            otherQuestion.setAttribute('aria-expanded', 'false');
          }
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('is-open');
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  }
});

// ==========================================================================
// SPECIALTY PAGE - CALCULATOR
// ==========================================================================

const calculator = document.querySelector('.calculator');

if (calculator) {
  const locationsInput = document.getElementById('locations');
  const callsInput = document.getElementById('calls');
  const callsValue = document.getElementById('calls-value');
  const visitCostInput = document.getElementById('visit-cost');
  const afterHoursInputs = document.querySelectorAll('input[name="after-hours"]');
  const resultValue = document.getElementById('result-value');

  function calculateImpact() {
    const locations = parseInt(locationsInput?.value || 1);
    const calls = parseInt(callsInput?.value || 200);
    const visitCost = parseInt(visitCostInput?.value || 500);
    let afterHours = false;
    
    afterHoursInputs.forEach(function(input) {
      if (input.checked && input.value === 'yes') {
        afterHours = true;
      }
    });

    // Simple calculation formula (customizable based on actual metrics)
    // Assumes 10% conversion rate on calls, 20% of calls are after-hours
    const weeklyImpact = calls * 0.10 * visitCost;
    const afterHoursBonus = afterHours ? (calls * 0.20 * 0.10 * visitCost) : 0;
    const totalWeeklyImpact = weeklyImpact + afterHoursBonus;
    const monthlyImpact = totalWeeklyImpact * 4.33 * locations;

    if (resultValue) {
      resultValue.textContent = 'AED ' + Math.round(monthlyImpact).toLocaleString();
    }
  }

  // Update calls value display
  if (callsInput && callsValue) {
    callsInput.addEventListener('input', function() {
      callsValue.textContent = this.value;
      calculateImpact();
    });
  }

  // Listen to all input changes
  if (locationsInput) {
    locationsInput.addEventListener('input', calculateImpact);
  }
  
  if (visitCostInput) {
    visitCostInput.addEventListener('input', calculateImpact);
  }
  
  afterHoursInputs.forEach(function(input) {
    input.addEventListener('change', calculateImpact);
  });

  // Initial calculation
  calculateImpact();
}

console.log('ZAVIS Specialty page interactions initialized');
