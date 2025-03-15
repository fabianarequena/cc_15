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

// Task 3 - Adding Risk Items with a Button

function addResolveButtonToRiskCards() {
    const allRiskCards = document.querySelectorAll(".riskCard");

    allRiskCards.forEach((riskCard) => {
        // Create a resolve button if it doesn't exist already
        if (!riskCard.querySelector("button")) {
            const resolveButton = document.createElement("button");
            resolveButton.textContent = "Resolve";
            resolveButton.addEventListener("click", (e) => {
                e.stopPropagation();  // Stop event propagation
                riskCard.remove();    // Remove the card on button click
            });

            // Append the resolve button to the risk card
            riskCard.appendChild(resolveButton);
        }
    });
}

// Call this function after adding risk items to give them the resolve button
document.addEventListener("DOMContentLoaded", () => {
    addResolveButtonToRiskCards(); // Ensure the resolve buttons are added
});


