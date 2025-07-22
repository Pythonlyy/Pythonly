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

  // 🔹 Loop Last 4 Seconds of the Active Video Banner
  const desktopVideo = document.getElementById("introVideoDesktop");
  const mobileVideo = document.getElementById("introVideoMobile");

  const isMobile = window.innerWidth <= 768;
  const activeVideo = isMobile ? mobileVideo : desktopVideo;

  if (activeVideo) {
    let shouldLoopTail = false;

    activeVideo.addEventListener("ended", () => {
      shouldLoopTail = true;
      activeVideo.currentTime = activeVideo.duration - 23;
      activeVideo.play();
    });

    activeVideo.addEventListener("timeupdate", () => {
      if (shouldLoopTail && activeVideo.currentTime >= activeVideo.duration - 0.1) {
        activeVideo.currentTime = activeVideo.duration - 23;
        activeVideo.play();
      }
    });
  }
});
