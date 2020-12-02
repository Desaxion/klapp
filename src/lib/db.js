// Detta är databasen :)
import { v4 as uuidv4 } from 'uuid'
import Persons from '../components/Persons'

// let db = null
// let db = {
//   people: [
//     {
//       name: 'DummyPerson',
//       id: 213415246456
//       presents: [
//            {
//            name: 'myPresent'
//            cost: 9999
// desc
//            presentid =
//          }
//        ]
//     }
//   ]
// }

function saveStorage (db) {
  window.localStorage.setItem('storage', JSON.stringify(db))
}

function loadStorage () {
  const dbString = window.localStorage.getItem('storage')
  let retrevedData = JSON.parse(dbString)

  if (!retrevedData) {
    // Initiate data structure
    retrevedData = { people: [] }
    saveStorage(retrevedData)
  }
  return retrevedData
}

export function getPeople () {
  return loadStorage().people
}

export function getPresents (id) {
  const targetedPerson = loadStorage().people.filter(person => person.id === id)[0]
  console.log(targetedPerson)
  return targetedPerson.presents
}

export function addPerson (personName) {
  const newPerson = {
    name: personName,
    id: uuidv4(),
    presents: []
  }

  const tempStorage = loadStorage()
  tempStorage.people.push(newPerson)
  saveStorage(tempStorage)
}

export function flushDB () {
  window.localStorage.setItem('storage', null)
}

export function addPresent (presentName, presentCost, presentDesc, personid) {
  const newPresent = {
    name: presentName,
    cost: presentCost,
    desc: presentDesc,
    id: uuidv4()
  }
  // let igenom eran databas efter ert id
  // lägg till present
  const tempStorage = loadStorage()
  const updatedPeopleList = tempStorage.people.map(person => {
    if (person.id === personid) {
      person.presents.push(newPresent)
    }
    return person
  })
  tempStorage.people = updatedPeopleList
  console.log(tempStorage)
  saveStorage(tempStorage)
}

export function removePresent (id) {
  // Ladda in present Array
  const tempStorage = loadStorage()
  tempStorage.people.map(person => {
    person.presents = person.presents.filter(present => present.id !== id)
    return person
  })
  saveStorage(tempStorage)
}

export function removePerson (id) {
  // använd filter!
  // modifiera db filen
  // spara!
  const newDb = loadStorage()
  const updatedPeople = loadStorage().people.filter(person => person.id !== id)
  newDb.people = updatedPeople
  saveStorage(newDb)
}
