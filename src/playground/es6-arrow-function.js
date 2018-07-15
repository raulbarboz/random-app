const user = {
  name: 'Raul',
  cities: ['Sao Paulo', 'Mongagua'],
  printPlacesLived() {

    //modify arrays
    return this.cities.map((city) => city + ' cool')

    //single loop
    /*this.cities.forEach((city) => {
      console.log(city);
    })*/
  }
}

console.log(user.printPlacesLived());
