const main = document.getElementById("Main");
const body = document.getElementById("Body");
const btn = document.getElementById("ADD");
const modal = document.getElementById("Modal");
const mbtn = document.getElementById("Mbtn");
const tableCon = document.getElementById("TableCon");
const hiddendata = document.getElementById("hiddentableData");

const submit = document.getElementById("Submit");
const screen = document.getElementById("mainscreen");
const table = document.getElementById("tableBody");
const dataTable = document.getElementById("dataTable");
const search = document.getElementById("Search");
const dmain = document.getElementById("DMain")
const dbtn = document.getElementById("Dbtn");
const confirmdelete = document.getElementById("confirmDelete")



main.classList.add("hidden")
dmain.classList.add("hidden")
const id = document.getElementById("Id");
const fullName = document.getElementById("Name");
const position = document.getElementById("Position");
const office = document.getElementById("Office");
const age = document.getElementById("Age");
const Sdate = document.getElementById("startDate");
const salary = document.getElementById("Salary");

function formdata() {
  jsonObj.push({
    Id: id.value,
    fullname: fullName.value.charAt(0).toUpperCase() + fullName.value.slice(1),
    position: position.value,
    office: office.value,
    age: age.value,
   
    
  });
    localStorage.setItem("tableData", JSON.stringify(jsonObj));
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation()

  const isValid = validateForm();

  if (isValid) {
    formdata();
    tb.innerHTML = "";
    addRows(jsonObj);
   clearErrors();
     clearform();
    main.classList.add("hidden")
    
  }
});

btn.addEventListener("click", (e) => {
  main.classList.remove("hidden");

  main.style.backgroundColor = "rgba(000, 0, 0, 0.5)";

  body.classList.add("overflow-hidden");
});

mbtn.addEventListener("click", () => {
  clearErrors();
     clearform();
  main.classList.add("hidden");

  tableCon.classList.remove("hidden");
  body.classList.remove("overflow-hidden");
});



function clearform() {
  fullName.value = "";
  position.value = "";
  office.value = "";
  age.value = "";
  
}

search.addEventListener("input", () => {
  let inputData = search.value.toLowerCase();
  if (inputData != "") {
    let rows = document.querySelectorAll(".data-row");

    rows.forEach((row) => {
      const text = row.innerText.toLowerCase();
      
      const match = text.includes(inputData.toLowerCase());

      if (match) {
        row.style.display = "";
      
      } else {
        row.style.display = "none";
        
      }
    });
  }
  else{
    displayRecords(currentPage);
    genPage();
  }
});

const exportBtn = document.getElementById("export").addEventListener('click',()=>{

     
    const tablee = document.getElementById('dataTable');
    const workbook = XLSX.utils.table_to_book(tablee);
    XLSX.writeFile(workbook, 'exported_data.csv'); 

})



new Sortable(table, {
    animation: 150,
    ghostClass: 'blue-background-class'
    
    
});


 

