import React, { useState } from 'react'
import './App.css'
import { getPeople, addPerson, flushDB, removePerson } from './db'
import addImage from './add (1).svg'
import PersonComp from './PersonComp'
import Home from './Home'
import DeleteIcon from './delete.svg'
import List from './listwhite.svg'
import Budget from './Budget.svg'
// import manImage from './man-user (1).svg'
import Person from './Person'

// Formulera en datastruktur som liknar den som är i countries som vi haft i labben.

function Persons ({ showPresent = false }) {
  const [people, setPeople] = useState(getPeople())
  console.log(people)

  const deletePerson = (id) => {
    removePerson(id)
    setPeople([...getPeople()])
  }

  const PeopleElements = people.map(person => <Person person={person} onDelete={deletePerson} />)
  //  const PeopleElements = people.map(person => <div className='PersonElement'><p key={person.id}>{person.name}</p><img src={DeleteIcon} alt='DeleteIco' onClick={removePerson(person.id)} onClick={setPeople([...getPeople()])} /> </div>)

  // Listan flyttas om man lägger till massa personer

  const add = () => {
    // get user input!
    addPerson('Gunnar')
    setPeople([...getPeople()])
  }

  const deleteAll = () => {
    flushDB()
    // det är att react tror att det är samma object för att den har gamla addressen så vi måste skapa en ny kopia
    setPeople([...getPeople()]) // Vad betyder ...? Shallow copy
  }

  return (
    <div>
      {PeopleElements}

      <img src={addImage} alt='add' onClick={add} className='addImg' />
      <button onClick={deleteAll}> <img height={30} src={DeleteIcon} alt='delete' /></button>
    </div>
  )
}
export default Persons
