let removeCarts = document.getElementsByClassName("btn-reset");
let btnPlus = document.querySelectorAll(".button1");
let btnMinus = document.querySelectorAll(".button-1");
let products = document.querySelectorAll("tr");
let hearts = document.querySelectorAll(".fa-heart");
let sum = document.querySelector(".sum");
let prices = document.querySelectorAll(".pr");
let pricesTotalEl = document.querySelectorAll(".price-h3");
let quantityEl = document.getElementsByClassName("quantity");

/**
 * Like Button
 */
for (i = 0; i < hearts.length; i++) {
  var heart = hearts[i];
  heart.addEventListener("click", function (e) {
    e.target.classList.toggle("redLike");
  });
}

/**
 * Increase Quantity
 */
for (t = 0; t < btnPlus.length; t++) {
  var fp = btnPlus[t];
  fp.addEventListener("click", function (y) {
    y.preventDefault();
    var quantity = y.target.parentElement.childNodes[3];
    if (parseInt(quantity.innerText) < 20) {
      quantity.innerText = parseInt(quantity.innerText) + 1;
      individualTotalPrices();
      totalSum();
    }
  });
}

/**
 * Decrease Quantity
 */
for (u = 0; u < btnMinus.length; u++) {
  var fm = btnMinus[u];
  fm.addEventListener("click", function (pp) {
    pp.preventDefault();
    var quantity = pp.target.parentElement.childNodes[3];
    if (parseInt(quantity.innerText) > 0) {
      quantity.innerText = parseInt(quantity.innerText) - 1;
      individualTotalPrices();
      totalSum();
    }
  });
}

/**
 * Remove Button
 */
for (i = 0; i < removeCarts.length; i++) {
  var buttom = removeCarts[i];
  buttom.addEventListener("click", function (even) {
    let buttonClick = even.target;
    buttonClick.parentElement.parentElement.parentElement.remove();
    totalSum();
  });
}

/**
 * Articles Individual Price
 */
function individualTotalPrices() {
  for (t = 0; t < pricesTotalEl.length; t++) {
    // Get Price
    var price = prices[t].childNodes[0].textContent;
    // Get Quantity
    var quantity = quantityEl[t].innerText;
    // Total = Quantity * Price
    pricesTotalEl[t].innerHTML = price * quantity + "$";
  }
}

/**
 * Total Prices
 */
function totalSum() {
  let total = [];
  let prices = Array.from(document.querySelectorAll(".pr"));
  let quantities = Array.from(document.querySelectorAll(".quantity"));
  for (let i = 0; i < prices.length; i++) {
    total.push(prices[i].innerHTML * quantities[i].innerHTML);
    sum.innerHTML = "Total: " + total.reduce((a, b) => a + b) + "$";
  }
}
