const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  document.body.classList.add("menuOpen");
});

closeMenu.addEventListener("click", () => {
  document.body.classList.remove("menuOpen");
});

overlay.addEventListener("click", () => {
  document.body.classList.remove("menuOpen");
});






const contactBox = document.getElementById("contactBox");

if (contactBox) {
  contactBox.addEventListener("click", function () {
    window.location.href = "tel:+14230000000";
  });
}