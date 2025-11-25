const STAGES = [
    { id: 1, name: 'Materials Ordered', badge: 'bg-primary-custom' }, 
    { id: 2, name: 'In Production', badge: 'bg-secondary-custom' }, 
    { id: 3, name: 'Quality Check', badge: 'bg-warning' }, 
    { id: 4, name: 'Shipped', badge: 'bg-success' } 
];

let currentStage = 1;

function updateSteps() {
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