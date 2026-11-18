// Mobile navigation keliye toggle button aur nav links ko select karna
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuButton.textContent = isOpen ? "×" : "☰";
  });

  // Close the mobile menu after clicking a navigation link imp hai ye
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });
}

// Handle project preview iframe  ye bhi imp hai
document.querySelectorAll(".preview-shell iframe").forEach((frame) => {
  frame.addEventListener("error", () => {
    frame.closest(".preview-shell")?.classList.add("preview-error");
  });
});

// Update the copyright year automatically ye skip krskte 
const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}