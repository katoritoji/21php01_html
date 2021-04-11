var candy = 0;
var candySell = 0;
var money = 2000;
var price = 200;
candy = money / price;
candySell = candy;

while (candySell > 1) {
	candySell = candySell - 2;
	candy++;
	candySell++;
}
document.write('Số kẹo là: ',candy);