import React, { useState } from 'react'
import DeleteIcon from './delete.svg'

function Person ({ person, onDelete }) {
  console.log(person)
  return (
    <div>
      {person.name}
      <img src={DeleteIcon} alt='delete' onClick={() => onDelete(person.id)} />
    </div>
  )
}

export default Person
