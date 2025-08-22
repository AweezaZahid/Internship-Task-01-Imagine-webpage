document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".testimonial-wrapper");
    const testimonials = document.querySelectorAll(".testimonial");
    const dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;
    let interval;

    // Create navigation dots dynamically
    testimonials.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
            goToSlide(index);
            resetAutoSlide();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function goToSlide(index) {
        wrapper.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        goToSlide(currentIndex);
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 4000); // 4 seconds per slide
    }

    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    // Initialize carousel
    goToSlide(0);
    startAutoSlide();
});
