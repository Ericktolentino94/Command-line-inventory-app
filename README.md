# Command-line-inventory-app

I have created a sneaker inventory app that creates new items for a store, updates the items, shows all the items available by and their unique id, and finally it can show the full details of a single sneaker or delete it completely from our inventory data using its Id.

## How to create a new product

If we want to create a new product we will type node index.js create "Product Name" in our terminal and a new product will be added to our inventory list.

### Example

{"id":"EfQj","name":"Air Jordan 1","priceInCents":"495.00","inStock":true}
```
node index.js "Air Jordan 1"
```

## How to index and show all the products in our inventory list

If we want to list all our sneakers in our inventory with their unique Id we will type node index.js index in our terminal and a list should appear showing our inventory sneaker names and their unique Id. If we want to show one individual sneaker and the full details of that sneaker we will use the show function by typing node index.js show "unique Id".

### Example for index

-vF3 Air jordan 5
54YE Foam Runner
NWAV New Balance
EfQj Air Jordan 1
LKXd Air Force 1
ZMwr Air force 12
bqqo Air Jordan 23
sXX7 Air jordan 30
```
node index.js
```

### Example for show

54YE Foam Runner 733.00 true
```
node index.js show "54YE"
```
## How to Update an inventory name

If you want to update the name of a sneaker in the inventory we will run node index.js "id" "new sneaker name", this will replace the sneaker name in our inventory.

### Example for update

Original object: [{"id":"-vF3","name":"Air Jordan 1","priceInCents":"743.00","inStock":true}
```
node index.js update -vF3 "Air Jordan 13"
```
updated object: {"id":"-vF3","name":"Air Jordan 13","priceInCents":"743.00","inStock":true}