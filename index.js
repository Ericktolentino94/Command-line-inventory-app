const { writeJSONFile, readJSONFile } = require("./src/helpers.js")
const { create,
        index,
        show,
        update,
} = require("./src/purchases-controller.js")

const run = () => {
    const action = process.argv[2];
    const purchase = process.argv[3]
    let purchaseData = readJSONFile("./data", "purchases-data.json");
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
            writeToFile = true;
            break;
        case "update" :
            updatedPurchaseData = update(purchaseData, purchase, process.argv[4]);
            writeToFile = true;
            break;
            default:
                console.log("there was an error")
    }
    if(writeToFile) {
        console.log("new data detected - updating")
        writeJSONFile("./data", "purchases-data.json", updatedPurchaseData)
    }
}

run()