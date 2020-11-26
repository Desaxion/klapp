import React from 'react'
import { getPeople } from '../lib/db'
import Entry from './Entry'

function list () {
  const people = getPeople()

  console.log(people)

  const listElements = people.map(person => <Entry person={person} key={person.id} />)
  return (<div>{listElements}</div>)
}
export default list
