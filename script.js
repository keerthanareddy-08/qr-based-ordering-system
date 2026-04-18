let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  alert(name + " added to cart");
}

function showCart() {
  document.getElementById("cartSection").style.display = "block";
  displayCart();
  window.scrollTo(0, document.body.scrollHeight);
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    let div = document.createElement("div");
    div.innerHTML = `
      ${item.name} - ₹${item.price} 
      <span class="remove" onclick="removeItem(${index})">Remove</span>
    `;

    cartItems.appendChild(div);
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

function placeOrder() {
  let table = document.getElementById("tableNumber").value;

  if(table === "") {
    alert("Please enter table number");
    return;
  }

  alert("Order placed successfully for Table " + table);
  cart = [];
  displayCart();
}