const btnCollapse = document.querySelector(".btn-collapse");
const main = document.querySelector("main");

btnCollapse.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("collapsed");
  main.classList.toggle("sidebar-collapsed");
  //rotate the icon svg
  document.querySelector(".btn-collapse svg").classList.toggle("rotate");
});
