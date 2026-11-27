// Both email forms share the `.signup-form` class, so one listener setup
// keeps their behavior consistent without repeating the same code.
const signupForms = document.querySelectorAll(".signup-form");

signupForms.forEach((form) => {
  form.addEventListener("submit", handleSignupSubmit);
});

function handleSignupSubmit(event) {
  // This page is a front-end preview and has no real sign-up service.
  // Stop the browser from reloading the page and show a helpful message instead.
  event.preventDefault();

  const submittedForm = event.currentTarget;
  const message = submittedForm.querySelector(".form-note");

  if (message) {
    message.textContent = "Sign-up is not connected in this page preview.";
  }
}
