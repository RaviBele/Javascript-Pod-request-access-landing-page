function validateEmailInput(event) {
    const emailInput = document.getElementById('email').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput)) {
      feedbackElement.textContent = ""; // Email is valid
      document.getElementById('email').value = ""; //
    } else {
      feedbackElement.textContent = "Opps! Please check your email";
    }
    
    event.preventDefault();
}

submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', validateEmailInput)