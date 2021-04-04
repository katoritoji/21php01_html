var images = [
        src ="img/1.jpg",
        src ="img/2.jpg",
        src ="img/3.jpg"
    ];
var a = [
    	"Cầu sông Hàn",
    	"Cầu Rồng",
    	"Cầu Trần Thị Lý"
    ];
var num = 0;

function next() {
    var change_image = document.getElementById("change_image");
    var text = document.getElementById("text");
    num++;
    if(num >= images.length)
    if(num >= a.length) {
        num = 0;
    }
    change_image.src = images[num];
    text.innerHTML = a[num];
}

function prev() {
    var change_image = document.getElementById("change_image");
    var text = document.getElementById("text");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    change_image.src = images[num];
    text.innerHTML = a[num];
}

    // var a = [
    // 	"Ảnh 1",
    // 	"Ảnh 2",
    // 	"Ảnh 3"
    // ];
    // var i = 0;
    // function next() {
    // 	var text = document.getElementById("text");
    // 	i++;
    // if(i >= a.length) {
    //     i = 0;
    // }
    // text.innerHTML = a[i];
    // }
