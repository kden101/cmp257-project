window.onload = function() {
    addChartStyles();
    createOrdersChart();
    createSuppliersChart();
};

function addChartStyles() {
    var styleElement = document.createElement("style");

    styleElement.textContent = `
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
            padding: 19px;
            display: flex;
            align-items: center;
            color: white;
            font-weight: bold;
            border-radius: 4px;
            min-width: 50px;
        }
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
    
    document.head.appendChild(styleElement);
}

function createOrdersChart() {
    var ordersData = [25, 32, 28, 38, 45, 42];
    var monthNames = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
    var chartContainer = document.getElementById("ordersChart");
    
    //bar for June
    var juneWrapper = document.createElement("div");
    juneWrapper.style.display = "flex";
    juneWrapper.style.flexDirection = "column";
    juneWrapper.style.alignItems = "center";
    
    var juneBar = document.createElement("div");
    juneBar.className = "bar";
    juneBar.style.height = "75px";
    juneBar.innerText = "25";
    
    var juneLabel = document.createElement("div");
    juneLabel.className = "bar-label";
    juneLabel.innerText = "Jun";
    
    juneWrapper.appendChild(juneBar);
    juneWrapper.appendChild(juneLabel);
    chartContainer.appendChild(juneWrapper);
    
    //bar for July
    var julyWrapper = document.createElement("div");
    julyWrapper.style.display = "flex";
    julyWrapper.style.flexDirection = "column";
    julyWrapper.style.alignItems = "center";
    
    var julyBar = document.createElement("div");
    julyBar.className = "bar";
    julyBar.style.height = "96px";
    julyBar.innerText = "32";
    
    var julyLabel = document.createElement("div");
    julyLabel.className = "bar-label";
    julyLabel.innerText = "Jul";
    
    julyWrapper.appendChild(julyBar);
    julyWrapper.appendChild(julyLabel);
    chartContainer.appendChild(julyWrapper);
    
    //bar for August
    var augustWrapper = document.createElement("div");
    augustWrapper.style.display = "flex";
    augustWrapper.style.flexDirection = "column";
    augustWrapper.style.alignItems = "center";
    
    var augustBar = document.createElement("div");
    augustBar.className = "bar";
    augustBar.style.height = "84px"; 
    augustBar.innerText = "28";
    
    var augustLabel = document.createElement("div");
    augustLabel.className = "bar-label";
    augustLabel.innerText = "Aug";
    
    augustWrapper.appendChild(augustBar);
    augustWrapper.appendChild(augustLabel);
    chartContainer.appendChild(augustWrapper);
    
    //bar for September
    var septemberWrapper = document.createElement("div");
    septemberWrapper.style.display = "flex";
    septemberWrapper.style.flexDirection = "column";
    septemberWrapper.style.alignItems = "center";
    
    var septemberBar = document.createElement("div");
    septemberBar.className = "bar";
    septemberBar.style.height = "114px"; 
    septemberBar.innerText = "38";
    
    var septemberLabel = document.createElement("div");
    septemberLabel.className = "bar-label";
    septemberLabel.innerText = "Sep";
    
    septemberWrapper.appendChild(septemberBar);
    septemberWrapper.appendChild(septemberLabel);
    chartContainer.appendChild(septemberWrapper);
    
    //bar for October
    var octoberWrapper = document.createElement("div");
    octoberWrapper.style.display = "flex";
    octoberWrapper.style.flexDirection = "column";
    octoberWrapper.style.alignItems = "center";
    
    var octoberBar = document.createElement("div");
    octoberBar.className = "bar";
    octoberBar.style.height = "135px"; 
    octoberBar.innerText = "45";
    
    var octoberLabel = document.createElement("div");
    octoberLabel.className = "bar-label";
    octoberLabel.innerText = "Oct";
    
    octoberWrapper.appendChild(octoberBar);
    octoberWrapper.appendChild(octoberLabel);
    chartContainer.appendChild(octoberWrapper);
    
    //bar for November
    var novemberWrapper = document.createElement("div");
    novemberWrapper.style.display = "flex";
    novemberWrapper.style.flexDirection = "column";
    novemberWrapper.style.alignItems = "center";
    
    var novemberBar = document.createElement("div");
    novemberBar.className = "bar";
    novemberBar.style.height = "126px"; 
    novemberBar.innerText = "42";
    
    var novemberLabel = document.createElement("div");
    novemberLabel.className = "bar-label";
    novemberLabel.innerText = "Nov";
    
    novemberWrapper.appendChild(novemberBar);
    novemberWrapper.appendChild(novemberLabel);
    chartContainer.appendChild(novemberWrapper);
}

function createSuppliersChart() {
    var chartContainer = document.getElementById("suppliersChart");
    
    //bar for ABC Metals
    var abcBar = document.createElement("div");
    abcBar.className = "supplier-bar";
    abcBar.style.width = "175px"; // 35 * 5
    abcBar.style.backgroundColor = "#A6808C";
    abcBar.innerText = "ABC Metals (35)";
    chartContainer.appendChild(abcBar);
    
    // Cbar for Global Co
    var globalBar = document.createElement("div");
    globalBar.className = "supplier-bar";
    globalBar.style.width = "140px"; // 28 * 5
    globalBar.style.backgroundColor = "#706677";
    globalBar.innerText = "Global Co (28)";
    chartContainer.appendChild(globalBar);
    
    // bar for Prime Inc
    var primeBar = document.createElement("div");
    primeBar.className = "supplier-bar";
    primeBar.style.width = "110px"; // 22 * 5
    primeBar.style.backgroundColor = "#565264";
    primeBar.innerText = "Prime Inc (22)";
    chartContainer.appendChild(primeBar);
}