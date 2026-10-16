const shopName = "Jay's Stickery Studio";
const currentYear = new Date().getFullYear();

let runningCount = 0;


// Display shop name

const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = shopName + " 🧩";
}


// Count products

const products = document.querySelectorAll(".product");

runningCount = products.length;

const productCountElement = document.getElementById("product-count");

if (productCountElement) {
    productCountElement.textContent = runningCount;
}


// 1. Stock Status Decision

const stockCount = 8;

let stockMessage;

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1) {
    stockMessage = "Only a few left";
} else {
    stockMessage = "Sold out";
}

const stockElement = document.getElementById("stock-result");

if (stockElement) {
    stockElement.textContent = stockMessage;
}


// 2. Free Delivery Decision

const orderTotal = 300;
const isMember = true;

const deliveryFee = orderTotal >= 300 && isMember === true
    ? 0
    : 150;

const finalTotal = orderTotal + deliveryFee;

const deliveryElement = document.getElementById("delivery-result");

if (deliveryElement) {
    deliveryElement.textContent =
        deliveryFee === 0
            ? "Free delivery"
            : "Delivery fee: ₱150";
}

const totalElement = document.getElementById("total-result");

if (totalElement) {
    totalElement.textContent = finalTotal;
}


// 3. Shop Open or Closed

const isShopOpen = true;

const shopStatus = isShopOpen === true
    ? "Open today"
    : "Closed today";

const openElement = document.getElementById("open-result");

if (openElement) {
    openElement.textContent = shopStatus;
}


// Copyright

const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${shopName} 🩷`;
}


// Console Messages

console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Products available:", runningCount);

console.log("Stock count:", stockCount);
console.log("Stock result:", stockMessage);

console.log("Order total:", orderTotal);
console.log("Member:", isMember);
console.log("Delivery fee:", deliveryFee);
console.log("Final total:", finalTotal);

console.log("Shop status:", shopStatus);