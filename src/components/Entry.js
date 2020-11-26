import React from 'react'

function Entry ({ person }) {
  return (
    <div className='Entry'>
      {person.name}
    </div>
  )
}

export default Entry
