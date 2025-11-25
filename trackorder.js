// Simple order tracking syste (static ver)
// Order status will be updated by backend later
const orderStages = [
    { number: 1, name: "Materials Ordered", color: "bg-primary-custom" },
    { number: 2, name: "In Production", color: "bg-secondary-custom" },
    { number: 3, name: "Quality Check", color: "bg-warning" },
    { number: 4, name: "Shipped", color: "bg-success" }
];

<<<<<<< HEAD
let currentStage = 1;
=======
let currentStage = 2; //manually set to step 2 for now
>>>>>>> 01fcea9990b0b544fb4868b41082bf9abd8fb2d4

//Makes the progress bar light up correctly to show where the order is in the production process
function updateSteps() {
<<<<<<< HEAD
    for (let i = 1; i <= STAGES.length; i++) {
        const step = document.getElementById(`step-${i}`);
        step.classList.remove('completed', 'active');

        if (i < currentStage) {
            step.classList.add('completed');
        } else if (i === currentStage) {
            step.classList.add('active');
        }
    }

    const currentStageData = STAGES.find(s => s.id === currentStage);
    const statusText = document.getElementById('current-status-text');
    statusText.textContent = currentStageData.name;
    statusText.className = `badge fs-5 ${currentStageData.badge}`;
}

function checkStatus() {
    // In a real application, this would fetch the current status from the server
    // For now, we'll just show a message that we're checking
    showMsg(`Checking latest status for Order #${document.getElementById('order-id-display').textContent}...`);
    
    // Simulate a brief delay as if checking with the server
    setTimeout(() => {
        showMsg(`Order #${document.getElementById('order-id-display').textContent} status: ${STAGES.find(s => s.id === currentStage).name}`);
    }, 1000);
}

function showMsg(msg) {
    const box = document.getElementById('notification-area');
    const note = document.createElement('div');
    note.className = 'notification-alert';
    note.innerHTML = `<strong>STATUS CHECK:</strong> ${msg}`;
    
    box.prepend(note);
    
    setTimeout(() => note.remove(), 5000);
}

document.addEventListener('DOMContentLoaded', updateSteps);
=======
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
>>>>>>> 01fcea9990b0b544fb4868b41082bf9abd8fb2d4
