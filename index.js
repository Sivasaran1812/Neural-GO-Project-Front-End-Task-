document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jobApplicationForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');

    // Validation functions

    // This function validates the name input field
    function validateName() {
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        const regex = /^[a-zA-Z\s]+$/; // Regular expression to match only letters and whitespace
        if (!regex.test(nameInput.value.trim())) {
            nameError.textContent = 'Name must contain only letters (e.g., John Doe)';// Display error message
            return false;
        } else {
            nameError.textContent = '';// Clear the error message if validation succeeds
            return true;
        }
    }

    // This function validates the email input field
    function validateEmail() {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;               // Regular expression to match email format
        if (!regex.test(emailInput.value.trim())) {               // Check if the input value does not match the regex
            emailError.textContent = 'Invalid email format(e.g., john.doe@gmail.com)'; // Clear the error message if validation succeeds
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    // This function validates the phone field
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        if (!phoneInput.checkValidity()) {
            phoneError.textContent = 'Invalid phone number format (e.g., XXX-XXX-XXXX)';
            return false;
        } else {
            phoneError.textContent = '';
            return true;
        }
    }

    // This function validates the phone input field
    function validateAddress() {
        const addressInput = document.getElementById('address');
        const addressError = document.getElementById('addressError');
        if (addressInput.value.trim().length < 10) {
            addressError.textContent = 'Address must be at least 10 characters long';
            return false;
        } else {
            addressError.textContent = '';
            return true;
        }
    }

    // This function validates the resume input field
    function validateResume() {
        const resumeInput = document.getElementById('resume');
        const resumeError = document.getElementById('resumeError');
        if (resumeInput.files.length === 0) {
            resumeError.textContent = 'Please upload a resume';
            return false;
        } else {
            const fileSize = resumeInput.files[0].size / 1024 / 1024;   // Calculate file size in MB
            if (fileSize > 5) {
                resumeError.textContent = 'File size exceeds 5MB limit';
                return false;
            }  else {
                resumeError.textContent = 'Resume successfully uploaded'; // Display success message
                return true;
            }
        }
    }

    // This function validates the entire form by calling individual validation functions for each input field
    function validateForm() {
        return validateName() && validateEmail() && validatePhone() && validateAddress() && validateResume();
    }

    // Event listeners for real-time validation
    form.addEventListener('input', function () {
        validateForm();                           // Call validateForm function when any input event occurs
        submitBtn.disabled = !form.checkValidity(); // Disable submit button if form is not valid
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        if (validateForm()) {        // Check if the form is valid
            // If validation succeeds, show the success message
            successMessage.style.display = 'block';
            form.reset(); // Reset the form fields
        
            // Show alert for successful submission
            alert('Form submitted successfully!');
        }
    });
});
