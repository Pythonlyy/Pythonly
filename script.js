function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Filter Buttons for Project Categories
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.getAttribute("data-category");

      projectCards.forEach(card => {
        const categories = card.getAttribute("data-category").split(" ");
        const isVisible =
          selectedCategory === "all" || categories.includes(selectedCategory);

        card.style.display = isVisible ? "block" : "none";
      });
    });
  });

  // 🔹 Loop Last 4 Seconds of Video Banner
  const video = document.getElementById("introVideoDesktop");

  if (video) {
    let shouldLoopTail = false;

    video.addEventListener("ended", () => {
      shouldLoopTail = true;
      video.currentTime = video.duration - 23;
      video.play();
    });

    video.addEventListener("timeupdate", () => {
      if (shouldLoopTail && video.currentTime >= video.duration - 0.1) {
        video.currentTime = video.duration - 23;
        video.play();
      }
    });
  }
});
