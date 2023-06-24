// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").innerText);
  const quantity = Number(product.querySelector(".quantity input").value);
  const subtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  const testElements = document.getElementsByClassName('product');
  let total = 0
  for (let i = 0; i < testElements.length; i++) {
      total += updateSubtotal(testElements[i])
  }
  let totalNumber = document.querySelector('#total-value span')
  totalNumber.innerHTML = total
  console.log(totalNumber)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const buttonHolder = target.parentElement;
  const productToBeRemoved = buttonHolder.parentElement;
  productToBeRemoved.parentElement.removeChild(productToBeRemoved);

  
}

// ITERATION 5   I have tried to fix the following section but still I am not able to run it. It cannot add the new product. I am missing something.
// Please at the review by your side can you help and explain what is the issue. Thank you.

function createProduct(createProduct) {
  const newProductName = document.getElementById("new-product-name");
  const newProductPrice = document.getElementById("new-product-price");

  const productList = document.getElementById("product-list");
  productList.innerHTML += `<tr class="create-product">
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  newProductName.value = "";
  newProductPrice.value = 0;
  addRemoveEvent();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  addRemoveEvent();
  const addButton = document.getElementById("create");
  addButton.onclick = createProduct;
});

function addRemoveEvent() {
  const removeButtons = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].onclick = removeProduct;
  }
}