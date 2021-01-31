let calculator = {
    read() {
        this.number1 = +prompt("Enter 1st number");
        this.number2 = +prompt("Enter 2nd number");
    },
    sum() {
        return this.number1+this.number2;
    },
    mul() {
        return this.number1*this.number2;
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());