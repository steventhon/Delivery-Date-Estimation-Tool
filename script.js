var manufacturer = "";
var state = "";

function setManufacturer() {
  var m = document.getElementById("manufacturer");
  manufacturer = m.options[m.selectedIndex].value;
  alert("You have selected Product Manufacturer: " + manufacturer);
}

function menuChange(id) {
  if (document.getElementById('list' + id).style.display == 'none')
    document.getElementById('list' + id).style.display = 'block';
  else
    document.getElementById('list' + id).style.display = 'none';
}
