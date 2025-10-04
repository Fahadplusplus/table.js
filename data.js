let jsonObj = [];

const savedData = localStorage.getItem("tableData");

if (savedData == false) {
  jsonObj = JSON.parse(savedData);
} else {
  jsonObj = [
    { fullname: "John Doe", position: "Manager", office: "NY", age: 30 },

    {
      fullname: "Fahad A",
      position: "CEO",
      office: "London",
      age: 22,
    },
    {
      fullname: "ali B",
      position: "intern",
      office: "karachi",
      age: 23,
    },
    {
      fullname: "hassan",
      position: "manager",
      office: "rome",
      age: 28,
    },
    {
      fullname: "talha",
      position: "programer",
      office: "New York",
      age: 26,
    },
    {
      fullname: "zara",
      position: "CTO",
      office: "New York",
      age: 50,
    },
  ];

  localStorage.setItem("tableData", JSON.stringify(jsonObj));
}
