let nextEvent = 0
export const addevent = (text,text2,text3) => ({
  type: 'ADD_EVENT',
  id: nextEvent++,
  text: text,
  text2: text2,
  text3: text3
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggle = id => ({
  type: 'TOGGLE_EVENT',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
