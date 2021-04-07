var m = 2;
var y = 2024;

// if (m == [1, 3, 5, 7, 8, 10, 12]) {
// 	document.write("Tháng có 31 ngày");
// } else {
// 	if (m == [4, 6, 9, 11]) {
// 	document.write("Tháng có 30 ngày");
// 	}
// }
 

if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
	document.write('Tháng ' + m + ' có 31 ngày');
} else if ([4, 6, 9, 11].includes(m)) {
	document.write('Tháng ' + m + ' có 30 ngày');
}else if (m == 2) {
	if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)){
		document.write('Tháng ' + m + ' năm ' + y + ' có 29 ngày');
	}else {
		document.write('Tháng ' + m + ' năm ' + y + ' có 28 ngày');
	}
}

