// 1. Biến trong javascrip 
// - Sử dụng chữ cái hoa hoặc thường, hoặc số hoặc dấu gạch ngang
// - Không bắt đầu bằng số
// - Không chứa ký tự đặc biệt
// - Không trùng với từ khóa của ngôn ngữ lập trình
// - Có ý nghĩa, bằng tiếng anh
// - Đặt theo quy tắc camel hoặc snake
// Bài tập: Đặt tên biến cho: Họ tên, Tuổi, ngày sinh, tỉnh thành
// Họ tên: full_name
// Tuổi: age
// Ngày sinh: birtday
// Tỉnh thành: address
// 2. Hàm trong Javascrip
// function

// function totalStudent() {
// 	return 50;
// }
// function total(x , y) {
// 	return x + y;
// }

function totalSum (a, b) {
	document.write(a+b);
}
//
totalSum(7, 8);
// Bốn cách để hiển thị javascrip
document.write("<h1> Demo show data</h1>");
document.getElementById("demo").innerHTML = "Hello World";
alert('test');
console.log('Test thử');

//Khai báo biến trong Javascipt
var userName;
var myAge = 20;

//Câu điều kiện trong Javascript
// if(điều kiện) {
// 	Nếu điều kiện đúng thực hiện, nếu sai thì ko thực hiện
// }
// if (điều kiện) {
// 	Nếu điều kiện đúng thực hiện ở đây
// } else {
// 	Nếu điều kiện sai thực hiện ở đây
// }
if (điều kiện 1) {
	Nếu điều kiện 1 đúng thì thực hiện ở đây
} else if (điều kiện 2) {
	Nếu điều kiện 2 đúng thực hiện ở đây
} else {
	Nếu đk 1 và 2 sai thì thực hiện ở đây
}

Câu điều kiện switch case
switch (biến) {
	case giá trị 1:
		Nếu thỏa mãn giá trị 1 thì thực hiện ở đây
		break;
	case giá trị 2:
		Nếu thỏa mãn giá trị 2 thì thực hiện ở đây 
		break;
	case giá trị 3:
		Nếu thỏa mãn giá trị 3 thì thực hiện ở đây 
		break;
	default:
		Nếu ko thỏa mãn tất cả các giá trị trên thì thực hiện câu lệnh ở đây
		break;
}

BT: Khai báo 2 biến ngày và tháng và cho giá trị ban đầu của 2 biến đó:
- Nếu tháng là 1, 3, 5, 7, 8, 10, 12 thì in ra là: tháng x có 31 ngày
- Nếu tháng là 4, 6, 9, 11 thì in ra là: tháng x có 30 ngày
- Nếu tháng là 2 thì in tùy thuộc vào năm nhuận hay không mà in ra tháng có 28 hay 29 ngày.