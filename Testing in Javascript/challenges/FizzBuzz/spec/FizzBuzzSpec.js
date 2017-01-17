
	
	
describe ("FizzBuzz test", function() {
 
	describe('FizzBuzz', function() {

		function test_hundred_times(x) {

			it('Test for number '+ x +'. Should return FizzBuzz if the number can be divided by 5 and 3', function() {
				expect( FizzBuzz(x) ).toBe("FizzBuzz");
			});
			it('Test for number '+ x +'. Should return Fizz if the number can be divided only by 3', function() {
				expect( FizzBuzz(x) ).toBe("Fizz");
			});
			it('Test for number '+ x +'. Should return Buzz if the number can be divided only by 5', function() {
				expect( FizzBuzz(x) ).toBe("Buzz");
			});
			it('Test for number '+ x +'. Should return number if the number can not be divided by 5 or by 3', function() {
				expect( FizzBuzz(x) ).toBe(x);
			});
		}

		for(var x = 1; x <= 100; x++) {
		    test_hundred_times(x);
		}

	});

}); 