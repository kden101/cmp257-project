function showOrderDetails(orderId) {
    const orderIdDisplay = document.getElementById("modal-order-id");
    const timelineList = document.getElementById("modal-timeline-content");

    // Simple sample data
    const orderTimelines = {
        "1020": ["Materials Ordered", "In Production", "Quality Check", "Completed"],
        "1015": ["Materials Ordered", "In Production", "Quality Check", "Completed"]
    };

    const timeline = orderTimelines[orderId] || ["No data found"];
    orderIdDisplay.textContent = orderId;

    timelineList.innerHTML = "";
    for (const step of timeline) {
        const li = document.createElement("li");
        li.textContent = step;
        li.className = "list-group-item";
        timelineList.appendChild(li);
    }
}
