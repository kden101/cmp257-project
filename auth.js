//simple authentication just handle form submissions and redirections correclty
//Customer Login
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      //we chk if it's admin login page
      if (window.location.pathname.includes('admin')) {
        window.location.href = '/Admin_Dashboard.html';
      } else {
        window.location.href = '/customer_dashboard.html';
      }
    });
  }
  //Signup
  const signupForm = document.getElementById('signupForm');
  
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = '/customer_dashboard.html';
    });
  }
});