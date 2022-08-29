import React from 'react'
import Footer from './Footer'
import AddEvents from '../containers/AddEvent'
import VisibleTodoList from '../containers/VisibleEventList'

const App = () => (
  <div>
    <AddEvents />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
