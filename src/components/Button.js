import React from 'react'
import styled from 'styled-components'

const ButtonElement = styled.div`
  background-color: ${props => props.enabled ? props.color : 'gray'};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  outline: none;
`

function Button ({ enabled = true, color = '#7F0000', onClick, children }) {
  const handleClick = (event) => {
    if (enabled) {
      onClick(event)
    }
  }

  return (
    <ButtonElement enabled={enabled} color={color} onClick={handleClick}>
      {children}
    </ButtonElement>
  )
}

export default Button
