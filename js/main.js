const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");

toggler.addEventListener('click', (e) => {
  navbar.classList.toggle("nav__expanded")
})


const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  // console.log(tab);
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});


const accordionHeaders = document.querySelectorAll(".accordion__header");
accordionHeaders.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("accordion__expanded");
  });
});

