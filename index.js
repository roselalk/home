
//Dice Game
var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector(".dicegame-h1").innerHTML = "Player 1 Won!";
}

if (randomNumber1 < randomNumber2) {
  document.querySelector(".dicegame-h1").innerHTML = "Player 2 Won!";
}

if (randomNumber1 === randomNumber2) {
  document.querySelector(".dicegame-h1").innerHTML = "It's A Draw!";
}


// Cooking Calculator

// Calculate Temperature
function fahrenheitCelcius() {
  var fahrenheit = document.getElementById("fahrenheit").value;
  var celcius = (fahrenheit-32)*(5/9);
  alert(fahrenheit + " degrees Fahrenheit is " + Math.round(celcius) + " degrees Celcius.")
}

function celciusFahrenheit() {
  var celcius = document.getElementById("celcius").value;
  var fahrenheit = (celcius * (9/5)) + 32;
  alert(celcius + " degrees Celcius is " + Math.round(fahrenheit) + " degrees Fahrenheit.")
}

// Calculate weight
function lbsGram() {
  var lbs = document.getElementById("lbs").value;
  var gram = lbs * 453.59237;
  alert(lbs + " lbs is " + Math.round(gram) + " grams.")
}

function gramLbs() {
  var gram = document.getElementById("gram").value;
  var lbs = gram / 453.59237;
  alert(gram + " grams is " + lbs + " lbs.")
}

// Calculate fluid
function ounceMl() {
  var ounce = document.getElementById("ounce").value;
  var ml = ounce * 453.59237;
  alert(ounce + " ounces is " + Math.round(ml) + " milliliters.")
}

function mlOunce() {
  var ml = document.getElementById("ml").value;
  var ounce = ml / 453.59237;
  alert(ml + " milliliters is " + ounce + " US Fluid Ounces.")
}

// Calculate Cups
function butterCup() {
  var cup = document.getElementById("butter").value;
  var gram = cup * 227;
  alert(cup + " cups of butter is " + Math.round(gram) + " grams.")
}

function flourCup() {
  var cup = document.getElementById("flour").value;
  var gram = cup * 125;
  alert(cup + " cups of flour is " + Math.round(gram) + " grams.")
}

function sugarCup() {
  var cup = document.getElementById("sugar").value;
  var gram = cup * 200;
  alert(cup + " cups of sugar is " + Math.round(gram) + " grams.")
}

function milkCup() {
  var cup = document.getElementById("milk").value;
  var gram = cup * 236.588;
  alert(cup + " cups of thin fluids is " + Math.round(gram) + " milliliters.")
}


// Show/hide Temperature, Weight, Fluid, and Cup
function displayTemp() {
  var tempDiv = document.getElementById("temp-div");
  if (tempDiv.style.display === "none") {
    tempDiv.style.display = "block";
  } else {
    tempDiv.style.display = "none";
  }
}

function displayWeight() {
  var weightDiv = document.getElementById("weight-div");
  if (weightDiv.style.display === "none") {
    weightDiv.style.display = "block";
  } else {
    weightDiv.style.display = "none";
  }
}

function displayFluid() {
  var fluidDiv = document.getElementById("fluid-div");
  if (fluidDiv.style.display === "none") {
    fluidDiv.style.display = "block";
  } else {
    fluidDiv.style.display = "none";
  }
}

function displayCup() {
  var cupDiv = document.getElementById("cup-div");
  if (cupDiv.style.display === "none") {
    cupDiv.style.display = "block";
  } else {
    cupDiv.style.display = "none";
  }
}
