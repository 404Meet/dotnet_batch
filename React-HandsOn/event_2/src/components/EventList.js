import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'

const Eventlist = ({ eventss, toggle }) => (
  <ul>
    {eventss.map(toevents =>
      <Event
        key={toevents.id}
        {...toevents}
        onClick={() => toggle(toevents.id)}
      />
    )}
  </ul>
)

Eventlist.propTypes = {
  eventss: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggle: PropTypes.func.isRequired
}

export default Eventlist
