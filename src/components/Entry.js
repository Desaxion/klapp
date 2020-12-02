import React, { useState } from 'react'
import Button from './Button'
import InputPresPop from './InputPresPop'
import { getPresents, addPresent, removePresent } from '../lib/db'
import Present from './present'
import YesNoPopup from './YesNoPopup'

function Entry ({ person }) {
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [presents, setPresents] = useState(getPresents(person.id))
  const [deleteVisible, setDeleteVisible] = useState(false)
  const [currentPresent, setCurrentPresent] = useState()

  const handleAddPresent = (present) => {
    setPopupIsOpen(false)
    console.log(present.name)
    addPresent(present.name, present.cost, present.desc, person.id)
    setPresents([...getPresents(person.id)])
  }

  const handleRemovePresent = () => {
    removePresent(currentPresent.id)
    setPresents(getPresents(person.id))
    setCurrentPresent()
    setDeleteVisible(false)
  }

  const handleTrashClick = (present) => {
    setCurrentPresent(present)
    setDeleteVisible(true)
  }

  const PresentElements = presents.map(present => <Present present={present} key={present.id} onDelete={handleTrashClick} />)

  return (
    <div className='Entry'>
      <YesNoPopup keyValue='DeleteThePresentPopup' visible={deleteVisible} onYes={handleRemovePresent} onClose={() => setDeleteVisible(false)}>Vill du verkligen ta bort {currentPresent && currentPresent.name}</YesNoPopup>
      <InputPresPop keyValue='InputPresent' visible={popupIsOpen} onClose={() => setPopupIsOpen(false)} onDone={(present) => handleAddPresent(present)} children={<p className='aText'>Lägg till en present åt {person.name}</p>} />
      {person.name}
      {PresentElements}
      <Button onClick={() => setPopupIsOpen(true)} children={<p>+</p>} />
    </div>
  )
}

export default Entry
