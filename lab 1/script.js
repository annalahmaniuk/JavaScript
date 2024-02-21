function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function validateInput(value, type) {
    const validTypes = ['leg', 'hypotenuse', 'angle'];
    if (value <= 0) return "Value must be greater than zero.";
    if (!validTypes.includes(type)) return "Invalid type. Valid types are 'leg', 'hypotenuse', and 'angle'.";
    if (type === 'angle' && (value <= 0 || value >= 90)) return "Angle must be between 0 and 90 degrees.";
    return "valid";
}

function triangle(value1, type1, value2, type2) {
    console.log("Usage: triangle(value1, 'type1', value2, 'type2'), where 'type' can be 'leg', 'hypotenuse', or 'angle'.");

    let validationMessage1 = validateInput(value1, type1);
    let validationMessage2 = validateInput(value2, type2);
    if (validationMessage1 !== "valid") {
        console.log(validationMessage1);
        return "failed";
    }
    if (validationMessage2 !== "valid") {
        console.log(validationMessage2);
        return "failed";
    }

    let a, b, c, alpha, beta;

    if (type1 === 'angle' || type2 === 'angle') {
        let angle, side;
        if (type1 === 'angle') {
            angle = toRadians(value1);
            side = value2;
        } else {
            angle = toRadians(value2);
            side = value1;
        }

        if ((type1 === 'angle' && type2 === 'leg') || (type2 === 'angle' && type1 === 'leg')) {
            a = side;
            alpha = toDegrees(angle);
            c = a / Math.sin(angle);
            b = Math.sqrt(c * c - a * a);
            beta = 90 - alpha;
        } else if ((type1 === 'angle' && type2 === 'hypotenuse') || (type2 === 'angle' && type1 === 'hypotenuse')) {
            c = side;
            alpha = toDegrees(angle);
            a = Math.sin(angle) * c;
            b = Math.sqrt(c * c - a * a);
            beta = 90 - alpha;
        } else {
            console.log("Invalid combination of arguments.");
            return "failed";
        }
    } else {
        if (type1 === 'leg' && type2 === 'leg') {
            a = value1;
            b = value2;
            c = Math.sqrt(a * a + b * b);
            alpha = toDegrees(Math.atan(a / b));
            beta = 90 - alpha;
        } else if (type1 === 'hypotenuse' || type2 === 'hypotenuse') {
            c = (type1 === 'hypotenuse') ? value1 : value2;
            let leg = (type1 === 'hypotenuse') ? value2 : value1;
            if (c <= leg) {
                console.log("Hypotenuse must be greater than any leg.");
                return "failed";
            }
            a = leg; // Assuming the given leg is 'a'
            b = Math.sqrt(c * c - a * a);
            alpha = toDegrees(Math.atan(a / b));
            beta = 90 - alpha;
        } else {
            console.log("Invalid combination of arguments.");
            return "failed";
        }
    }

    console.log(`c (hypotenuse) = ${c.toFixed(2)}, a (leg) = ${a.toFixed(2)}, b (leg) = ${b.toFixed(2)}, alpha (angle) = ${alpha.toFixed(2)}°, beta (angle) = ${beta.toFixed(2)}°`);
    return "success";
}

// Демонстрація використання:
console.log(triangle(4, "leg", 8, "hypotenuse")); // Приклад коректного використання
console.log(triangle(30, "angle", 8, "leg")); // Інший приклад
