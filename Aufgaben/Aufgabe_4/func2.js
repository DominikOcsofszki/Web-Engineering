function Car(plate) {
    this.plate = plate;
}
Car.prototype.equals = function (other) {
    return this.plate === other.plate;
};

function Person(name) {
    this.name = name;
    this.cars = [];
}

Person.prototype.addCar = function (car) {
    this.cars.push(car);
};

function conflictBetweenPerson(person1, person2) {
    for (let i = 0; i < person1.cars.length; i++) {
        for (let j = 0; j < person2.cars.length; j++) {
            if (person1.cars[i].equals(person2.cars[j])) {
                return true;
            }
        }
    }
    // return person1.car.plate === person2.car.plate;
    return false;
}
function conflict(persons) {
    for (let person1 of persons) {
        for (let person2 of persons) {
            if (person1 === person2) {
                continue;
            }
            if (conflictBetweenPerson(person1, person2)) {
                return true;
            }
        }
    }
    return false;
}

// Tests
let p = new Person('Paula');
p.addCar(new Car('ABC-123'));
p.addCar(new Car('PIO-456'));

let q = new Person('Julia');
q.addCar(new Car('AB-123'));
q.addCar(new Car('GHI-789'));
let r = new Person('Paul');
r.addCar(new Car('XDE-123'));
r.addCar(new Car('XBE-789'));

let f = new Person('Alex');
f.addCar(new Car('XDE-123'));
f.addCar(new Car('XBE-789'))

console.assert(conflict([p, q, r]) === false);
console.assert(conflict([p, q, r,f]) === true);