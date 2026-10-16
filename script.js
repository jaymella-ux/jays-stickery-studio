
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

// Display copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${shopName} 🩷`;
}

// Console messages
console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Products available:", runningCount);
