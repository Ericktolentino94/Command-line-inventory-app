const { writeJSONFile, readJSONFile } = require("./src/helpers.js")
const { create,
        index,
        show,
        update,
        destroy,
} = require("./src/purchases-controller.js")
// const { addToCart,
//     showCart,
//     emptyCart,} = require("../src/sneakerCart-controller.js")

const run = () => {
    const action = process.argv[2];
    const purchase = process.argv[3]
    let purchaseData = readJSONFile("./data", "purchases-data.json");
    // let sneakerInventory = readJSONFile(".", "data/purchases-price.json" );
    let writeToFile = false;
    let updatedPurchaseData = [];
    switch(action) {
        case "index":
            const allPurchases = index(purchaseData);
            console.log(allPurchases)
            break;
        case "create": 
            updatedPurchaseData = create(purchaseData, purchase)
            writeToFile = true;
            break;
        case "show" : 
            const foundPurchase = show(purchaseData, purchase)
            console.log(foundPurchase)
            break;
        case "update" :
            updatedPurchaseData = update(purchaseData, purchase, process.argv[4]);
            writeToFile = true;
            break;
            case "destroy" :
                updatedPurchaseData = destroy(purchaseData, purchase);
                writeToFile = true;
            // case: "addToCart" :
            //     updatedPurchaseData = addToCart(sneakerInventory,)

            default:
                console.log("there was an error")
    }
    if(writeToFile) {
        console.log("new data detected - updating")
        writeJSONFile("./data", "purchases-data.json", updatedPurchaseData)
    }
}

run()