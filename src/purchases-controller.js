const { nanoid } = require("nanoid") ;
const { faker } = require("@faker-js/faker") ;

function create(purchases, purchaseName) {
    const purchase = {
        id: nanoid(4),
        name: purchaseName,
        priceInCents: faker.commerce.price(),
        inStock: true,
        item: faker.commerce.product(),
    }
    purchases.push(purchase)
    return purchases
}

function index(purchases) {
    return purchases.map((purchase) => purchase.id + " " + 
purchase.name).join("\n")
}

function show(purchases, purchaseId) {
    const foundPurchase = purchases.find((purchase)=> purchase.id === purchaseId);
    return foundPurchase.id + " " + foundPurchase.name
}

function update( purchases, purchaseId, updatedPurchase) {
    const index = purchases.findIndex((purchase) => purchase.id === purchaseId);

    if (index > -1) {
        purchases[index].id = purchaseId;
        purchases[index].name = updatedPurchase;
        purchases[index].priceInCents = purchaseUpdated[updatedPurchase];
        return purchases
    } else {
        console.log("couldnt find a product with that id")
    }
}

module.exports = {
    create,
    index,
    show,
    update,
}