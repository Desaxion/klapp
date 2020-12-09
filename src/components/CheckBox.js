import React from 'react'
import noCheck from '../images/nocheck.svg'
import CheckIcon from '../images/check.svg'

function CheckBox ({ value, onClick }) {
  return (
    <img src={value ? CheckIcon : noCheck} className='CheckIcon' alt='Check' onClick={onClick} />
  )
}
export default CheckBox
