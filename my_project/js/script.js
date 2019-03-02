var goods = {
	"apple" : {
		"name": "Яблоки",
		"cost": 230,
		"amount":300
	},
	"pear" : {
		"name": "Груши",
		"cost": 34,
		"amount":100
	},
	"apricot" : {
		"name": "Абрикосы",
		"cost": 23,
		"amount":201
	},
	"plum" : {
		"name": "Сливы",
		"cost": 21,
		"amount":250
	},
	"cherry" : {
		"name": "Вишни",
		"cost": 250,
		"amount":312
	},
};
var cost ;
var amount;
var out =" ";
for ( var key in goods){
   cost = goods[key].cost;
   amount = goods[key].amount;
   if ( cost > 220 && cost < 300 && amount > 200){
      out += "Наименование :" +  goods[key].name + "<br>";
      out += "Цена :" + goods[key].cost + "<br>";
      out += "Количество :" + goods[key].amount + "<br>"+"<br>";

   };
   document.getElementById("out").innerHTML = out;
};