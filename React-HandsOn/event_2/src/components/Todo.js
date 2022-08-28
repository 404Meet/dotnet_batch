import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, text2 }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <h4>
    {text}
    </h4>
    {text2}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
}

export default Todo
