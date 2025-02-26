import {reviews} from '../reviews.js';
console.log(reviews);

// Display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Nav Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Fetch and Display Reviews from JSON
fetch("./data/reviews.json")
  .then((response) => response.json())
  .then((reviews) => {
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
  })
  .catch((error) => {
    console.error("Error fetching reviews:", error);
  });
