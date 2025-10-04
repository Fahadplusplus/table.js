function validateForm() {
  let returnVal = true;



  if (fullName.value.trim().length < 3 || !/^[A-Za-z\s]+$/.test(fullName.value.trim()) || fullName.value.trim().length > 15) {
    setError("input1", "Enter a valid name");
    returnVal = false;
  }


  if (position.value.trim().length < 3 || !/^[A-Za-z\s]+$/.test(position.value.trim()) || position.value.trim().length > 15) {
    setError("input2", "Enter a valid position");
    returnVal = false;
  }


  if (office.value.trim().length < 3) {
    setError("input3", "Enter a valid office name");
    returnVal = false;
  }


  if (!age.value || parseInt(age.value) < 18) {
    setError("input4", "Age must be 18 or older");
    returnVal = false;
  }
 

  return returnVal;
}


function setError(id, msg) {
  const Element = document.getElementById(id);
  const errorMsg = Element.querySelector(".errorMsg")

  errorMsg.textContent = msg

}
function clearErrors() {
  const errors = document.querySelectorAll(".errorMsg");
  errors.forEach(el => el.textContent = "");
}

function EvalidateForm() {
  let returnVal = true;



  if (fullName.value.trim().length < 3 || !/^[A-Za-z\s]+$/.test(fullName.value.trim()) || fullName.value.trim().length > 15) {
    setError("Einput1", "Enter a valid name");
    returnVal = false;
  }


  if (position.value.trim().length < 3 || !/^[A-Za-z\s]+$/.test(position.value.trim()) || position.value.trim().length > 15) {
    setError("Einput2", "Enter a valid position");
    returnVal = false;
  }


  if (office.value.trim().length < 3) {
    setError("Einput3", "Enter a valid office name");
    returnVal = false;
  }


  if (!age.value || parseInt(age.value) < 18) {
    setError("Einput4", "Age must be 18 or older");
    returnVal = false;
  }


  return returnVal;
}