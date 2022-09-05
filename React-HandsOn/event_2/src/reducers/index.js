import { combineReducers } from 'redux'
import eventss from './events'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  eventss,
  visibilityFilter
})
 