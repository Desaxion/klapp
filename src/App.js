import React from 'react'
import './App.css'
import Home from './Home'
import DeleteIcon from './delete.svg'
import font from './Marons-Regular.ttf'
// Icons
import ListImg from './listwhite.svg'
import BudgetImg from './Budget.svg'
import PersonImg from './man-user (1).svg'
// Components
import Budget from './Budget'
import Person from './Persons'
import List from './list'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App (props) {
  // CODE HERE

  return (
    <Router>

      <div className='Header'>
        <h1 className='Name'>Klapp</h1>
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
            <List />  {/* Component */}
          </Route>
        </Switch>
      </div>

      <div className='footer'>

        <div className='bottomButtons'>
          <Link to='/'><img height={30} src={ListImg} alt='Lista' className='bottomButton' /></Link>
          <Link to='/Budget'><img height={30} src={BudgetImg} alt='Budget' className='bottomButton' /></Link>
          <Link to='/Persons'><img height={30} src={PersonImg} alt='Ändra Person' className='bottomButton' /></Link>
        </div>

      </div>
    </Router>
  )
}

export default App
