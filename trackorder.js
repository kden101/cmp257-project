const STAGES = [
    { id: 1, name: 'Materials Ordered', badge: 'bg-primary-custom' }, 
    { id: 2, name: 'In Production', badge: 'bg-secondary-custom' }, 
    { id: 3, name: 'Quality Check', badge: 'bg-warning' }, 
    { id: 4, name: 'Shipped', badge: 'bg-success' } 
];

let stage = 1;

function updateSteps() {
    for (let i = 1; i <= STAGES.length; i++) {
        const step = document.getElementById(`step-${i}`);
        step.classList.remove('completed', 'active');

        if (i < stage) {
            step.classList.add('completed');
        } else if (i === stage) {
            step.classList.add('active');
        }
    }

    const now = STAGES.find(s => s.id === stage);
    const statusText = document.getElementById('current-status-text');
    statusText.textContent = now.name;
    statusText.className = `badge fs-5 ${now.badge}`;
}

function nextStep() {
    if (stage < STAGES.length) {
        stage++;
        updateSteps();
        const nowName = STAGES.find(s => s.id === stage).name;
        showMsg(`Order #${document.getElementById('order-id-display').textContent} is now in ${nowName}.`);
    } else {
        alert("Order already shipped.");
    }
}

function showMsg(msg) {
    const box = document.getElementById('notification-area');
    const note = document.createElement('div');
    note.className = 'notification-alert';
    note.innerHTML = `<strong>ORDER UPDATE:</strong> ${msg}`;
    
    box.prepend(note);
    
    setTimeout(() => note.remove(), 5000);
}

document.addEventListener('DOMContentLoaded', updateSteps);
