class Person {
  constructor(firstName, lastName, age, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dob = new Date(dob);
  }

  greet() {
    return `Hello, my name is ${this.name} and I was born on ${this.dob}.`;
  }
  getFullname() {
    return `My full name is ${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("Pranish", "khanal", 22, "03-04-2004")

console.log(person1.getFullname());