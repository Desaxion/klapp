import React, { useState } from 'react'
import DeleteIcon from '../images/delete.svg'
import EditIcon from '../images/edit (1).svg'
import CheckBox from './CheckBox'
import styled from 'styled-components'

const OpaDiv = styled.div`
opacity : ${props => props.check ? '0.5' : '1'};
background-color: #dbdbdb;
`
const EntryDiv = styled.div`
display: flex;
flex-direction: row;
align-items:center;
`

function Present ({ present, onDelete, onEdit, onCheck }) {
  console.log(present)
  return (
    <div className='PresentEntryWrap'>
      <OpaDiv className='PresentEntry' check={present.checked}>
        <EntryDiv>
          <h3>{present.name}</h3>
          <h4>Pris: </h4><p>{present.cost}</p>
          <img src={EditIcon} className='EditPerson' alt='edit' onClick={() => onEdit(present)} />
          <img src={DeleteIcon} className='PersonDelete' alt='delete' onClick={() => onDelete(present)} />
          <CheckBox value={present.checked} onClick={onCheck} />
        </EntryDiv>
        <h4>Beskrivning:</h4>{present.desc}
      </OpaDiv>

    </div>
  )
}

export default Present
