// Task 1 - Base Structure Setup

document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard");
    console.log("Risk Dashboard Loaded");
});

// Created basic structure with a risk dashboard container and printed text to the console


// Task 2 - Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    // Populate the risk card with details
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;

    // Append the risk card to the risk dashboard
    const riskDashboard = document.getElementById("riskDashboard");
    if (riskDashboard) {
        riskDashboard.appendChild(riskCard);
    } else {
        console.error("Risk Dashboard element not found");
    }
}

    // Test Cases for Challenge 
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Created risk cards with the option to adjust differrnt variables; assgined classes and appended

