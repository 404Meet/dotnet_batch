import React from 'react'
import PropTypes from 'prop-types'
import '../App.css' 

const Todo = ({ onClick, completed, text, text2, text3 }) => (
  <div  class="card"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <div class="container">
    <h4>Event: 
    {text}
    </h4>
    Description: 
    {text2}
    <p>
    Region: 
    {text3}
    </p>
    </div>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
}

export default Todo
