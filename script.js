function menuChange(id) {
  if (document.getElementById('list'+id).style.display == 'none')
    document.getElementById('list'+id).style.display = 'block';
  else
    document.getElementById('list'+id).style.display = 'none';
}
