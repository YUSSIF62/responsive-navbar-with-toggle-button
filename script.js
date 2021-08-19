const btn = document.getElementById("toggler-btn");
const navlist = document.getElementById("navbar-lists");

const hideNavbar = () => {
  if (navlist.classList == "navbar-lists") {
    navlist.classList.add("show-navbar-list");
  } else {
    navlist.classList.remove("show-navbar-list");
  }
};
