// production_log.js

// Function to load and display production tasks from Local Storage
function loadProductionTasks() {
    // 1. Get the data array from Local Storage
    const newTasks = JSON.parse(localStorage.getItem('newProductionTasks')) || [];
    const table = document.getElementById("productionTable");

    // 2. Iterate over the new tasks and add them to the table
    newTasks.forEach(task => {
        // Prevent adding existing hardcoded orders (optional, but good practice)
        if (!document.getElementById('row-' + task.id)) {
            let newRow = table.insertRow(-1);
            newRow.id = 'row-' + task.id; // Assign a unique ID to prevent duplicates

            let c1 = newRow.insertCell(0); // Order ID
            let c2 = newRow.insertCell(1); // Product
            let c3 = newRow.insertCell(2); // Start Date
            let c4 = newRow.insertCell(3); // Stage
            let c5 = newRow.insertCell(4); // Notes
            let c6 = newRow.insertCell(5); // Status

            c1.innerHTML = task.id;
            c2.innerHTML = task.product;
            c3.innerHTML = task.startDate;
            c4.innerHTML = task.stage;
            c5.innerHTML = task.notes;
            c6.innerHTML = `In Progress <button onclick="markComplete(this)">Complete</button>`;
        }
    });
    
    // 3. Clear the temporary Local Storage entry after loading
    // This is important so the same orders don't load again on refresh.
    // In a real application, the backend handles this.
    // localStorage.removeItem('newProductionTasks'); 
}

// Call this function when the production_log page loads
window.onload = function() {
    loadProductionTasks();
    // (Existing chart/other initialization code goes here)
};

// Your existing markComplete function remains the same
function markComplete(button) {
    button.parentNode.innerHTML = "Completed ✅";
    alert("Production job marked as complete!");
}