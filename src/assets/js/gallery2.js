class BeforeAfterSlider {
    constructor(sliderContainer) {
        this.sliderContainer = sliderContainer;
        this.sliderHandle = sliderContainer.querySelector(".slider-handle");
        this.sliderLine = sliderContainer.querySelector(".slider-line");
        this.beforeImage = sliderContainer.querySelector(".before-image");
        this.afterImage = sliderContainer.querySelector(".after-image");
        
        this.isDragging = false;
        
        this.initializeSlider();
        this.attachEventListeners();
    }

    // Function to initialize the slider at the center position
    initializeSlider() {
        // Set slider handle and line at center with a transition for initialization
        this.sliderHandle.style.transition = "left 0.3s ease";
        this.sliderLine.style.transition = "left 0.3s ease";

        this.sliderHandle.style.left = "50%";
        this.sliderLine.style.left = "50%";

        // Set both images' clip-path to 50% (center)
        this.beforeImage.style.clipPath = `inset(0 50% 0 0)`;
        this.afterImage.style.clipPath = `inset(0 0 0 50%)`;
    }

    // Function to move the slider based on user interaction
    moveSlider(clientX) {
        const containerRect = this.sliderContainer.getBoundingClientRect();
        let offsetX = clientX - containerRect.left;

        // Limit the slider movement within the full container width (0% to 100%)
        if (offsetX < 0) offsetX = 0; // Prevent overflow on the left
        if (offsetX > containerRect.width) offsetX = containerRect.width; // Prevent overflow on the right

        const percentage = Math.round((offsetX / containerRect.width) * 100);

        // Update the slider handle position and image clipping
        this.sliderHandle.style.left = `${percentage}%`;
        this.sliderLine.style.left = `${percentage}%`;

        // Adjust the clip-path for both images
        this.beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        this.afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    }

    startDragging() {
        this.isDragging = true;

        // Remove transitions while dragging for instant feedback
        this.sliderHandle.style.transition = "none";
        this.sliderLine.style.transition = "none";
    }

    stopDragging() {
        this.isDragging = false;

        // Reapply transitions after dragging ends
        this.sliderHandle.style.transition = "left 0.3s ease";
        this.sliderLine.style.transition = "left 0.3s ease";
    }

    attachEventListeners() {
        // Mouse events
        this.sliderHandle.addEventListener("mousedown", () => this.startDragging());
        this.sliderLine.addEventListener("mousedown", () => this.startDragging());

        document.addEventListener("mousemove", (event) => {
            if (this.isDragging) {
                this.moveSlider(event.clientX);
            }
        });

        document.addEventListener("mouseup", () => this.stopDragging());

        // Touch events for mobile
        this.sliderHandle.addEventListener("touchstart", (event) => {
            event.preventDefault();
            this.startDragging();
        });

        this.sliderLine.addEventListener("touchstart", (event) => {
            event.preventDefault();
            this.startDragging();
        });

        document.addEventListener("touchmove", (event) => {
            if (this.isDragging) {
                this.moveSlider(event.touches[0].clientX);
            }
        });

        document.addEventListener("touchend", () => this.stopDragging());
    }
}

// Initialize all sliders on page load
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider-container");
    
    sliders.forEach(slider => {
        new BeforeAfterSlider(slider);
    });
});
