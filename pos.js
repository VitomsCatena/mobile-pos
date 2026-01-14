// Defines menu items grouped by category
const menuItemsByCategory = {
    Starters: ["Soup", "Salad", "Bruschetta"], // Starter items
    Mains: ["Choma", "Pizza", "Pasta"] // Main items
};

// Retrieves DOM elements
const itemGrid = document.getElementById("itemGrid"); // Item grid container
const orderList = document.getElementById("orderList"); // Order list container
const categoryButtons = document.querySelectorAll(".category-button"); // Category buttons
const sendToKdsButton = document.getElementById("sendToKdsButton"); // KDS button
const payButton = document.getElementById("payButton"); // Pay button

// Stores current order items
let currentOrderItems = []; // Initializes empty order

// Loads items for selected category
function loadCategoryItems(categoryName) {
    itemGrid.innerHTML = ""; // Clears existing items
    menuItemsByCategory[categoryName].forEach(itemName => {
        const itemButton = document.createElement("button"); // Creates item button
        itemButton.className = "item-button"; // Assigns CSS class
        itemButton.textContent = itemName; // Sets button text
        itemButton.addEventListener("click", () => addItemToOrder(itemName)); // Adds click handler
        itemGrid.appendChild(itemButton); // Adds button to grid
    });
}

// Adds item to order
function addItemToOrder(itemName) {
    currentOrderItems.push(itemName); // Adds item to order array
    renderOrderList(); // Updates UI
}

// Renders order list UI
function renderOrderList() {
    orderList.innerHTML = ""; // Clears list
    currentOrderItems.forEach(item => {
        const listItem = document.createElement("li"); // Creates list item
        listItem.textContent = item; // Sets item name
        orderList.appendChild(listItem); // Adds to list
    });
}

// Handles category button clicks
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        loadCategoryItems(button.dataset.category); // Loads category items
    });
});

// Handles Send to KDS action
sendToKdsButton.addEventListener("click", () => {
    currentOrderItems = []; // Clears order
    renderOrderList(); // Updates UI
    alert("Order sent to KDS"); // Confirms action
});

// Handles Pay action
payButton.addEventListener("click", () => {
    currentOrderItems = []; // Clears order
    renderOrderList(); // Updates UI
    alert("Payment completed"); // Confirms payment
});

// Loads default category on startup
loadCategoryItems("Starters"); // Initializes with starters
