function validate() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var title = document.getElementById('title').value;
	var content = document.getElementById('content').value;
	if (name == ''){
		document.getElementById("error-name").innerText = "Vui lòng nhập tên của bạn";
		document.getElementById("error-name").style.color = "red";
		document.getElementById("error-name").style.fontStyle = "italic";
	} else {
		document.getElementById("error-name").innerText = "";
	}
	
	if (email == ''){
		document.getElementById("error-email").innerText = "Vui lòng nhập email";
		document.getElementById("error-email").style.color = "red";
		document.getElementById("error-email").style.fontStyle = "italic";
	} else {
		document.getElementById("error-email").innerText = "";
	}
	
	if (title == ''){
		document.getElementById("error-title").innerText = "Vui lòng nhập tiêu đề";
		document.getElementById("error-title").style.color = "red";
		document.getElementById("error-title").style.fontStyle = "italic";
	} else {
		document.getElementById("error-title").innerText = "";
	}
	
	if (content == ''){
		document.getElementById("error-content").innerText = "Vui lòng nhập nội dung";
		document.getElementById("error-content").style.color = "red";
		document.getElementById("error-content").style.fontStyle = "italic";
	} else {
		document.getElementById("error-content").innerText = "";
	}
}
