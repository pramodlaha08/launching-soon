// Text Animation
document.addEventListener("DOMContentLoaded", function () {
  // Set a fixed launch date (July 11, 2025 - 1 month from today)
  const launchDate = new Date("2025-08-26T00:00:00");

  // Countdown Timer
  function updateCountdown() {
    const currentDate = new Date();
    const difference = launchDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
    document.getElementById("hours").innerText =
      hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerText =
      minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerText =
      seconds < 10 ? `0${seconds}` : seconds;
  }

  // Update countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown();
  // Notification form submission
  const notifyForm = document.querySelector(".notify-form");
  const customNotification = document.getElementById("custom-notification");
  const notificationMessage = document.getElementById("notification-message");
  const notificationClose = document.getElementById("notification-close");

  // Function to show notification
  function showNotification(message) {
    notificationMessage.textContent = message;
    customNotification.classList.remove("notification-hidden");
    customNotification.classList.add("notification-visible");

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      hideNotification();
    }, 5000);
  }

  // Function to hide notification
  function hideNotification() {
    customNotification.classList.remove("notification-visible");
    customNotification.classList.add("notification-hidden");
  }

  // Close button event
  notificationClose.addEventListener("click", hideNotification);

  notifyForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value;

    // Show custom notification
    showNotification(`We'll notify ${email} when the site launches.`);

    // Clear the form
    this.reset();
  });

  // Add glowing effect to title on scroll
  window.addEventListener("scroll", function () {
    const title = document.querySelector(".title");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      title.style.textShadow =
        "0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(243, 111, 33, 0.6)";
    } else {
      title.style.textShadow = "0 0 15px rgba(255, 255, 255, 0.5)";
    }
  });

  // Add parallax effect to the illustration
  document.addEventListener("mousemove", function (e) {
    const illustration = document.querySelector(".construction-illustration");

    // Calculate mouse position as a percentage of the viewport
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight; // Apply transform to the illustration (subtle movement)
    illustration.style.transform = `translate(${mouseX * 20 - 10}px, ${
      mouseY * 20 - 10
    }px)`;
  });

  // Create bubbles animation
  const createBubbles = () => {
    const bubbleContainer = document.getElementById("bubbleContainer");
    const colors = [
      "rgba(255, 255, 255, 0.1)",
      "rgba(243, 111, 33, 0.1)",
      "rgba(0, 82, 156, 0.2)",
    ];

    // Create 30 bubbles
    for (let i = 0; i < 30; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Random size between 20px and 80px
      const size = Math.random() * 60 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Random horizontal position
      bubble.style.left = `${Math.random() * 100}%`;

      // Random animation duration between 10s and 25s
      const duration = Math.random() * 15 + 10;
      bubble.style.setProperty("--duration", `${duration}s`);

      // Random delay before animation starts
      bubble.style.animationDelay = `${Math.random() * 15}s`;

      // Random color from our colors array
      bubble.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      // Add bubble to container
      bubbleContainer.appendChild(bubble);
    }
  };

  // Initialize bubbles
  createBubbles();
});
