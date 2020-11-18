import React from 'react'
// import PopUp from './PopUp';

function handleInput (event) {

  /* setText(event.target.value) */
}

function Budget () {
  return (
    <div className='Budgett'>
      <header>
        <input type='text' placeholder='Skriv Budget' onChange={handleInput} />
        <button type='submit'> BEKRÄFTA </button>
      </header>
    </div>
  )
}
export default Budget
