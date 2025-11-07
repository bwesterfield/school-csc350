const divElement = document.querySelector(".col-md-8");

//create the table
const table = document.createElement("table");
table.className = "table table-striped";

//create the header of the table
createTableHeader();

//create the body of the table
createTableBody();

//insert into the div - class col-md-8
divElement.appendChild(table);

function createTableHeader() {
  const singerTableHeader = ["Singers", "DOB", "Best Songs"];

  //create the header elements
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  //populate the header values -->
  singerTableHeader.forEach((header) => {
    const tableHeader = document.createElement("th");
    tableHeader.textContent = header;
    headerRow.appendChild(tableHeader);
  });

  //add the thead and header row elements to the created table element
  thead.appendChild(headerRow);
  table.appendChild(thead);
}

function createTableBody() {
  const singerTableValues = [
    ["Prince", "June 7, 1958", "Purple Rain"],
    ["Michael Jackson", "August 29, 1958", "Billie Jean"],
    ["Elvis Presley", "January 8, 1935", "Can't Help Falling in Love"],
    ["Taylor Swift", "December 13, 1989", "Shake It Off"],
    ["Freddie Mercury", "September 5, 1946", "Bohemian Rhapsody"],
    ["Madonna", "August 16, 1958", "Like a Prayer"],
    ["Elton John", "March 25, 1947", "Rocket Man"],
  ];

  //create the body elements
  const tBody = document.createElement("tbody");

  singerTableValues.forEach((bodyValue) => {
    const valueRow = document.createElement("tr");
    bodyValue.forEach((cell) => {
      const valueCell = document.createElement("td");
      valueCell.textContent = cell;
      valueRow.appendChild(valueCell);
    });
    tBody.appendChild(valueRow);
  });

  table.appendChild(tBody);
}
