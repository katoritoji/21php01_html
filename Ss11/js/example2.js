
// var myName = "Nguyễn Văn A";
// document.write(myName);
// document.write('<br>');

// var lengName = 0;
// lengName = myName.substring(0, 6).length;
// document.write(lengName);
// document.write('<br>');
// lengName = myName.substring(7, 10).length;
// document.write(lengName);
// document.write('<br>');
// lengName = myName.substring(9, 10).length;
// document.write(lengName);
// document.write('<br>');

// var newString = "";
// newString = myName.replace("A", "21PHP01");
// document.write(newString);
// document.write('<br>');

// var lengN = 0;
// lengN = myName.indexOf('n').length;
// document.write(lengN);

var myName = "Nguyễn Văn A";

var firstSpace = myName.indexOf(' ');
var myFirstName = myName.substring(0, firstSpace);
document.write('<br> First name: ');
document.write(myFirstName);

var lastSpace = myName.lastIndexOf(' ');
var myLastName = myName.substring(lastSpace, myName.length);
document.write('<br> Last name: ');
document.write(myLastName);

var middleName = myName.substring(firstSpace, lastSpace);
document.write('<br> Middle name: ');
document.write(middleName);

var countChar = 0;
var findChar = 'n';
var positionChar = 0;

//Chuyển chuỗi và ký tự cần tìm về 1 kiểu hoa hoặc thường
myName = myName.toLowerCase();
findChar = findChar.toLowerCase();

while (myName.indexOf(findChar) > -1) {
	//Vị trí của ký tự tìm được
	positionChar = myName.indexOf(findChar);
	myName = myName.substring(positionChar + 1, myName.length);
	countChar++;
}
document.write('<br> Số ký tự ', findChar, ' trong tên là: ');
document.write(countChar);

