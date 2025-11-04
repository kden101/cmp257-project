const form = document.getElementById('signupForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  errorMsg.textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !phone || !password) {
    errorMsg.textContent = 'Please fill in all fields.';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  const phonePattern = /^[0-9]{10,}$/;
  if (!phonePattern.test(phone)) {
    errorMsg.textContent = 'Phone number must have at least 10 digits.';
    return;
  }

  if (password.length < 8) {
    errorMsg.textContent = 'Password must be at least 8 characters long.';
    return;
  }

  alert('Sign up successful!');
  form.reset();
});
