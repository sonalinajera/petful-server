const Queue = require('../queue/Queue')
const store = require('../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------
//returns all in line for cats
// console.log(pets.cats.all())

// console.log(pets.cats)
module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const nextToBeAdopted = {
      cat: pets.cats.show(),
      dog: pets.dogs.show()
    }
    return nextToBeAdopted;
  },

  getAll(){
    const allPets = {
      cats: pets.cats.all(),
      dogs: pets.dogs.all()
    };
    return allPets; 
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'dogs') {
      pets.dogs.dequeue()
    } else if (type =='cats'){
      pets.cats.dequeue()
    }
    return this.get();
  }
}
