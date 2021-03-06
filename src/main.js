import "./style.css";
import { renderBurgerMenu } from "./js/burger-menu.js";
import { renderCountdown } from "./js/countdown-section.js";
import { renderDarkMode } from "./js/darkmode-section.js";
import { renderPlans } from "./js/pricing-section.js";
import { renderTestimonials } from "./js/testimonials.js";
import { renderValidation } from "./js/validation.js";
import { renderLink } from "./js/get-link.js";
import { initModalToggling } from "./js/modal-window.js";
import { renderCloseBurgerMenu } from "./js/close-burger-menu.js";

renderBurgerMenu();
renderCloseBurgerMenu();
renderCountdown();
renderDarkMode();
renderTestimonials();
renderValidation();
renderPlans();
renderLink();
initModalToggling();
