window.onload = function() {
  // Add CSS styles for charts
  addChartStyles();
  
  // Orders per Month
  const orders = [25, 32, 28, 38, 45, 42];
  const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
  const ordersDiv = document.getElementById("ordersChart");

  for (let i = 0; i < months.length; i++) {
    const barWrapper = document.createElement("div");
    barWrapper.style.display = "flex";
    barWrapper.style.flexDirection = "column";
    barWrapper.style.alignItems = "center";

    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = orders[i] * 3 + "px"; // scale
    bar.innerText = orders[i]; // number on bar

    const label = document.createElement("div");
    label.className = "bar-label";
    label.innerText = months[i];

    barWrapper.appendChild(bar);
    barWrapper.appendChild(label);
    ordersDiv.appendChild(barWrapper);
  }

  // Fastest Suppliers
  const suppliers = ["ABC Metals", "Global Co", "Prime Inc"];
  const deliveries = [35, 28, 22];
  const colors = ["#A6808C", "#706677", "#565264"];
  const suppliersDiv = document.getElementById("suppliersChart");

  for (let i = 0; i < suppliers.length; i++) {
    const bar = document.createElement("div");
    bar.className = "supplier-bar";
    bar.style.width = deliveries[i] * 5 + "px"; // scale width
    bar.style.backgroundColor = colors[i];
    bar.innerText = suppliers[i] + " (" + deliveries[i] + ")";
    suppliersDiv.appendChild(bar);
  }
};

function addChartStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Simple Chart Styles */
    .bar {
        background-color: #A6808C;
        width: 40px;
        margin: 2px;
        display: flex;
        align-items: end;
        justify-content: center;
        color: white;
        font-weight: bold;
        border-radius: 4px 4px 0 0;
        min-height: 20px;
    }

    .bar-label {
        margin-top: 5px;
        font-size: 12px;
        color: #565264;
        font-weight: bold;
    }

    .supplier-bar {
        height: 30px;
        margin: 15px 0;
        padding:  19px;
        display: flex;
        align-items: center;
        color: white;
        font-weight: bold;
        border-radius: 4px;
        min-width: 50px;
      
    }



    /* Chart containers */
    #ordersChart {
        display: flex;
        justify-content: space-around;
        align-items: end;
        height: 200px;
        padding: 20px;
        border: 1px solid #CCB7AE;
        border-radius: 8px;
        background-color: white;
    }

    #suppliersChart {
        padding: 20px;
        border: 1px solid #CCB7AE;
        border-radius: 8px;
        background-color: white;
    }
  `;
  document.head.appendChild(style);
}