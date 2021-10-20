const start = () => {
  let isOpen = false;

  document.getElementById("menu").addEventListener("click", () => {
    if (isOpen) {
      document.getElementById("nav-menu").style.display = "none";
      isOpen = false;
    } else {
      document.getElementById("nav-menu").style.display = "block";
      isOpen = true;
    }
  });
};

window.onload(start())