const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const icon = document.getElementById("menuToggleIcon");
const closeSidebar = document.getElementById("closeSidebar");

// Toggle sidebar from menu icon
menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("show");

  // Swap icon
  if (sidebar.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close sidebar using X icon inside it
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("show");
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");
});
