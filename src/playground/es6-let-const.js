var nameVar = 'Raul';
var nameVar = 'Raul Barboz';
console.log('name var:', nameVar);

let nameLet = 'Raul';
nameLet = 'Raul Barboz';
console.log('name let:', nameLet);

const nameConst = 'Raul';
console.log('name const:', nameConst);

// not outside scope
function getPetName(){
  var petName = 'hal';
  return petName;
}

getPetName();
console.log(petName);
