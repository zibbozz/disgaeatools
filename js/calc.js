let iwRankElement, iwFloorElement, iwBillElement;
let levelElement, rangeLevelElement, gatekeeperLevelElement;

function init(){
	iwRankElement = document.getElementById("rank");
	iwFloorElement = document.getElementById("floor");
	iwBillElement = document.getElementById("bills");

	levelElement = document.getElementById("avLevel");
	rangeLevelElement = document.getElementById("rangeLevel");
	gatekeeperLevelElement = document.getElementById("gatekeeperLevel");
}

function calc(){
	let Item_Rank = parseInt(iwRankElement.value);
	let Item_Floor = parseInt(iwFloorElement.value);
	let Stronger_Enemy_Bills = parseInt(iwBillElement.value);

	let Modifier_Stronger_Enemy_Bills = parseFloat(Stronger_Enemy_Bills * 0.2);

	let Base_Level = Math.floor((Item_Rank + 5) * (Item_Rank + 6) * 0.05) + (Math.floor(Item_Rank / 39) * 51) + (Math.floor(Item_Rank / 40) * 146);
	let Average_Level = Base_Level * (Item_Floor + 9 + 5 * Math.floor((Item_Floor - 1) * 0.1)) * 0.10;
	let Modified_Average_Level = Math.floor(Average_Level * (1 + Modifier_Stronger_Enemy_Bills) + ((Modifier_Stronger_Enemy_Bills) * 10))	
	let Average_Enemy_Level = Modified_Average_Level; if (Average_Enemy_Level >= 9999) {Average_Enemy_Level = 9999};
	let Enemy_Level_Range = Math.floor(Modified_Average_Level * 0.85) + " - " + Math.floor(Modified_Average_Level * 1.15); if (Math.floor(Modified_Average_Level * 0.85) >= 8499) {Enemy_Level_Range = "8499 - 9999"} else if (Math.floor(Modified_Average_Level * 1.15) >= 9999) {Enemy_Level_Range = Math.floor(Modified_Average_Level * 0.85) + " - 9999"};
	let GateKeeper_Level_Range = Modified_Average_Level + " - " + Math.floor(Modified_Average_Level * 1.30); if (Modified_Average_Level >= 9999) {GateKeeper_Level_Range = "9999"} else if ((Modified_Average_Level * 1.30) >= 9999) {GateKeeper_Level_Range = Modified_Average_Level + " - 9999"};

	levelElement.innerHTML = Average_Enemy_Level;
	rangeLevelElement.innerHTML = Enemy_Level_Range;
	gatekeeperLevelElement.innerHTML = GateKeeper_Level_Range;
}

function checkRank(){
	let value = parseInt(iwRankElement.value);
	if(value < 1){
		iwRankElement.value = "1";
	} else if (value > 40){
		iwRankElement.value = "40";
	}
}

function checkFloor(){
	let value = parseInt(iwFloorElement.value);
	if(value < 1){
		iwFloorElement.value = "1";
	} else if (value > 100){
		iwFloorElement.value = "100";
	}
}

function checkBills(){
	let value = parseInt(iwBillElement.value);
	if(value < 0){
		iwBillElement.value = "0";
	} else if (value > 20){
		iwBillElement.value = "20";
	}
}