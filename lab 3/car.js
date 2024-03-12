
var car1 = new Object();

car1.color = "red"; 
car1.maxSpeed = 200; 
car1.driver = { 
    name: "Lakhmaniuk Hanna", 
    category: "C",
    personalLimitations: "No driving at night" 
};
car1.tuning = true; 
car1.numberOfAccidents = 0;

car1.drive = function() {
    console.log("I am not driving at night");
};

var car2 = {
    color: "blue", 
    maxSpeed: 180, 
    driver: { 
        name: "Hanna Lakhmaniuk", 
        category: "B", 
        personalLimitations: null 
    },

    numberOfAccidents: 2 
};
car1.drive();


car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
   
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
 
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        // Підготовка повідомлення про поїздку
        var message = "Driver " + this.driver.name;
        message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        message += " and has " + this.driver.experience + " years of experience";
        
        // Виведення повідомлення у консоль
        console.log(message);
    }
};

var truck1 = new Truck("red", 5000, 60.5, "Volvo", "FH16");
var truck2 = new Truck("blue", 6000, 55, "Mercedes", "Actros");

truck1.AssignDriver("Lakhmaniuk Hanna", true, 5);
truck2.AssignDriver("Hanna Lakhmaniuk", false, 8);

console.log(truck1);


truck1.trip(); 
truck2.trip(); 

class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат - це геометрична фігура з чотирма однаковими сторонами та чотирма прямими кутами.");
        console.log("Властивості:");
        console.log("- side: довжина кожного боку квадрата.");
        console.log("- getArea(): повертає площу квадрата.");
        console.log("- getPerimeter(): повертає периметр квадрата.");
    }
    length() {
        return 4 * this.a; 
    }

    square() {
        return this.a * this.a; 
    }

    info() {
        console.log("Характеристика чотирикутника:");
        console.log("- Довжина всіх 4 сторін:", this.a);
        console.log("- Величина всіх 4 кутів: 90°");
        console.log("- Сума довжин сторін:", this.length());
        console.log("- Площа:", this.square());
    }
}




class Rectangle extends Square {
    constructor(a, b) {
        super(a); 
        this.b = b;
    }

    static help() {
        console.log("Прямокутник - це геометрична фігура з двома паралельними сторонами, що мають різну довжину.");
        console.log("Його площа обчислюється за формулою: S = a * b");
        console.log("Довжина всіх 4 сторін: 2 * (a + b)");
    }
    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log("Характеристика прямокутника:");
        console.log("- Довжина всіх 4 сторін:", this.length());
        console.log("- Величина всіх 4 кутів: 90°");
        console.log("- Сума довжин сторін:", this.length());
        console.log("- Площа:", this.square());
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log(" Ромб - це особлива геометрична фігура зі сторонами однакової довжини та внутрішніми кутами, які сумуються до 360 градусів.");
        console.log("Формули для обчислення властивостей ромба:");
        console.log("- Довжина сторін ромба (a): a = a (задається параметром конструктора)");
        console.log("- Площа ромба (S): S = (d1 * d2) / 2");
        console.log("- Довжина сторін ромба (a): a = sqrt((d1 * d2) / 2)");
        console.log("- Сума внутрішніх кутів ромба: 90°");
    }
    length() {
        return 4 * this.a;
    }
    square() {
        return this.a * this.a * Math.sin(this.alpha * (Math.PI / 180));
    }
    info() {
        console.log("Характеристика ромба:");
        console.log("- Сторона (a): " + this.a);
        console.log("- Тупий кут (alpha): " + this.alpha + " градусів");
        console.log("- Гострий кут (beta): " + this.beta + " градусів");
        console.log("- Сума довжин сторін: " + this.length());
        console.log("- Площа: " + this.square());
    }
    
}


class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }
    static help() {
        console.log(" Паралелограм - це чотирикутник з протилежними сторонами паралельними та рівними.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b * Math.sin(this.alpha * (Math.PI / 180));
    }

    info() {
        console.log("Характеристика паралелограма:");
        console.log("- Довжина всіх 4 сторін:", this.a);
        console.log("- Величина всіх 4 кутів:", this.alpha, "° і", this.beta, "°");
        console.log("- Сума довжин сторін:", this.length());
        console.log("- Площа:", this.square());
    }

    get a() {
        return this._a;
    }

    set a(value) {
        if (value > 0) {
            this._a = value;
        } else {
            console.log("Довжина сторони повинна бути додатнім числом.");
        }
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        if (value > 0 && value < 180) {
            this._alpha = value;
        } else {
            console.log("Кут alpha повинен бути від 0 до 180 градусів.");
        }
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        if (value > 0 && value < 180) {
            this._beta = value;
        } else {
            console.log("Кут beta повинен бути від 0 до 180 градусів.");
        }
    }
}

Square.help();

Rectangle.help();

Rhombus.help();

Parallelogram.help();

let mySquare = new Square(5);
mySquare.info();

const myRhombus = new Rhombus(5, 120, 60);
myRhombus.info();

const parallelogram = new Parallelogram(6, 4, 120, 60);

parallelogram.info(); 

let rectangle1 = new Rectangle(5, 8); 
rectangle1.info(); 


function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}
const triangle1 = Triangular();
console.log(triangle1);
const triangle2 = Triangular(6, 8, 10);
console.log(triangle2);

const triangle3 = Triangular(7, 7, 7);
console.log(triangle3);


function PiMultiplier(number) {
    return function() {
        return Math.PI * number;
    };  
}
const piTimes2 = PiMultiplier(2);
const piTimes2over3 = PiMultiplier(2 / 3);
const piDividedBy2 = PiMultiplier(1 / 2);
console.log(piTimes2()); 
console.log(piTimes2over3()); 
console.log(piDividedBy2()); 

function Painter(color) {
    return function(object) {
        if (object && object.type) {
            console.log(`Color: ${color}, Type: ${object.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}


const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const object1 = { maxSpeed: 280, type: "Truck" };
const object2 = { type: "Sportcar", avgSpeed: 90 };
const object3 = { color: "purple", loadCapacity: 2400, isCar: true };

PaintBlue(object1); 
PaintRed(object2); 
PaintYellow(object3); 
