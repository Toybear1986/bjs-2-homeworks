function parseCount(value) {
    let count = Number.parseFloat(value);
    if (isNaN(count)) {
        throw new Error("Невалидное значение")
    }
    return count;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    get area() {
        let p = this.perimeter / 2
        let area = parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
        return area;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() { return "Ошибка! Треугольник не существует" },
            get perimeter() { return "Ошибка! Треугольник не существует" },
        }
    }
}