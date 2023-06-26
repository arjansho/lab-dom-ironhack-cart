good job, but for creating a new product you need to select some DOM element that exists to be able to append some new HTML code to it, and in your case, there is not any element with id="product-list"

another way to do it would be creating each element separately and appending all of them, for example something like:


function createProduct() {
  const inputProduct = document.querySelector(".create-product input");
  const inputPrice = document.querySelector(
    ".create-product input[type='number']"
  );
  const productName = inputProduct.value;
  const productPrice = inputPrice.value;

  const tr = document.createElement("tr");
  tr.className = "product";

  const nameTd = document.createElement("td");
  nameTd.className = "name";

  const priceTd = document.createElement("td");
  priceTd.className = "price";
  priceTd.innerText = "$";

  const quantityTd = document.createElement("td");
  quantityTd.className = "quantity";

  const subtotalTd = document.createElement("td");
  subtotalTd.className = "subtotal";
  subtotalTd.innerText = "$";

  const actionTd = document.createElement("td");
  actionTd.className = "action";

  const nameSpan = document.createElement("span");
  nameSpan.innerText = productName;
  nameTd.appendChild(nameSpan);

  const priceSpan = document.createElement("span");
  priceSpan.innerText = productPrice;
  priceTd.appendChild(priceSpan);

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = "0";
  quantityInput.min = "0";
  quantityInput.placeholder = "Quantity";
  quantityTd.appendChild(quantityInput);

  const subtotalSpan = document.createElement("span");
  subtotalSpan.innerText = "0";
  subtotalTd.appendChild(subtotalSpan);

  const removeButton = document.createElement("button");
  removeButton.className = "btn btn-remove";
  removeButton.innerText = "Remove";
  actionTd.appendChild(removeButton);

  tr.appendChild(nameTd);
  tr.appendChild(priceTd);
  tr.appendChild(quantityTd);
  tr.appendChild(subtotalTd);
  tr.appendChild(actionTd);

  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.appendChild(tr);

  inputProduct.value = "";
  inputPrice.value = "0";
}
