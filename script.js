const form = document.getElementById("form");
const itemList = document.getElementById("list-expense");
fetchDataFromStorage();
form.addEventListener("submit", addItems);

function addItems(e) {
  e.preventDefault();
  const expenseAmount = document.getElementById("expenseAmount").value;
  const expenseDesc = document.getElementById("expenseDesc").value;
  const expenseCategory = document.getElementById("expenseSelect").value;
  // console.log(expenseAmount + " " + expenseDesc + " " + expenseCategory);

  // Get input value
  let newItem = expenseAmount;
  let newItemDesc = expenseDesc;
  let newItemCategory = expenseCategory;

  // Create new li element
  let li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" " + newItemDesc));
  li.appendChild(document.createTextNode(" " + newItemCategory));

  // Create del button element
  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm mr-3";
  editBtn.className = "btn btn-primary btn-sm";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("Delete"));
  editBtn.appendChild(document.createTextNode("Edit"));

  //Edit button clicked
  editBtn.addEventListener("click", function () {
    document.getElementById("expenseAmount").value = expenseAmount;
    document.getElementById("expenseDesc").value = expenseDesc;
    document.getElementById("expenseSelect").value = expenseCategory;
    localStorage.removeItem(expenseAmount + "$" + expenseDesc);
    itemList.removeChild(this.parentElement);
  });

  deleteBtn.addEventListener("click", function () {
    if (confirm("Do you want to delete expense?")) {
      localStorage.removeItem(expenseAmount + "$" + expenseDesc);
      itemList.removeChild(this.parentElement);
    }
  });
  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);

  const userObj = {
    expenseAmount,
    expenseCategory,
    expenseDesc,
  };

  localStorage.setItem(
    expenseAmount + "$" + expenseDesc,
    JSON.stringify(userObj)
  );
}

function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return values;
}

function fetchDataFromStorage() {
  const allExpenses = allStorage();

  for (const exp of allExpenses) {
    let newItem = exp.expenseAmount;
    let newItemDesc = exp.expenseDesc;
    let newItemCategory = exp.expenseCategory;

    // Create new li element
    let li = document.createElement("li");
    // Add class
    li.className = "list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + newItemDesc));
    li.appendChild(document.createTextNode(" " + newItemCategory));

    // Create del button element
    var deleteBtn = document.createElement("button");
    var editBtn = document.createElement("button");

    // Add classes to del button
    deleteBtn.className = "btn btn-danger btn-sm";
    editBtn.className = "btn btn-primary btn-sm";

    // Append text node
    deleteBtn.appendChild(document.createTextNode("Delete"));
    editBtn.appendChild(document.createTextNode("Edit"));

    //Edit button clicked
    editBtn.addEventListener("click", function () {
      document.getElementById("expenseAmount").value = exp.expenseAmount;
      document.getElementById("expenseDesc").value = exp.expenseDesc;
      document.getElementById("expenseSelect").value = exp.expenseCategory;
      localStorage.removeItem(exp.expenseAmount + "$" + exp.expenseDesc);
      itemList.removeChild(this.parentElement);
    });
    //When delete btn is clicked
    deleteBtn.addEventListener("click", function () {
      if (confirm("Do you want to delete expense?")) {
        localStorage.removeItem(exp.expenseAmount + "$" + exp.expenseDesc);
        itemList.removeChild(this.parentElement);
      }
    });

    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    // Append li to list
    itemList.appendChild(li);
  }
}
