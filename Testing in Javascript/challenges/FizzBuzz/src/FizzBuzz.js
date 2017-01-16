function FizzBuzz (number) {
		if (typeof(number) !== "number") {
			alert("Argument must be a number!");
		}
		else if ((number % 3) == 0 && (number % 5) == 0) {
			return "FizzBuzz";
		}
		else if ((number % 3) == 0) {
			return "Fizz";
		}
		else if ((number % 5) == 0) {
			return "Buzz";
		}
		else {
			return number;
		}
	
	};