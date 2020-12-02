import React, { useState } from 'react'
import Popup from 'react-animated-popup'
import Button from './Button'
import stringIsNumeric from 'string-is-numeric'
import Spacer from './Spacer'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

const TextArea = styled.textarea`
width: 100%;
height: 150px;
`

function InputPopup ({ keyValue, visible, onClose, onDone, numerical = false }) {
  console.log(keyValue)
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const [desc, setDesc] = useState('')

  const handleInputChange = (e) => {
    if (stringIsNumeric(e.target.value)) { // är det numeriskt?
      setCost(e.target.value)
    }
  }

  const handleDone = () => {
    onDone({ name: name, cost: cost, desc: desc })
    setName('')
    setCost('')
    setDesc('')
  }

  return (
    <div className='popupContainer'>
      <Popup className='PersonPopup' key={keyValue} visible={visible} onClose={onClose}>
        <p>Namn</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <Spacer />
        <p>Pris</p>
        <input value={cost} onChange={handleInputChange} />
        <Spacer />
        <p>Beskrivning</p>
        <TextArea value={desc} onChange={(e) => setDesc(e.target.value)} />
        <Spacer />
        <Button enabled={name && cost} onClick={() => handleDone()}>BEKRÄFTA</Button>
        <Spacer />
        <Button onClick={onClose}>AVBRYT</Button>
      </Popup>
    </div>
  )
}

export default InputPopup
