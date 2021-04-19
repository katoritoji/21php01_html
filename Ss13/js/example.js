function save() {
// Lệnh không để trống họ tên
	var fullName = document.getElementById('full-name').value;
	if (fullName == '') {
		alert('Vui lòng điền họ tên');
	}
//Lệnh không để trống số đầu kỳ
	var numberFirst = document.getElementById('number-first').value;
	var numberFirstcheck = isNaN(numberFirst);
	if (numberFirst == '') {
		alert('Vui lòng điền số đầu kỳ');
	}
	if (numberFirstcheck == true) {
		alert("Số đầu kỳ phải để ở định dạng số");
	}
//Lệnh không để trống số cuối kỳ
	var numberLast = document.getElementById('number-last').value;
	var numberLastcheck = isNaN(numberLast);
	if (numberLast == '') {
		alert('Vui lòng điền số cuối kỳ');
	}
	if (numberLastcheck == true) {
		alert("Số cuối kỳ phải để ở định dạng số");
	}
//Lệnh không để trống ngày sinh
	var birt = document.getElementById('birt').value;
	if (birt == '') {
		alert('Vui lòng điền ngày sinh');
	}
//Lệnh không để trống ngày đầu kỳ
	var firstDay = document.getElementById('first-day').value;
	if (firstDay == '') {
		alert('Vui lòng điền ngày đầu kỳ');
	}
//Lệnh không để trống ngày cuối kỳ
	var lastDay = document.getElementById('last-day').value;
	if (lastDay == '') {
		alert('Vui lòng điền ngày đầu kỳ');
	}
//Check số đầu kỳ với số cuối kỳ
	if (numberFirst <= 0 || numberFirst > numberLast) {
		alert('Số đầu kỳ phải lớn hơn 0 và nhỏ hơn hoặc bằng số cuối kỳ');
	}
//Check số đầu kỳ với số cuối kỳ
	if (firstDay > lastDay) {
		alert('Ngày đầu kỳ phải nhỏ hơn hoặc bằng ngày cuối kỳ');
	}
	// if (document.getElementById("male").checked = false || document.getElementById("female").checked = false) {
	// 	alert('Vui lòng chọn giới tính');
	// }
//Check không bỏ trống giới tính
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	if (male == false && female == false) {
		alert('Vui lòng chọn giới tính');
	}
//Tính tiền điện 
	var result = numberLast - numberFirst;
	if (result <= 50) {
		document.getElementById('price').innerHTML = ('Tiền điện là: ' + result*1000 + ' VND');
	}
//In hóa đơn ra theo giới tính
	if(document.getElementById('male').checked) {
		document.getElementById('container').style.backgroundColor = 'green';
	}else if(document.getElementById('female').checked) {
  		document.getElementById('container').style.backgroundColor = 'pink';
	}
}
