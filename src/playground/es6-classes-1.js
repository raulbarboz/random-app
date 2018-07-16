class Person {
  constructor(name = 'Anonymous') {
    this.name = name;
  }
  getGretting() {
    //return this.name + ' says Hi!';
    return `Hi. I am ${this.name}`
  }
}

const me = new Person('Raul Barboza');
console.log(me.getGretting());

const other = new Person();
console.log(other.getGretting());
