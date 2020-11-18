import React from 'react'
import './App.css'
import Home from './Home'
import DeleteIcon from './delete.svg'
import List from './listwhite.svg'
import BudgetIMG from './Budget.svg'
import Person from './man-user (1).svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from 'react-router-dom'
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
