let cart = [];

function showToast(message, type = "info") {

  const toast = document.getElementById("toast");

  toast.innerHTML = message;
  toast.className = "toast show " + type;

  setTimeout(() => {
    toast.className = "toast";
  }, 2500);

}

function addToCart(name, price) {
  cart.push({name, price});
  showToast("✅ " + name + " added to cart", "success");
}

function showCart() {
  if (cart.length === 0) {
    showToast("🛒 Your cart is empty", "error");
    return;
  }

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
  if (cart.length === 0) {
    showToast("🛒 Your cart is empty", "error");
    return;
  }

  let table = document.getElementById("tableNumber").value;

  if (table === "") {
    showToast("⚠ Please enter your table number", "error");
    return;
  }

  showToast("🎉 Order placed successfully! Table " + table, "success");

  cart = [];
  displayCart();
  document.getElementById("cartSection").style.display = "none";
  document.getElementById("tableNumber").value = "";
}

}
