import React from 'react'
import './css/App.css'
// Icons
import ListImg from './images/listwhite.svg'
import BudgetImg from './images/Budget.svg'
import PersonImg from './images/man-user (1).svg'
// Components
import Budget from './components/Budget'
import Person from './components/Persons'

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
            <p>Empty</p>  {/* Component */}
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
