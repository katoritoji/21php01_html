//BT1:
document.write('BT1: <br>');
var group1 = 12;
var group2;
if (group2 = group1 * 2 - 4) {
document.write('Tổ 2 có: ' + group2 + ' người');
}

document.write('<br> <br>');
//BT2:
document.write('BT2: <br>');
var marbles1 = 18;
var marbles2 = marbles1 * 2;
var count = 0;

while (marbles2-- > marbles1++) {
	count++;
}
document.write('Cần chyển ', count, ' viên bi');

document.write('<br> <br>');
//BT3:
document.write('BT3: <br>');
var bookBinh = 27;
var bookMinh = bookBinh / 3;
var countBook = 0;

while (bookBinh-- > bookMinh++ * 2) {
	countBook++;
}
document.write('Số sách Bình cần cho minh: ',  countBook);

document.write('<br> <br>');
// BT4: 
// var marblesDung = 50;
// var blue_marbles;
// var red_marbles;
// var 

document.write('<br> <br>'); 
//BT5:
var totalMarbles = 120;
var redMarbles = totalMarbles / 5;
var blueMarbles = totalMarbles * (30/100);


document.write(blueMarbles);