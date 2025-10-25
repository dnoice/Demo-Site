/* Contact Form Component - Validation and Submission */

(function() {
    'use strict';

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        const form = utils.qs('#contact-form');
        if (!form) return;

        setupFormValidation(form);
        setupFormSubmission(form);
    }

    /**
     * Setup real-time form validation
     */
    function setupFormValidation(form) {
        const inputs = utils.qsAll('.form-input, .form-textarea', form);

        inputs.forEach(input => {
            // Validate on blur
            utils.on(input, 'blur', () => {
                validateField(input);
            });

            // Clear error on input
            utils.on(input, 'input', () => {
                if (utils.hasClass(input, 'error')) {
                    clearFieldError(input);
                }
            });
        });
    }

    /**
     * Setup form submission
     */
    function setupFormSubmission(form) {
        utils.on(form, 'submit', async (e) => {
            e.preventDefault();

            // Validate all fields
            const isValid = validateForm(form);

            if (!isValid) {
                utils.announce('Please fix the errors in the form');
                return;
            }

            // Get form data
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };

            // Get submit button
            const submitButton = utils.qs('button[type="submit"]', form);

            // Disable form during submission
            setFormDisabled(form, true);
            if (submitButton) {
                submitButton.textContent = 'Sending...';
            }

            try {
                // Submit form
                const result = await API.submitContactForm(data);

                if (result.success) {
                    // Show success message
                    showSuccessMessage(form);

                    // Reset form
                    form.reset();

                    if (window.Toast) Toast.success('Message sent successfully!');
                    utils.announce('Message sent successfully');
                } else {
                    if (window.Toast) Toast.error('Error sending message. Please try again.');
                }

            } catch (error) {
                console.error('Form submission error:', error);
                if (window.Toast) Toast.error('Error sending message. Please try again.');
            } finally {
                setFormDisabled(form, false);
                if (submitButton) {
                    submitButton.textContent = 'Send Message';
                }
            }
        });
    }

    /**
     * Validate entire form
     */
    function validateForm(form) {
        const inputs = utils.qsAll('.form-input, .form-textarea', form);
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    /**
     * Validate individual field
     */
    function validateField(input) {
        const value = input.value.trim();
        const name = input.getAttribute('name');
        let error = '';

        // Check if required
        if (input.hasAttribute('required') && !value) {
            error = 'This field is required';
        }
        // Validate email
        else if (input.type === 'email' && value && !utils.isValidEmail(value)) {
            error = 'Please enter a valid email address';
        }
        // Validate minimum length
        else if (name === 'message' && value.length < 10) {
            error = 'Message must be at least 10 characters';
        }
        else if (name === 'subject' && value.length < 3) {
            error = 'Subject must be at least 3 characters';
        }
        else if (name === 'name' && value.length < 2) {
            error = 'Name must be at least 2 characters';
        }

        if (error) {
            showFieldError(input, error);
            return false;
        } else {
            clearFieldError(input);
            return true;
        }
    }

    /**
     * Show field error
     */
    function showFieldError(input, message) {
        utils.addClass(input, 'error');
        input.setAttribute('aria-invalid', 'true');

        const errorElement = utils.qs(`[data-error="${input.getAttribute('name')}"]`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    /**
     * Clear field error
     */
    function clearFieldError(input) {
        utils.removeClass(input, 'error');
        input.setAttribute('aria-invalid', 'false');

        const errorElement = utils.qs(`[data-error="${input.getAttribute('name')}"]`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    /**
     * Disable/enable form
     */
    function setFormDisabled(form, disabled) {
        const inputs = utils.qsAll('input, textarea, button', form);
        inputs.forEach(input => {
            input.disabled = disabled;
        });
    }

    /**
     * Show success message
     */
    function showSuccessMessage(form) {
        const successMessage = utils.qs('[data-success-message]');
        if (!successMessage) return;

        // Hide form
        utils.hide(form);

        // Show success message
        utils.show(successMessage);

        // Auto-hide after configured duration and show form again
        setTimeout(() => {
            utils.hide(successMessage);
            utils.show(form);
        }, CONFIG.form.successMessageDuration);
    }

})();
