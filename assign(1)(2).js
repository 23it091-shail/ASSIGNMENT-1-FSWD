// Shopping cart array
const shoppingCart = [
    { productName: "Laptop", price: 1000, quantity: 1 },
    { productName: "Headphones", price: 200, quantity: 2 },
    { productName: "Keyboard", price: 50, quantity: 1 },
    { productName: "Mouse", price: 25, quantity: 3 },
    { productName: "Monitor", price: 300, quantity: 1 }
];

// Function to add a product to the cart
const addProduct = (productName, price, quantity) => {
    shoppingCart.push({ productName, price, quantity });
    console.log(`Added: ${productName}`);
};

// Function to calculate total cost using reduce
const calculateTotal = () => {
    const total = shoppingCart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
    console.log(`Total Cost: $${total.toFixed(2)}`);
    return total;
};

// Function to remove a product by name
const removeProduct = (productName) => {
    shoppingCart = shoppingCart.filter(product => product.productName !== productName);
    console.log(`Removed: ${productName}`);
};

// Function to log product details using destructuring
const logCartDetails = () => {
    shoppingCart.forEach(({ productName, price, quantity }) => {
        console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);
    });
};

// Example usage
addProduct("Laptop", 1000, 1);
addProduct("Headphones", 200, 2);
addProduct("Keyboard", 50, 1);

console.log("\nCart Details:");
logCartDetails();

console.log("\nCalculating Total:");
calculateTotal();

console.log("\nRemoving 'Headphones':");
removeProduct("Headphones");

console.log("\nCart Details After Removal:");
logCartDetails();
calculateTotal();
