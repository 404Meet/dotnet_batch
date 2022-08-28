import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  let input2

  return (
    <div className='App'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim() && !input2.value.trim() ) {
          return
        }
        dispatch(addTodo(input.value, input2.value))
        input.value = ''
        input2.value = ''
      }}>
        <h4>Event Name</h4>
        <input ref={node => input = node} />
        <br></br>
        <h4>Event Description</h4>
        <input ref={node => input2 = node} />
        <br></br><br></br>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
