import { combineReducers } from 'redux'
import todos from './events'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})
 