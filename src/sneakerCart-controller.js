const { writeJSONFile, readJSONFile } = require("./helpers");
const sneakerCart = readJSONFile("./data", "shopping-cart.json")

function getInventory() {
    const purchases = readJSONFile("./data", "inventory-data.json");
    return purchases
}

function getCartPurchases () {
    const cartPurchases = readJSONFile("./data", "shopping-cart.json")
    console.log(cartPurchases)
    return cartPurchases
    
}

function addToCart(productId, purchaseQuantity) {
    const cart = getInventory ();
    const purchases = cart.find((purchase) => purchase.id === productId);
    if (purchases.inStock) {
      const sneakerCart = getCartPurchases();
      const newCartProduct = {
        name: purchases.name,
        amount: purchaseQuantity,
        // total: sneakerCart[0].priceInCents * purchaseQuantity,
      };
      cart.push(newCartProduct);
      writeJSONFile("./data", "shopping-cart.json");
      return sneakerCart;
    } else {
        return "Product does not exist or is no longer available"
    }
  };

  function emptyCart(){

  }

  function showTotalPrice(){

  }

  module.exports = {
    addToCart,
    emptyCart,
    showTotalPrice,
  }