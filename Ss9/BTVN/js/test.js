function validate() {
	var m = document.getElementById('month').value;
	var y = document.getElementById('year').value;
	

	if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
	    alert('Tháng ' + m + ' có 31 ngày');
	}
	if (m == 4 || m == 6 || m == 9 || m == 11 ) {
		alert('Tháng ' + m + ' có 30 ngày');
	}
	if (m == 2) {
		if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)){
			alert('Tháng ' + m + ' năm ' + y + ' có 29 ngày');
		}else {
			alert('Tháng ' + m + ' năm ' + y + ' có 28 ngày');
		}
	}
}

