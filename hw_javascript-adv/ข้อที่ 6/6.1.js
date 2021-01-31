function Calculator() {
    this.read = function() {
        this.number1 = +prompt("Enter 1st number");
        this.number2 = +prompt("Enter 2nd number");
    }
    this.sum = function() {
        return this.number1+this.number2; 
    }
    this.mul = function() {
        return this.number1*this.number2;
    }
}

let calculator = new Calculator();