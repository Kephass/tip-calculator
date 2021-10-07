"use strict";

const bill = document.querySelector(".bill");
const tip = document.querySelectorAll(".btn-tip");
const numPeople = document.querySelector(".num-people");
const tipText = document.querySelector(".tip-amount");
const totalAmountText = document.querySelector(".amount-person");
const reset = document.querySelector(".btn-right__reset");

let tipRate;

// function init
const init = () => {
  if (bill.value && tipRate && numPeople.value) {
    calculateTip();
    calculateTotalAmount(bill.value, numPeople.value, +calculateTip());
  }
};

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") init();
});

bill.addEventListener("focusout", (event) => {
  init();
  return bill.value;
});

tip.forEach(function (e) {
  e.addEventListener("click", (event) => {
    tipRate = parseInt(e.value);
    console.log(e.value);
    init();
  });
});

numPeople.addEventListener("focusout", init);

// function to calculate bill rate
const calculateTip = (tipCalc, tipAmount) => {
  if (bill.value && tipRate && numPeople.value) {
    tipCalc = (bill.value / numPeople.value) * (tipRate / 100);
    tipAmount = parseFloat(tipCalc).toFixed(2);
    tipText.textContent = `$${tipAmount}`;
    return tipAmount;
  } else {
    alert("You have to fill in all inputs");
  }
};

//: function to calculate total amount
const calculateTotalAmount = (bill, numPeople, tip, totalAmount) => {
  totalAmount = parseFloat(bill / numPeople + tip).toFixed(2);
  totalAmountText.textContent = `$${totalAmount}`;
};

//: Reset button
reset.addEventListener("click", () => {
  bill.value = null;
  tipRate = null;
  numPeople.value = null;
  tipText.textContent = `$0.00`;
  totalAmountText.textContent = `$0.00`;
});
