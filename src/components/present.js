import React from 'react'
import DeleteIcon from '../images/delete.svg'
import EditIcon from '../images/edit (1).svg'

function Present ({ present, onDelete, onEdit }) {
  return (
    <div className='PresentEntry'>
      {present.name}
      {present.cost}
      {present.description}
      <img src={EditIcon} className='EditPerson' alt='edit' onClick={() => onEdit(present)} />
      <img src={DeleteIcon} className='PersonDelete' alt='delete' onClick={() => onDelete(present)} />
    </div>
  )
}

export default Present
