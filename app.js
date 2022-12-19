const hideMenu = document.querySelector("#check");
const list = document.querySelector("#displayMenu");

hideMenu.addEventListener("change", (e) => {
  if (hideMenu.checked) {
    list.style.display = "initial";
  } else {
    list.style.display = "none";
  }
});
