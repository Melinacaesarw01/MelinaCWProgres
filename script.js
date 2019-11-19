$(function() {
	$('.kembali a').css('background-color', 'green');
});

function validasi() {
	var username = document.getElementById("nama").value;
	var password = document.getElementById("sandi").value;
}
	if ( nama =="" && sandi == ""){
		alert('Username dan password harus diisi !');
	}
	else if ( nama == "") {
		alert('Username harus diisi !');
	}
	else if ( sandi == "") {
		alert('Password harus diisi !');
	}


