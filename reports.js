// Wait for page to load before drawing charts
window.onload = function() {
  drawOrdersChart();
  drawSuppliersChart();
};

function drawOrdersChart() {
  // Get the canvas element
  var canvas = document.getElementById("ordersChart");
  var ctx = canvas.getContext("2d");
  
  // Sample data for orders per month
  var months = ["June", "July", "August", "September", "October", "November"];
  var orderCounts = [25, 32, 28, 38, 45, 42];
  
  // Create bar chart
  var ordersChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: months,
      datasets: [{
        label: "Number of Orders",
        data: orderCounts,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function drawSuppliersChart() {
  // Get the canvas element
  var canvas = document.getElementById("suppliersChart");
  var ctx = canvas.getContext("2d");
  
  // Sample data for supplier performance
  var suppliers = ["ABC Metals Ltd", "Global Supplies Co", "Prime Materials Inc"];
  var deliveryCounts = [35, 28, 22];
  
  // Create pie chart
  var suppliersChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: suppliers,
      datasets: [{
        label: "Fast Deliveries",
        data: deliveryCounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true
    }
  });
}