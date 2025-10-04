const img = document.getElementById("nameImg");
const img1 = document.getElementById("nameImg1");
const img2 = document.getElementById("nameImg2");
const posimg = document.getElementById("posImg");
const posimg1 = document.getElementById("posImg1");
const posimg2 = document.getElementById("posImg2");
const offimg = document.getElementById("offImg");
const offimg1 = document.getElementById("offImg1");
const offimg2 = document.getElementById("offImg2");
const ageimg = document.getElementById("ageImg");
const ageimg1 = document.getElementById("ageImg1");
const ageimg2 = document.getElementById("ageImg2");

img.addEventListener("click", () => {
  img.classList.add("hidden");
  img2.classList.remove("hidden");

  sortByName(0, false);
});
img1.addEventListener("click", () => {
  img1.classList.add("hidden");
  img2.classList.remove("hidden");

  sortByName(0, false);
});
img2.addEventListener("click", () => {
  img1.classList.remove("hidden");
  img2.classList.add("hidden");

  sortByName(0);
});

function sortByName(column, asc = true) {
  const modifier = asc ? 1 : -1;
  let tbody = dataTable.tBodies[0];

  let dataRows = Array.from(tbody.querySelectorAll("tr"));

  const sottedRows = dataRows.sort((a, b) => {
    const aText = a.cells[column].textContent.trim();
    const bText = b.cells[column].textContent.trim();

    return aText > bText ? 1 * modifier : -1 * modifier;
  });

  while (tbody.firstchild) {
    tbody.removeChild(tbody.firstchild);
  }
  tbody.append(...sottedRows);
}





posimg.addEventListener("click", () => {
  posimg.classList.add("hidden");
  posimg1.classList.remove("hidden");
  sortByName(1, false);
  iconToggelByPosition()
});
posimg1.addEventListener("click", () => {
  posimg.classList.add("hidden");
  posimg1.classList.add("hidden");
  posimg2.classList.remove("hidden");
  sortByName(1, false);
  iconToggelByPosition()
});
posimg2.addEventListener("click", () => {
  posimg.classList.add("hidden");
  posimg2.classList.add("hidden");
  posimg1.classList.remove("hidden");
  sortByName(1);
  iconToggelByPosition()

});



offimg.addEventListener("click", () => {
  offimg.classList.add("hidden");
  offimg1.classList.remove("hidden");
  sortByName(2, false);
  iconToggelByoffice()
});
offimg1.addEventListener("click", () => {
  offimg.classList.add("hidden");
  offimg1.classList.add("hidden");
  offimg2.classList.remove("hidden");
  sortByName(2, false);
  iconToggelByoffice()
});
offimg2.addEventListener("click", () => {
  offimg.classList.add("hidden");
  offimg2.classList.add("hidden");
  offimg1.classList.remove("hidden");
  sortByName(2);
  iconToggelByoffice()
});



ageimg.addEventListener("click", () => {
  ageimg.classList.add("hidden");
  ageimg1.classList.remove("hidden");
  sortByName(3, false);
  iconToggelByAge()
});
ageimg1.addEventListener("click", () => {
  ageimg.classList.add("hidden");
  ageimg1.classList.add("hidden");
  ageimg2.classList.remove("hidden");
  sortByName(3, false);
  iconToggelByAge()
});
ageimg2.addEventListener("click", () => {
  ageimg.classList.add("hidden");
  ageimg2.classList.add("hidden");
  ageimg1.classList.remove("hidden");
  sortByName(3);
  iconToggelByAge()
});

function iconToggelByName(){
    posimg.classList.remove("hidden");
    posimg1.classList.add("hidden");
    posimg2.classList.add("hidden");
    offimg.classList.remove("hidden");
    offimg1.classList.add("hidden");
    offimg2.classList.add("hidden");
    ageimg.classList.remove("hidden");
    ageimg1.classList.add("hidden");
    ageimg2.classList.add("hidden");

}
function iconToggelByPosition(){
    img.classList.remove("hidden");
    img1.classList.add("hidden");
    img2.classList.add("hidden");
    offimg.classList.remove("hidden");
    offimg1.classList.add("hidden");
    offimg2.classList.add("hidden");
    ageimg.classList.remove("hidden");
    ageimg1.classList.add("hidden");
    ageimg2.classList.add("hidden");

}
function iconToggelByoffice(){
    posimg.classList.remove("hidden");
    posimg1.classList.add("hidden");
    posimg2.classList.add("hidden");
   img.classList.remove("hidden");
    img1.classList.add("hidden");
    img2.classList.add("hidden");
    ageimg.classList.remove("hidden");
    ageimg1.classList.add("hidden");
    ageimg2.classList.add("hidden");

}
function iconToggelByAge(){
    posimg.classList.remove("hidden");
    posimg1.classList.add("hidden");
    posimg2.classList.add("hidden");
    offimg.classList.remove("hidden");
    offimg1.classList.add("hidden");
    offimg2.classList.add("hidden");
    img.classList.remove("hidden");
    img1.classList.add("hidden");
    img2.classList.add("hidden");

}
