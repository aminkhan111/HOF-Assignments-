
//3. Build a feature for 03_Stores_Inventory.js

// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.


// difine store inventory

const storeInventory = {
    "Rolex Watch":100000,
    "Jimmy Choo":10000,
    "Dior Sauvage":300
}

// define Exchange Rate
const ExchangeRate = 80;


// Step 3: Use the map function to convert prices to Indian Rupees

const convertedInventory =Object.fromEntries(
    Object.entries (storeInventory).map(([item,priceUSD])=> {
        const priceINR =priceUSD * ExchangeRate;
        return [item, priceINR];
    })
);

// Step 4: Print the Converted Inventory

console.log("Converted Inventory (Prices in INR):",convertedInventory);


//Object.entries(storeInventory):

// Object.entries() is a method in JavaScript that transforms an object into an array of its key-value pairs. In this case, it's applied to the storeInventory object.
// For example, if storeInventory is { "item1": 20, "item2": 35 }, Object.entries(storeInventory) would produce [['item1', 20], ['item2', 35]].
// Map Function:

// .map(([item, priceUSD]) => [item, priceUSD * exchangeRate]) is a call to the map function applied to the array created by Object.entries().
// map is a higher-order function that allows you to transform each element of an array. In this case, it's transforming each entry (item and price in USD) into a new array.
// ([item, priceUSD]) => [item, priceUSD * exchangeRate] is an arrow function used as the mapping function. It takes each entry, extracts the item and priceUSD, then returns a new array with the same item and the price converted to INR (priceUSD * exchangeRate).
// Object.fromEntries():

// Object.fromEntries() is another method in JavaScript that transforms an array of key-value pairs back into an object.
// In this case, it's applied to the array of arrays created by the map function. So, the resulting array [['item1', convertedPrice1], ['item2', convertedPrice2], ...] becomes a new object { 'item1': convertedPrice1, 'item2': convertedPrice2, ... }.

