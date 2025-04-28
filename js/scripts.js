

// Display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Nav Toggle
const navToggle = document.querySelector(".nav-toggle");
console.log(navToggle)
const navLinksContainer = document.querySelector(".nav-links");
console.log(navLinksContainer)

navToggle.addEventListener("click", () => {
  console.log('2')
  navLinksContainer.classList.toggle("open");
});

// Get the current URL path
const currentPath = window.location.pathname;

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through links and add the active class to the matching link
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

import {reviews} from '../data/reviews.js';
console.log("hello")
console.log(reviews)

// Fetch and Display Reviews from JSON
const container = document.getElementById("reviews-container");

    reviews.forEach((review) => {
      // Create a div for each review
      const reviewDiv = document.createElement("div");
      reviewDiv.className = "review-card";

      // Build star rating (★ for filled, ☆ for empty)
      let starRating = "";
      for (let i = 0; i < 5; i++) {
        starRating += i < review.rating ? "★" : "☆";
      }

      reviewDiv.innerHTML = `
        <h3>${review.name}</h3>
        <p class="rating">${starRating}</p>
        <p class="comment">"${review.comment}"</p>
      `;

      container.appendChild(reviewDiv);
    });
  
  
