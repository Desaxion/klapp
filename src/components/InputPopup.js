import React, { useState } from 'react'
import Popup from 'react-animated-popup'
import Button from './Button'
import stringIsNumeric from 'string-is-numeric'
import Spacer from './Spacer'
import { v4 as uuidv4 } from 'uuid'

function InputPopup ({ children, visible, onClose, onDone, numerical = false }) {
  const [string, setString] = useState('')

  const handleInputChange = (e) => {
    if (numerical) { // vill de ha numeriskt?
      if (stringIsNumeric(e.target.value)) { // är det numeriskt?
        setString(e.target.value)
      }
    } else {
      setString(e.target.value)
    }
  }

  const handleDone = () => {
    onDone(string)
    setString('')
  }

  return (
    <div className='popupContainer'>
      <Popup className='PersonPopup' id={uuidv4()} visible={visible} onClose={onClose}>
        {children}
        <input value={string} onChange={handleInputChange} />
        <Button onClick={onClose}>AVBRYT</Button>
        <Spacer />
        <Button enabled={!!string} onClick={() => handleDone()}>BEKRÄFTA</Button>
      </Popup>
    </div>
  )
}

export default InputPopup
