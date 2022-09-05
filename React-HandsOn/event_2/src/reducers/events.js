const eventss = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          text2: action.text2,
          text3: action.text3,
          completed: false
        }
      ]
    case 'TOGGLE_EVENT':
      return state.map(toevents =>
        (toevents.id === action.id)
          ? {...toevents, completed: !toevents.completed}
          : toevents
      )
    default:
      return state
  }
}

export default eventss
