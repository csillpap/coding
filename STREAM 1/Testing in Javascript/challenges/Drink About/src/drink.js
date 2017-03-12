function whatCanIDrink (age) {
	if (age < 0){
		return "Sorry. I cant tell what drink because that age is incorrect!";
	}
	else if (age < 14) {
		return "Drink Toddy";
	}
	else if (age < 18) {
		return "Drink Coke";
	}
	else if (age < 21) {
		return "Drink Beer";
	}
	else if (age < 130) {
		return "Drink Whisky";
	}
	else {
		alert ("Sorry. I cant tell what drink because that age is incorrect!");
	}
	
};