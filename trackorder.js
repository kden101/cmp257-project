// Simple order tracking syste (static ver)
// Order status will be updated by backend later
const orderStages = [
    { number: 1, name: "Materials Ordered", color: "bg-primary-custom" },
    { number: 2, name: "In Production", color: "bg-secondary-custom" },
    { number: 3, name: "Quality Check", color: "bg-warning" },
    { number: 4, name: "Shipped", color: "bg-success" }
];

let currentStage = 2; //manually set to step 2 for now

//Makes the progress bar light up correctly to show where the order is in the production process
function updateSteps() {
    let step1 = document.getElementById("step-1");
    step1.classList.remove("completed", "active");
    if (currentStage > 1) {
        step1.classList.add("completed");
    } else if (currentStage === 1) {
        step1.classList.add("active");
    }
    let step2 = document.getElementById("step-2");
    step2.classList.remove("completed", "active");
    if (currentStage > 2) {
        step2.classList.add("completed");
    } else if (currentStage === 2) {
        step2.classList.add("active");
    }
    let step3 = document.getElementById("step-3");
    step3.classList.remove("completed", "active");
    if (currentStage > 3) {
        step3.classList.add("completed");
    } else if (currentStage === 3) {
        step3.classList.add("active");
    }
    let step4 = document.getElementById("step-4");
    step4.classList.remove("completed", "active");
    if (currentStage > 4) {
        step4.classList.add("completed");
    } else if (currentStage === 4) {
        step4.classList.add("active");
    }
    let statusText = document.getElementById("current-status-text");
    
    if (currentStage === 1) {
        statusText.textContent = "Materials Ordered";
        statusText.className = "badge fs-5 bg-primary-custom";
    } else if (currentStage === 2) {
        statusText.textContent = "In Production";
        statusText.className = "badge fs-5 bg-secondary-custom";
    } else if (currentStage === 3) {
        statusText.textContent = "Quality Check";
        statusText.className = "badge fs-5 bg-warning";
    } else if (currentStage === 4) {
        statusText.textContent = "Shipped";
        statusText.className = "badge fs-5 bg-success";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateSteps();
});