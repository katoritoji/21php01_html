var a = 2000;
var b = 200;
document.write("Số kẹo mua lúc đầu là: " + (a / b));
var c = a / b;
document.write('<br>');
document.write("Số kẹo sau khi đổi vỏ lần 1 là: " + (c / 2));
var d = c / 2;
document.write('<br>');
document.write("Số kẹo sau khi đổi vỏ lần 2 là: " + (Math.floor( d / 2)));
var e = Math.floor(d / 2);
document.write('<br>');
document.write("Số kẹo sau khi đổi vỏ lần 3 là: " + (e / 2));
var f = e / 2;
document.write('<br>');
document.write("Số kẹo sau khi đổi vỏ lần 4 (số vỏ còn dư lại sau khi đổi lần 2 + vỏ kẹo đổi lần 3) là: " + (5 % 2 + f) / 2);
var g = (5 % 2 + f) / 2;
document.write('<br>');
document.write("Tổng số kẹo đổi được là: " + (c + d + e + f + g));
