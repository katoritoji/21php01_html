var myArray = ["Nam", "Nguyen", "Huy"];
var myArray2 = ["Nam", "Nguyen", "Huy", "Nam", "Nguyen", "Huy", "Nam", "Nguyen", "Huy"];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[1]);

// In ra mảng:
// 1. 
// 2.
// 3.

for (var i = 0; i < myArray.length; i++) {
	document.write(i+1 + '.' + myArray[i] + '<br>');
}

var myArray3 = [1, 4, 2, 5, 8, 2, 11, 55, 5, 155];
var tg;

for (var i = 0; i < myArray3.length - 1; i++) {
	for (var j = i + 1; j < myArray3.length; j++) {
		if (myArray3[i] < myArray3[j]) {
			tg = myArray3[i];
			myArray3[i] = myArray3[j];
			myArray3[j] = tg;
		}
	} 
}
document.write('Mạng đã sắp xếp: ' + myArray3 + '<br> <br>');

var myArray4 = [
				['Nam', 1990, 'nam@gmail.com', '123456789'],
				['Huong', 2000, 'huong@gmail.com', '987654'],
				['Huy', 2001, 'huy@gmail.com', '0909827189']
]
// document.write(myArray4[1][0] + '-'+ myArray4[1][1]);
//In ra danh sách 
// for (var i = 0; i < myArray4.length; i++) {
// 	for (var j = 1; j <=i; j++ ){
// 		document.write(myArray4[j] + '<br> <br>');
// 	}
// }


var myArray5 = [
				{name:'Họ tên', age:'Tuổi', mail:'Email', add:'Quê quán'},
				{name:'Nguyễn Văn Nam', age: 30, mail: 'nam@gmail.com', add: 'Đà Nẵng'},
				{name: 'Nguyễn Thị Hương', age: 19, mail: 'huong@gmail.com', add: 'Đà Nẵng'},
				{name: 'Nguyễn Huy', age: 20, mail: 'huy@gmail.com', add: 'Hà Tĩnh'}
];
for (var a = -1; a < myArray5.length - 1; a++) {
	document.write(a+1, '. ', myArray5[a+1].name, ' - ', myArray5[a+1].age, ' - ', myArray5[a+1].mail, ' - ', myArray5[a+1].add, '<br>');
}
var newArray = myArray5.push (
				{name:'Hoàng Văn A', age: 25, mail:'hoang@gmail.com', add:'Hà Tĩnh'},
				{name:'Nguyễn Văn B', age: 31, mail: 'b@gmail.com', add: 'Đà Nẵng'}
				);
// for (var b = -1; b < newArray.length - 1; b++) {
// 	document.write(b+1, '. ', newArray[b+1].name, ' - ', newArray[b+1].age, ' - ', newArray[b+1].mail, ' - ', newArray[b+1].add, '<br>');
// }
