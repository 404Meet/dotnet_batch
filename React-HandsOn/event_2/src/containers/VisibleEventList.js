import { connect } from 'react-redux'
import { toggle } from '../actions'
import Eventlist from '../components/EventList'
import { VisibilityFilters } from '../actions'

const getVisibleeventss = (eventss, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return eventss
    case VisibilityFilters.SHOW_COMPLETED:
      return eventss.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return eventss.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  eventss: getVisibleeventss(state.eventss, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggle(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Eventlist)
