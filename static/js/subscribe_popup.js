document.addEventListener('DOMContentLoaded', function() {
    const subscribeEmailInput = document.getElementById('subscribeEmail');
    const subscribeButton = document.getElementById('subscribeButton');
    // Ensure Bootstrap's Modal JS is loaded, as assumed in base.html
    const subscriptionSuccessModal = new bootstrap.Modal(document.getElementById('subscriptionSuccessModal'));

    if (subscribeButton && subscribeEmailInput) {
        subscribeButton.addEventListener('click', function() {
            const email = subscribeEmailInput.value;
            // Basic client-side email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(email)) {
                // In a real application, you would send this email to a server via AJAX here.
                // For this static template, we'll just simulate success.

                // Clear the input field
                subscribeEmailInput.value = '';

                // Show the success modal
                subscriptionSuccessModal.show();

                // Remove any previous invalid state, if it was applied
                if (subscribeEmailInput.classList.contains('is-invalid')) {
                    subscribeEmailInput.classList.remove('is-invalid');
                }

            } else {
                // If email format is invalid, add Bootstrap's 'is-invalid' class for visual feedback
                subscribeEmailInput.classList.add('is-invalid');
                // You might also add a small <div> below the input with class 'invalid-feedback'
                // for a specific message, which Bootstrap automatically shows when 'is-invalid' is present.
            }
        });

        // Optional: Remove the 'is-invalid' class when the user starts typing again
        subscribeEmailInput.addEventListener('input', function() {
            if (subscribeEmailInput.classList.contains('is-invalid')) {
                subscribeEmailInput.classList.remove('is-invalid');
            }
        });
    }
});