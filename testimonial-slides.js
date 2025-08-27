const testimonials = document.querySelectorAll(".testimonial-wrapper .testimonial");
const dotsContainer = document.querySelector(".dots");

// Generate dots dynamically based on number of testimonials
testimonials.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    currentIndex = i;
    showTestimonial(currentIndex);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots .dot");
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

// Auto-slide (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 3000);

