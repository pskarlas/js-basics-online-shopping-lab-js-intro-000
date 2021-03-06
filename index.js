// declare and Initialize an array: Cart
var cart = new Array();
// get Cart array
function getCart() {
  return cart;
}
// Adding an item with a price  to the cart
function addToCart(item) {
  var newItem = item;
  // assign an item (key) to object cart with a random price
  cart.push({[newItem]: Math.floor(Math.random() * 100)});
  // print out information for the user
  console.log(`${item} has been added to your cart.`);
  // return cart
  return cart;
}
// View the cart
function viewCart() {
  // Declare and Initialize a variable to hold msg
  var msg = "In your cart, you have ";
  // Declare and Initialize a variable to hold the last item
  if (cart.length > 0) {
  var lastItem = Object.keys(cart[cart.length - 1]) + " at $" + cart[cart.length - 1][Object.keys(cart[cart.length - 1])] + ".";
}
  function itemsInCart() {
    for (var i = 0; i < cart.length - 1; i++) {
      msg += Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])] + ", ";
    }
  }
  if (cart.length > 0) {
    itemsInCart();
    console.log(`${msg += lastItem}`);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {

  var foundIt = false;

  for (var i = 0; i < cart.length; i++ ) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, i+1);
      foundIt = true;
      return cart;
    }
  }
  if (foundIt === false) {
    console.log("That item is not in your cart.");
  }
}



function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];

  //var creditCardEmpty = cardNumber;
  //typeof creditCardEmpty !== 'undefined' ? console.log("We don't have a credit card on file for you to place your order.") :
  //console.log(`"Your total cost is $${total()}, which will be charged to the card ${cardNumber}."`);
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
