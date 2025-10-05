let jsonObj = [];

const savedData = localStorage.getItem("tableData");

if (savedData == false) {
  jsonObj = JSON.parse(savedData);
} else {
  jsonObj = [
    {Id:"001", fullname: "John Doe", position: "Manager", office: "NY", age: 30 },

  ];

  localStorage.setItem("tableData", JSON.stringify(jsonObj));
}
