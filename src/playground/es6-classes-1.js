class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    //return this.name + ' says Hi!';
    return `Hi. I am ${this.name}`
  }
  getDescription() {
    //return this.name + ' says Hi!';
    return `${this.name} is ${this.age} years old`
  }
}

const me = new Person('Raul Barboza', 31);
console.log(me.getGretting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGretting());
