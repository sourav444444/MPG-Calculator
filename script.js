
function calculateMPG() {
  const distance = parseFloat(document.getElementById("distance").value);
  const fuel = parseFloat(document.getElementById("fuel").value);
  if (distance > 0 && fuel > 0) {
    const mpg = distance / (fuel * 0.219969);
    document.getElementById("result").innerText =
      "Your vehicle's MPG is " + mpg.toFixed(2) + " miles per gallon.";
  } else {
    document.getElementById("result").innerText = "Please enter valid values.";
  }
}

function clearFields() {
  document.getElementById("distance").value = "";
  document.getElementById("fuel").value = "";
  document.getElementById("result").innerText = "";
}
