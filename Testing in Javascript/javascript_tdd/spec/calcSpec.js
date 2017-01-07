describe("Calculator", function() {
 
    var calc = new Calculator();
	beforeEach(function() {
        calc = new Calculator();
    });
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
	
	describe('Subtraction function', function() {
        it('should subtract one number from the other and return the result', function() {
            calc.add(5);
            calc.subtract(2);
            expect(calc.value).toBe(3);
        });
 
        it("should not return 3 if the result of the subtraction is not 3", function() {
            calc.add(12);
            calc.subtract(7);
            expect(calc.value).toBe(5);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.subtract();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
	
	describe('Multiplication function', function() {
        it('should multiply a number by another and return the result', function() {
            calc.add(5);
            calc.multiply(2);
            expect(calc.value).toBe(10);
        });
 
        it("should not return 10 if the result of the multiplication is not 10", function() {
            calc.add(2);
            calc.multiply(7);
            expect(calc.value).toBe(14);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.subtract();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
	
	describe('Division function', function() {
        it('should divide one number by another and return the result', function() {
            calc.add(6);
            calc.divide(2);
            expect(calc.value).toBe(3);
        });
 
        it("should not return 3 if the result of the division is not 3", function() {
            calc.add(12);
            calc.divide(6);
            expect(calc.value).toBe(2);
        });
 
        it("should have called the alert function if the number given is undefined or if we are trying to divide by 0", function() {
            spyOn(window, "alert");
            calc.divide();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number but cannot be 0");
        });
    });
});