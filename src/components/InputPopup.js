import React, { useState } from 'react'
import Popup from 'react-animated-popup'
import Button from './Button'
import stringIsNumeric from 'string-is-numeric'
import Spacer from './Spacer'

function InputPopup ({ fieldString, children, visible, onClose, onDone, numerical = false }) {
  console.log(fieldString)
  const [string, setString] = useState(fieldString)

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
      <Popup className='PersonPopup' key='PersonPopup' visible={visible} onClose={onClose}>
        {children}
        <input value={string} onChange={handleInputChange} />
        <Spacer />
        <Button enabled={!!string} onClick={() => handleDone()}>BEKRÄFTA</Button>
        <Spacer />
        <Button onClick={onClose}>AVBRYT</Button>
      </Popup>
    </div>
  )
}

export default InputPopup
