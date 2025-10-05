const selectElement = document.getElementById("sel");
const pageDetails = document.getElementById("pagination-details");

let records_per_page = 10;
let currentPage = 1;
let total_pages = 1;

const total_record = document.querySelectorAll("#tableBody tr").length   ;
total_pages = Math.ceil(total_record / records_per_page ); 

displayRecords(currentPage);
genPage();

function displayRecords(page_number) {
  const allRows = document.querySelectorAll("#tableBody tr");
  const rowsPerPage = records_per_page;

  const start = (page_number - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  allRows.forEach((row, index) => {
    row.style.display = (index >= start && index < end) ? "" : "none";
  });
}

function genPage() {
  const paginationContainer = document.getElementById("pagination-btns");

  let preBtn = `<a href="#" id="prevBtn" class="px-2 py-1 border rounded hover:bg-slate-500">&#60;</a>`;
  let nextBtn = `<a href="#" id="nextBtn" class="px-2 py-1 border rounded hover:bg-slate-500">&#62;</a>`;

  let buttons = "";
  for (let i = 1; i <= total_pages; i++) {
    buttons += `<a href="#" class="page-btn px-2 py-1 border rounded hover:bg-slate-500 ${i === currentPage ? "bg-blue-500 text-black" : ""}" data-page="${i}">${i}</a>`;
  }

  paginationContainer.innerHTML = `${preBtn}${buttons}${nextBtn}`;

  document.querySelectorAll(".page-btn").forEach((btn) => {
    
    btn.addEventListener("click", (e) => {
      
      e.preventDefault();
      currentPage = parseInt(btn.dataset.page);
      displayRecords(currentPage);
      genPage();
      pageDetails.innerHTML = `showing ${(currentPage - 1) * records_per_page + 1 } to ${Math.min(currentPage * records_per_page, total_record)} of ${total_record }`;
    });
  });

  document.getElementById("prevBtn").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayRecords(currentPage);
      genPage();
       pageDetails.innerHTML = `showing ${(currentPage - 1) * records_per_page + 1 } to ${Math.min(currentPage * records_per_page, total_record)} of ${total_record }`;
    }
  });

  document.getElementById("nextBtn").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < total_pages) {
      currentPage++;
      displayRecords(currentPage);
      genPage();
       pageDetails.innerHTML = `showing ${(currentPage - 1) * records_per_page + 1 } to ${Math.min(currentPage * records_per_page, total_record)} of ${total_record }`;
    }
  });
}

selectElement.addEventListener('change', (event) => {
  let selectedValue = event.target.value;

  if (selectedValue < total_record){
     records_per_page = selectedValue;
  
  const total_record = document.querySelectorAll("#tableBody tr").length;
  total_pages = Math.ceil(total_record / records_per_page ); 
  displayRecords(currentPage);
  genPage();
  
  pageDetails.innerHTML = `showing ${(currentPage - 1) * records_per_page + 1 } to ${Math.min(currentPage * records_per_page, total_record)} of ${total_record }`;

  }
 
});

pageDetails.innerHTML = `showing 1 to ${Math.min(records_per_page, total_record)} of ${total_record}`;
