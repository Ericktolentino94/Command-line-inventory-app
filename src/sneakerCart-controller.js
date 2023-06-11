const { writeJSONFile, readJSONFile } = require("./helpers");
const sneakerCart = readJSONFile(".", "data/shopping-cart.json")

function addToCart(purchases, sneakerCart, purchaseQuantity) {
    if (purchases[0].inStock) {
      const newCartProduct = {
        name: purchases.name,
        amount: purchaseQuantity,
        total: purchases[0].priceInCents * purchaseQuantity,
      };
      sneakerCart.push(newCartProduct);
      writeJSONFile("./data", "shopping-cart.json");
      return sneakerCart;
    }
  }

  function emptyCart(){

  }

  function showTotalPrice(){

  }

  module.exports = {
    addToCart,
    emptyCart,
    showTotalPrice,
  }