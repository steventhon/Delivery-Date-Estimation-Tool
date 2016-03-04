var latency = [
  1, // Bug Off
  5, // Carlson
  1, // Cat Mate/Dog Mate
  1, // CatHole
  1, // GateWay
  1, // Gun Dog
  7.5, // Hale
  2, // High Tech
  3, // Ideal (everything but flaps)
  1, // Ideal (flaps)
  1, // Magic Mesh
  1, // Magnador
  5, // Mason Company
  1, // Patio Pacific
  17, // Patio Pet Door Company
  17, // Pet Door Guys
  1, // PetSafe
  2, // Plexidor
  2, // Pozzy Pet Doors
  2, // Pride Pet Products
  1, // Prime Line Products
  1, // RCR Screens
  1, // Staywell Pet Doors
  1, // SureFlap
  2, // Watchdog Security
  1
]; // Wedgit Charley Bar

var shipdays = [
  [4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 3, 2, 4, 5, 5, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 2, 4, 2, 2, 2, 2, 2, 2, 1, 2],
  [4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 3, 4],
  [2, 2, 2, 2, 2, 4, 3, 2, 2, 2, 2, 3, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [5, 5, 5, 5, 5, 3, 4, 5, 5, 5, 5, 3, 2, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 2, 4, 5, 5, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 3, 4, 5, 5, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 3, 2, 4, 5, 5, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 7, 6, 5, 5, 5, 5, 6, 7, 5, 6, 6, 5, 7, 5, 5, 5, 5, 5, 5, 5, 5],
  [3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 4, 3, 2, 2, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 1, 2, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4],
  [3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 3, 3, 4, 4, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 3, 4],
  [5, 5, 5, 5, 5, 3, 4, 5, 5, 5, 5, 3, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 3, 2, 4, 5, 5, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 3, 4, 5, 5, 5, 5, 3, 2, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 3, 4],
  [4, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 1, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 3, 4],
  [3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 4, 3, 2, 2, 2, 2, 3, 4, 2, 3, 3, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2],
  [5, 5, 5, 5, 5, 3, 4, 5, 5, 5, 5, 3, 2, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 3, 2, 4, 5, 5, 4, 3, 4, 4, 4, 4, 4, 4, 5, 4],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [5, 5, 5, 5, 5, 3, 4, 5, 5, 5, 5, 3, 2, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 2, 4, 5, 5, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 1, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 4, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 4, 3, 2, 2, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 2, 4, 5, 5, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 3, 4, 5, 5, 5, 5, 3, 2, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 2, 4, 5, 5, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 3, 4],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 4, 2, 3, 3, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2],
  [5, 5, 5, 5, 5, 3, 4, 5, 5, 5, 5, 3, 2, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 2, 4, 5, 5, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 4, 3, 2, 1, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 2, 3, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4],
  [3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3]
];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var manufacturer, state;

function setManufacturer() {
  var m = document.getElementById("manufacturer");
  manufacturer = m.options[m.selectedIndex].value;
  if (state) {
    estimate();
  }
}

function setState() {
  var s = document.getElementById("state");
  state = s.options[s.selectedIndex].value;
  if (manufacturer) {
    estimate();
  }
}

// Add only business days to date
function addBusinessDays(date, days) {
  while (days) {
    date.setDate(date.getDate() + 1);
    if (date.getDay() != 0 && date.getDay() != 6) {
      days--;
    }
  }
}

// Into a nice format of "Day, Month Date"
function formatDate(date) {
  var format;
  format = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate();
  return format;
}

function estimate() {
  if (manufacturer && state) {
    var lag = shipdays[state][manufacturer] + latency[manufacturer];
    var begin = new Date();
    var end = new Date();
    addBusinessDays(begin, lag - 1);
    addBusinessDays(end, lag + 3);
    document.getElementById("msg").innerHTML = "Estimated delivery date range (if ordered today):";
    document.getElementById("range").innerHTML = "Between " + formatDate(begin) + " and " + formatDate(end);
  } else {
    document.getElementById("msg").innerHTML = "Please select a manufacturer and a state.";
  }
}

document.getElementById("manufacturer").addEventListener("change", setManufacturer);
document.getElementById("state").addEventListener("change", setState);
