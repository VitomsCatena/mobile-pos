// Retrieves canvas drawing context
const chartCanvas = document.getElementById("costVarianceChart").getContext("2d");

// Defines revenue data points
const revenueValues = [120, 150, 170, 160, 190]; // Revenue trend

// Defines food cost data points
const foodCostValues = [80, 95, 110, 120, 135]; // Cost trend

// Draws revenue line
chartCanvas.strokeStyle = "blue"; // Revenue color
chartCanvas.beginPath(); // Starts path
revenueValues.forEach((value, index) => {
    chartCanvas.lineTo(index * 80 + 30, 220 - value); // Plots points
});
chartCanvas.stroke(); // Renders line

// Draws food cost line
chartCanvas.strokeStyle = "red"; // Food cost color
chartCanvas.beginPath(); // Starts path
foodCostValues.forEach((value, index) => {
    chartCanvas.lineTo(index * 80 + 30, 220 - value); // Plots points
});
chartCanvas.stroke(); // Renders line

// Retrieves DOM elements
const saveRecipeButton = document.getElementById("saveRecipeButton"); // Save button
const warningModal = document.getElementById("warningModal"); // Modal
const closeModalButton = document.getElementById("closeModalButton"); // Close button

// Handles recipe save logic
saveRecipeButton.addEventListener("click", () => {
    const currentCost = parseFloat(document.getElementById("currentCost").value); // Current cost
    const newCost = parseFloat(document.getElementById("newCost").value); // New cost
    const percentageIncrease = ((newCost - currentCost) / currentCost) * 100; // Percentage calculation

    if (percentageIncrease > 5) { // Exception E2 condition
        warningModal.style.display = "block"; // Shows modal
    } else {
        alert("Recipe saved successfully"); // Confirms save
    }
});

// Closes warning modal
closeModalButton.addEventListener("click", () => {
    warningModal.style.display = "none"; // Hides modal
});
