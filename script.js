function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Set active class
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
});
