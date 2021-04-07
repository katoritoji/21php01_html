function pic() {
	document.getElementById("change-img").src = "img/1.jpg";
	document.getElementById("change-name").innerHTML = "Ảnh 1";
	document.getElementById("change-age").innerHTML = "1";
}
function changeInfo(image, name, age) {
	document.getElementById("change-img").src = image;
	document.getElementById("change-name").innerHTML = name;
	document.getElementById("change-age").innerHTML = age;
}