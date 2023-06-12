const { writeJSONFile, readJSONFile } = require("./src/helpers");
const {
  create,
  index,
  show,
  update,
  destroy,
} = require("./src/purchases-controller.js");
// const {
//     addToCart,
//     emptyCart,
//     showTotalPrice,

// } = require("./src/sneakerCart-controller.js")

const run = () => {
  const action = process.argv[2];
  const purchase = process.argv[3];
  let purchaseData = readJSONFile("./data", "inventory-data.json");
//   let sneakerInventory = readJSONFile("./data", "shopping-cart.json");
  let writeToFile = false;
  let updatedPurchaseData = [];
//   let updatedInventoryData = [];
  switch (action) {
    case "index":
      const allPurchases = index(purchaseData);
      console.log(allPurchases);
      break;
    case "create":
      updatedPurchaseData = create(purchaseData, purchase);
      writeToFile = true;
      break;
    case "show":
      const foundPurchase = show(purchaseData, purchase);
      console.log(foundPurchase);
      break;
    case "update":
      updatedPurchaseData = update(purchaseData, purchase, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
      updatedPurchaseData = destroy(purchaseData, purchase);
      writeToFile = true;
    // case "addToCart" :
    //     updatedPurchaseData = addToCart(sneakerInventory, purchase, process.argv[4]);
    //     writeToFile = true;
    //     break;
    default:
      console.log("there was an error");
  }
  if((writeToFile && action === "addToCart") || action === "emptyCart") {
    console.log("New data detected - updating cart...");
    writeJSONFile(".", "data/shopping-cart.json")
  } else {
  if (writeToFile) {
    console.log("new data detected - updating");
    writeJSONFile("./data", "inventory-data.json", updatedPurchaseData);
  }
};
}

run();
