const divElement = document.querySelector(".col-md-8");

//create the table
const table = document.createElement("table");
table.className = "table table-striped";

//load json payload
fetch("data/tableEntries.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("issue occurred");
    }
    return response.json();
  })
  .then((data) => {
    //retrieve the values from the json payload
    const singerTableHeader = data.singerHeaders;
    const singerTableValues = data.singers;

    //create the header of the table
    createTableHeader(singerTableHeader);

    //create the body of the table
    createTableBody(singerTableValues);

    //insert into the div - class col-md-8 (only after table populated)
    divElement.appendChild(table);
  })
  .catch((error) =>
    console.error("error loading the json payload from filesystem", error)
  );

function createTableHeader(singerTableHeader) {
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

function createTableBody(singerTableValues) {
  //create the body elements
  const tBody = document.createElement("tbody");

  singerTableValues.forEach((bodyRowValue) => {
    const valueRow = document.createElement("tr");
    bodyRowValue.forEach((cell) => {
      const valueCell = document.createElement("td");
      valueCell.textContent = cell;
      valueRow.appendChild(valueCell);
    });
    tBody.appendChild(valueRow);
  });

  table.appendChild(tBody);
}
