function changeNumber(number) {
	document.getElementById('show').value += number;
}
function clean() {
	document.getElementById('show').value = '';
}
function changeSign(sign) {
	document.getElementById('show').value += sign;
}
function kq() {
	document.getElementById('show').value = eval(caculator.show.value);
}
