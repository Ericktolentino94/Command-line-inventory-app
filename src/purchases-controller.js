const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");
// const sneakerCart = require("../data/shopping-cart.json");
const { writeJSONFile } = require("./helpers");

function create(purchases, purchaseName) {
  const purchase = {
    id: nanoid(4),
    name: purchaseName,
    priceInCents: faker.commerce.price(),
    inStock: true,
  };
  purchases.push(purchase);
  return purchases;
}

function index(purchases) {
  return purchases
    .map((purchase) => purchase.id + " " + purchase.name)
    .join("\n");
}

function show(purchases, purchaseId) {
  const foundPurchase = purchases.find(
    (purchase) => purchase.id === purchaseId
  );
  return (
    foundPurchase.id +
    " " +
    foundPurchase.name +
    " " +
    foundPurchase.priceInCents +
    " " +
    foundPurchase.inStock
  );
}
function destroy(purchases, purchaseId) {
  const index = purchases.findIndex((purchase) => purchase.id === purchaseId);

  if (index > -1) {
    purchases.splice(index, 1);
    console.log("we deleted your purchase");

    return purchases;
  } else {
    console.log("couldn't find a purchase with that Id");
  }
}

function update(purchases, purchaseId, updatedPurchaseName) {
  const index = purchases.findIndex((purchase) => purchase.id === purchaseId);

  if (index > -1) {
    purchases[index].id = purchaseId;
    purchases[index].name = updatedPurchaseName;
    console.log("Inventory name successfully updated")
    return purchases;
  } else {
    console.log("couldnt find a product with that id");
    return purchases
  }
}



module.exports = {
  create,
  index,
  show,
  destroy,
  update,
};
