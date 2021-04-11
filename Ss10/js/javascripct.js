// Vòng lặp for trong javascript
for (var i = 0; i < 10; i++) {
	document.write(i);
	document.write('<br>');
}

for (var i = 10; i > 0; i--) {
	document.write(i);
	document.write('<br>');
}

// BT: In ra dãy số từ 0 tới 100
// - Nếu số đó chia hết cho 3 thì in ra là: số x chia hết cho 3
// - Nếu số đó chia hết cho 5 thì in ra là: số x chia hết cho 5
// - Nếu số đó chia hết cho 15 thì in ra là: số x chia hết cho 15 mà 
// không in ra số x chia hết cho 3 và chia hết cho 5
// - Nếu số đó ko chia hết cho 3, 5, 15 thì in ra là: số x ko chia hết cho 3, 5, 15.
// Bài toán fizzbuzz

for (var i = 0; i <=100; i++ ) {
	if (i % 3 == 0) {
		document.write('Số ', i, ' chia hết cho 3 <br>');
	}
	if (i % 5 == 0) {
		document.write('Số ', i, ' chia hết cho 5 <br>');
	}
	if (i % 15 == 0) {
		document.write('Số ', i, ' chia hết cho 15 <br>');
	}
	if (i % 3 != 0 && i % 5 != 0 && i % 15 !=0) {
		document.write('Số', i, ' không chia hết cho 3, 5, 15 <br>');
	}
}
document.write('<br>');
document.write('<br>');

//V2
for (var i = 0; i <=100; i++ ) {
	if (i % 15 == 0) {
		document.write('Số ', i, ' chia hết cho 15 <br>');
	}else if (i % 5 == 0) {
		document.write('Số ', i, ' chia hết cho 5 <br>');
	}else if (i % 3 == 0) {
		document.write('Số ', i, ' chia hết cho 3 <br>');
	}else if (i % 3 != 0 && i % 5 != 0 && i % 15 !=0) {
		document.write('Số ', i, ' không chia hết cho 3, 5, 15 <br>');
	}
}




var x = 7;
var y = 10;
var z;
z = 5 + x++ + 6 + y-- + --x + y-- + ++x;
// 5 + 7 + 6 + 10 + 7 + 9+ 8
document.write('<br>');

//Vòng lặp while và do while

// var i = 10;
// while {
// 	document.write(i + '<br>');
// 	i--;
// } while (i > 0);
// document.write('<br>');

// var i = 10;
// while (i > 10){
// 	document.write(i + '<br>');
// 	i--;
// }
// document.write('<br>');
// do {
// 	document.write(i + '<br>');
// 	i--;
// }while (i > 10);



// BT: Cho 1 số, kiểm tra số đó nếu là bằng 2 thì in ra là "Monday",...8 
// thì in ra là "Sunday", nếu ko nằm trong 2 - 8 thì "No day"

var myDay = 3;
switch (myDay) {
	case 2:
		document.write('Monday');
		break;
	case 3:
		document.write('Tuesday');
		break;
	case 4:
		document.write('Wednesday');
		break;
	case 5:
		document.write('Thursday');
		break;
	case 6:
		document.write('Friday');
		break;
	case 7:
		document.write('Saturday');
		break;
	case 8:
		document.write('Sunday');
		break;
	default;
		document.write('No day');
		break;
}

