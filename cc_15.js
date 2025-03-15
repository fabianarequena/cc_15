// Task 1 - Base Structure Setup

document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard");
    console.log("Risk Dashboard Loaded");

// Created basic structure with a risk dashboard container and printed text to the console

// Task 2 - Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    // Test Cases for Challenge 
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Created risk cards with the option to adjust differrnt variables; assgined classes and appended

