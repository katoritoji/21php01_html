var myString = "An empty street, an empty house A hole inside my heart Im all alone";
//Chiều dài của chuỗi
var lengString = 0;
lengString = myString.length;
document.write(lengString);
document.write('<br>');
//Kiểm tra vị trí của ký tự trong chuỗi
var positionN = 0;
positionN = myString.indexOf('n')
document.write(positionN);
document.write('<br>');

var positionZ = 0;
positionZ = myString.indexOf('z')
console.log(positionZ);


var positionNlast = 0;
positionNlast = myString.lastIndexOf('n');
document.write(positionNlast);
document.write('<br>');

//Cắt chuỗi trong chuỗi
//Cắt từ vị trí đến vị trí:
var myCutString = "";
myCutString = myString.substring(5, 9);
document.write(myCutString);
document.write('<br>');

//Cắt từ vị trí. với độ dài bao nhiêu
var myCutString2 = "";
myCutString2 = myString.substr(5, 9);
document.write(myCutString2);
document.write('<br>');
//Thay thế chuỗi trong chuỗi
var newString = "";
newString = myString.replace("An" , "A");
document.write(newString);
document.write('<br>');

//Chuyển thành chữ hoa hoặc chữ thường toàn bộ chuỗi
var upperString = "";
var lowerString = "";
upperString = myString.toUpperCase();
lowerString = myString.toLowerCase();
document.write(upperString);
document.write('<br>');
document.write(lowerString);

