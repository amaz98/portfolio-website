const section = document.querySelectorAll(".section");
const parentBtns = document.querySelectorAll(".controls");
const individualBtns = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  for (let i = 0; i < individualBtns.length; i++) {
    console.log("loop");
    //  once a new button is clicked call this function
    individualBtns[i].addEventListener("click", function () {
      //  get the current button that was set as the 'active button'
      let currentBtn = document.querySelectorAll(".active-btn");
      // remove it's active-btn class
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      // add active-btn to button that was clicked
      this.className += " active-btn";
    });
  }

  allSections.addEventListener("click", (e) => {
    // if button is clicked then this id will be assigned to the data-id of the button
    // if a button isn't clicked then the id variable will be null
    const id = e.target.dataset.id;
    // check if id has a value or not
    if (id) {
      individualBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      //add active class to button that was clicked
      e.target.classList.add("active");
      //hide other sections
      section.forEach((sec) => {
        sec.classList.remove("active");
      });
      //this is getting the section that corresponds with the button
      // section's id = buttons data-id
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransitions();
