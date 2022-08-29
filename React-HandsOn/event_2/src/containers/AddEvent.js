import React from 'react'
import { connect } from 'react-redux'
import { addevent } from '../actions'

const AddEvent = ({ dispatch }) => {
  let input
  let input2
  let input3

  return (
    <div className='App'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim() && !input2.value.trim() && !input2.value.trim()) {
          return
        }
        dispatch(addevent(input.value, input2.value, input3.value))
        input.value = ''
        input2.value = ''
        input3.value = ''
      }}>
        <h4>Event Name</h4>
        <input ref={node => input = node} />
        <br></br>
        <h4>Event Description</h4>
        <input ref={node => input2 = node} />
        <br></br>
        <h4>Event Region</h4>
        <input ref={node => input3 = node} />
        <br></br><br></br>
        <button type="submit">
          Add Event
        </button>
      </form>
    </div>
  )
}

export default connect()(AddEvent)
