import React from 'react'
import Footer from './Footer'
import AddEvents from '../containers/AddEvent'
import VisibleList from '../containers/VisibleEventList'

const App = () => (
  <div>
    <AddEvents />
    <VisibleList />
    <Footer />
  </div>
)

export default App
