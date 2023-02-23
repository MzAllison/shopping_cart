const cartList = document.getElementById("cartList");
const totalPrice = document.getElementById("totalPrice");

// Add event listeners to the buttons in the cart
cartList.addEventListener("click", function (event) {
  if (event.target.classList.contains("decrease-quantity")) {
    decreaseQuantity(event.target);
  } else if (event.target.classList.contains("increase-quantity")) {
    increaseQuantity(event.target);
  } else if (event.target.classList.contains("remove-item")) {
    removeItem(event.target);
  } else if (event.target.classList.contains("like-item")) {
    likeItem(event.target);
  }
});

function decreaseQuantity(button) {
  const listItem = button.parentNode.parentNode;
  const quantity = listItem.querySelector(".item-quantity");
  const price = listItem.querySelector(".item-price");
  const itemPrice = parseFloat(price.innerText.slice(1));
  let itemQuantity = parseInt(quantity.innerText);
  if (itemQuantity > 1) {
    itemQuantity--;
    quantity.innerText = itemQuantity;
    price.innerText = "$" + (itemQuantity * itemPrice).toFixed(2);
    updateTotalPrice();
  }
}

function increaseQuantity(button) {
  const listItem = button.parentNode.parentNode;
  const quantity = listItem.querySelector(".item-quantity");
  const price = listItem.querySelector(".item-price");
  const itemPrice = parseFloat(price.innerText.slice(1));
  let itemQuantity = parseInt(quantity.innerText);
  itemQuantity++;
  quantity.innerText = itemQuantity;
  price.innerText = "$" + (itemQuantity * itemPrice).toFixed(2);
  updateTotalPrice();
}
    
    function removeItem(button) {
    const listItem = button.parentNode;
    listItem.remove();
    updateTotalPrice();
    }
    
    function likeItem(button) {
    button.classList.toggle("active");
    }
    
    function updateTotalPrice() {
    const items = cartList.querySelectorAll("li");
    let total = 0;
    items.forEach(function (item) {
    const quantity = item.querySelector(".item-quantity");
    const price = item.querySelector(".item-price");
    const itemPrice = parseFloat(price.innerText.slice(1));
    const itemQuantity = parseInt(quantity.innerText);
    total += itemPrice * itemQuantity;
    });
    totalPrice.innerText = "Total Price: $" + total.toFixed(2);
    }
    
    updateTotalPrice();
