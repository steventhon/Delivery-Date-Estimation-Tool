var manufacturer = "";
var state = "";

function setManufacturer() {
  var m = document.getElementById("manufacturer");
  manufacturer = m.options[m.selectedIndex].value;
  alert("You have selected Product Manufacturer: " + manufacturer);
}

function setState() {
  var s = document.getElementById("state");
  state = s.options[s.selectedIndex].value;
  alert("You have selected State: " + state);
}

function estimate() {
  if (manufacturer && state) {
    
  }
  else {
    document.getElementById("msg").innerHTML = "Please select a manufacturer and a state.";
  }
}

function menuChange(id) {
  if (document.getElementById('list' + id).style.display == 'none')
    document.getElementById('list' + id).style.display = 'block';
  else
    document.getElementById('list' + id).style.display = 'none';
}
