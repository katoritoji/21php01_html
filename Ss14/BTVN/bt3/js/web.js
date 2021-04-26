var images = [
        src ="img/1.jpg",
        src ="img/2.jpg",
        src ="img/3.jpg"
    ];
var num = 0;

function next() {
    var change_image = document.getElementById("change_image");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    change_image.src = images[num];
}

function prev() {
    var change_image = document.getElementById("change_image");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    change_image.src = images[num];
}
window.setInterval(function() {
$(".next").click();
}, 3000);