import React, { useState } from 'react'
import './css/App.css'
// Icons
import ListImg from './images/listwhite.svg'
import BudgetImg from './images/Budget.svg'
import PersonImg from './images/man-user (1).svg'
// Components
import Budget from './components/Budget'
import Person from './components/Persons'
import List from './components/List'
import InputPopup from './components/InputPopup'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const iconHeight = 50

function App (props) {
  const [budgetPopupVisible, setBudgetPopupVisible] = useState(false)
  // CODE HERE

  const applyBudget = (string) => {
    setBudgetPopupVisible(false)
    console.log(string)
    // TODO calculate stuff
  }

  return (
    <Router>

      <div className='Header'>
        <div className='topHeader'>
          <h1 className='Name'>Klapp</h1>
        </div>
      </div>

      <div className='mainContent'>
        <Switch>
          <Route path='/Budget'>
            <Budget /> {/* Component */}
          </Route>
          <Route path='/Persons'>
            <Person />  {/* Component */}
          </Route>
          <Route path='/'>
            <List /> {/* Component */}
          </Route>
        </Switch>
      </div>

      {/* <Budget visible={budgetPopup} onClose={() => setBudgetPopup(false)} /> */}
      <div className='BudgetButton'>
        <InputPopup key='budgetPopup' onClose={() => setBudgetPopupVisible(false)} onDone={applyBudget} visible={budgetPopupVisible} numerical><p> Skriv in total budget</p></InputPopup>
      </div>

      <div className='footer'>
        <div className='bottomButtons'>
          <Link to='/'><img height={iconHeight} src={ListImg} alt='Lista' className='bottomButton' /> </Link>
          <div onClick={() => setBudgetPopupVisible(true)}><img height={iconHeight} src={BudgetImg} alt='Budget' className='bottomButton' /> </div>
          <Link to='/Persons'><img height={iconHeight} src={PersonImg} alt='Ändra Person' className='bottomButton' /></Link>
        </div>

      </div>
    </Router>
  )
}

export default App
