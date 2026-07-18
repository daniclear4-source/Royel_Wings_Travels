document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successBanner = document.getElementById('success-banner');
    
    // Parse URL Search Parameters to prefill booking requests
    const prefillFromParams = () => {
        const params = new URLSearchParams(window.location.search);
        const selectedPackage = params.get('package');
        const heroDest = params.get('destination');
        const heroDate = params.get('date');
        const heroTravelers = params.get('travelers');

        const messageInput = document.getElementById('message');
        if (!messageInput) return;

        if (selectedPackage) {
            messageInput.value = `Hello Royal Wings Travel, I am interested in booking the "${decodeURIComponent(selectedPackage)}" package. Please share details regarding the itinerary, dates, and availability.`;
        } else if (heroDest || heroDate || heroTravelers) {
            let inquiryText = `Hello Royal Wings Travel, I would like to make an inquiry:`;
            if (heroDest) inquiryText += `\n- Destination: ${decodeURIComponent(heroDest)}`;
            if (heroDate) inquiryText += `\n- Tentative Date: ${heroDate}`;
            if (heroTravelers) inquiryText += `\n- Number of Travelers: ${heroTravelers}`;
            inquiryText += `\n\nPlease contact me with options and pricing.`;
            messageInput.value = inquiryText;
        }
    };
    prefillFromParams();

    // Field-level Validation Utils
    const showError = (inputEl, message) => {
        const group = inputEl.closest('.form-group') || inputEl.closest('.form-group-full');
        if (!group) return;
        group.classList.add('error');
        let errMsg = group.querySelector('.error-message');
        if (!errMsg) {
            errMsg = document.createElement('span');
            errMsg.className = 'error-message';
            group.appendChild(errMsg);
        }
        errMsg.textContent = message;
        errMsg.style.display = 'block';
    };

    const clearError = (inputEl) => {
        const group = inputEl.closest('.form-group') || inputEl.closest('.form-group-full');
        if (!group) return;
        group.classList.remove('error');
        const errMsg = group.querySelector('.error-message');
        if (errMsg) errMsg.style.display = 'none';
    };

    // Live validation triggers on input
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                clearError(input);
            });
        });

        // Form Submit Handler
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const nameEl = document.getElementById('name');
            const emailEl = document.getElementById('email');
            const phoneEl = document.getElementById('phone');
            const messageEl = document.getElementById('message');

            // Name validation
            if (nameEl.value.trim().length < 3) {
                showError(nameEl, "Please enter your full name (minimum 3 characters).");
                isValid = false;
            } else {
                clearError(nameEl);
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailEl.value.trim())) {
                showError(emailEl, "Please enter a valid email address.");
                isValid = false;
            } else {
                clearError(emailEl);
            }

            // Phone validation (Indian Standard: 10 digits)
            const phoneRegex = /^[6-9]\d{9}$/;
            if (!phoneRegex.test(phoneEl.value.trim())) {
                showError(phoneEl, "Please enter a valid 10-digit mobile number (starts with 6-9).");
                isValid = false;
            } else {
                clearError(phoneEl);
            }

            // Message validation
            if (messageEl.value.trim().length < 10) {
                showError(messageEl, "Please describe your travel request (minimum 10 characters).");
                isValid = false;
            } else {
                clearError(messageEl);
            }

            if (isValid) {
                // Success action
                if (successBanner) {
                    successBanner.classList.add('active');
                    successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                contactForm.reset();

                // Clear success message after 6 seconds
                setTimeout(() => {
                    if (successBanner) successBanner.classList.remove('active');
                }, 6000);
            }
        });
    }
});
