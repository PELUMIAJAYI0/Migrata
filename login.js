/* JS - login.js */
window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  const container = document.getElementById("auth-container");

  setTimeout(() => {
    splash.style.display = "none";
    container.classList.remove("hidden");
    container.classList.add("show");
  }, 2500);

  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  const loginToggle = document.getElementById("login-toggle");
  const registerToggle = document.getElementById("register-toggle");

  const switchToRegister = document.getElementById("switch-to-register");
  const switchToLogin = document.getElementById("switch-to-login");

  loginToggle.addEventListener("click", () => {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    loginToggle.classList.add("active");
    registerToggle.classList.remove("active");
  });

  registerToggle.addEventListener("click", () => {
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
    registerToggle.classList.add("active");
    loginToggle.classList.remove("active");
  });

  switchToRegister.addEventListener("click", () => {
    registerToggle.click();
  });

  switchToLogin.addEventListener("click", () => {
    loginToggle.click();
  });
});
