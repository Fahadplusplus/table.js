const tb = document.getElementById("tableBody");

function addRows(jsonObj) {
  jsonObj.forEach((element, index) => {
    
    const tdata = document.createElement("tr");
    const editBtn = document.createElement("img");
    const deleteBtn = document.createElement("img");

    
    tdata.classList.add("data-row");

    

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    

    cell5.appendChild(editBtn);
    cell5.appendChild(deleteBtn);

    

    cell1.innerText = element.fullname;
    cell1.style.padding = "8px";

    cell2.innerText = element.position;
    cell2.style.padding = "8px";

    cell3.innerText = element.office;
    cell3.style.padding = "8px";

    cell4.innerText = element.age;
    cell4.style.padding = "8px";
    cell4.style.textAlign = "end";

    editBtn.src = "asset/pen-to-square-regular-full.svg";
    editBtn.classList.add("editButton","h-10");
    editBtn.setAttribute("data-index", index);

    deleteBtn.src = "asset/trash-solid-full.svg";
    deleteBtn.classList.add("deleteBtn","h-10" );
    deleteBtn.setAttribute("data-index", index);

    cell5.classList.add("flex", "justify-center", "items-center");

   

    tdata.appendChild(cell1);
    tdata.appendChild(cell2);
    tdata.appendChild(cell3);
    tdata.appendChild(cell4);
    tdata.appendChild(cell5);

   
   

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();

      let userChoice = confirm("Do you want to proceed?");

      if (userChoice) {
        console.log("User wants to proceed.");

        jsonObj.splice(index, 1);

        const row = e.target.closest("tr");
        row.remove();

        const detailsRow = row.nextElementSibling;
        if (detailsRow) {
          detailsRow.remove();
        }
        localStorage.setItem("tableData", JSON.stringify(jsonObj));
        tb.innerHTML = "";
        addRows(jsonObj);
        
      } else {
      }
    });


 

    tb.appendChild(tdata);
 
  
    
  });
   
  
}

addRows(jsonObj);
