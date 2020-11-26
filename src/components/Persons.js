import React, { useState } from 'react'
import { getPeople, addPerson, flushDB, removePerson } from '../lib/db'
import addImage from '../images/add (1).svg'
import DeleteIcon from '../images/delete.svg'
import Person from '../components/Person'
import InputPopup from '../components/InputPopup'
// import Popup from 'react-animated-popup'

// Formulera en datastruktur som liknar den som är i countries som vi haft i labben.

// Show present false? När är den true?
function Persons ({ showPresent = false }) {
  const [people, setPeople] = useState(getPeople())
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  console.log(people)

  const deletePerson = (id) => {
    removePerson(id)
    setPeople([...getPeople()])
  }

  const PeopleElements = people.map(person => <Person person={person} key={person.id} onDelete={deletePerson} />)
  //  const PeopleElements = people.map(person => <div className='PersonElement'><p key={person.id}>{person.name}</p><img src={DeleteIcon} alt='DeleteIco' onClick={removePerson(person.id)} onClick={setPeople([...getPeople()])} /> </div>)

  // Listan flyttas om man lägger till massa personer

  // const add = () => {
  //   setPopupIsOpen(true)  // setPeople([...getPeople()])
  // }

  const handleAddPerson = (name) => {
    setPopupIsOpen(false)
    console.log(name)
    addPerson(name)
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
      <InputPopup visible={popupIsOpen} onClose={() => setPopupIsOpen(false)} onDone={handleAddPerson} />
      <img src={addImage} alt='add' onClick={() => setPopupIsOpen(true)} className='addImg' />
      <button onClick={deleteAll}> <img height={30} src={DeleteIcon} alt='delete' /></button>
    </div>
  )
}
export default Persons
