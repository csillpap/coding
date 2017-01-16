describe ("FizzBuzz test", function() {
	var number = 0; 
	while (number < 100) {
		FizzBuzz(number); //will execute the FizzBuzz function until the condition of the while loop is true
		number++; //after executing the function it will increase the number by 1 until reaching 100
		//console.log(FizzBuzz(number));
	} 
	describe('FizzBuzz', function() {
			it("should call the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            FizzBuzz();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number!");
			});
			it('should return FizzBuzz if the number can be divided by 5 and 3', function() {
				expect(FizzBuzz(15)).toBe("FizzBuzz");
			});
			it('should return Fizz if the number can be divided by 3', function() {
				expect(FizzBuzz(9)).toBe("Fizz");
			});
			it('should return Buzz if the number can be divided by 5', function() {
				expect(FizzBuzz(10)).toBe("Buzz");
			});
			it('should return the number itself if cant be divided by 3 or 5', function() {
				expect(FizzBuzz(17)).toBe(17);
			});
		});
	});