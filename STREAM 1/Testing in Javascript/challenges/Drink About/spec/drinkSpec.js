describe("whatCanIDrink", function() {
	it ("should return 'Sorry. I cant tell what drink because that age is incorrect!' if the age is less than 0", function () {
		expect(whatCanIDrink(-1)).toBe("Sorry. I cant tell what drink because that age is incorrect!");
	});
	/* check if our code would still return 'Sorry. I cant tell what drink because that age is incorrect!' if we use another number which is less than 0 */
	it ("should still return 'Sorry. I cant tell what drink because that age is incorrect!' even if the age is different as -1 but still less than 0", function() {
		expect(whatCanIDrink(-10)).toBe("Sorry. I cant tell what drink because that age is incorrect!");
	});
	it ("should return 'Drink Toddy' if the age is between 0 and 14 excluding 14", function () {
		expect(whatCanIDrink(10)).toBe("Drink Toddy");
	});
	it ("should return 'Drink Coke' if the age is between 14 and 18 excluding 18", function () {
		expect(whatCanIDrink(16)).toBe("Drink Coke");
	});
	it ("should return 'Drink Beer' if the age is between 18 and 21 excluding 21", function () {
		expect(whatCanIDrink(19)).toBe("Drink Beer");
	});
	it ("should return 'Drink Whisky' if the age is between 21 and 130 excluding 130", function () {
		expect(whatCanIDrink(50)).toBe("Drink Whisky");
	});
	it ("should return 'Sorry. I cant tell what drink because that age is incorrect!' if the age is 130 or more or is undefined", function () {
		spyOn(window, "alert");
		whatCanIDrink();
		expect(window.alert).toHaveBeenCalledWith("Sorry. I cant tell what drink because that age is incorrect!");
	});
});