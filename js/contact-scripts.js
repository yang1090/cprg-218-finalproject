var btnAlert = document.getElementById('btn-alert');
    btnAlert.addEventListener('click', function() {
    alert('Submitted Successfully!');
})

// start of footer date
document.getElementById('year').innerHTML = new Date().getFullYear();
// end of footer date