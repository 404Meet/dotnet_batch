let nextTodoId = 0
export const addevent = (text,text2,text3) => ({
  type: 'ADD_EVENT',
  id: nextTodoId++,
  text: text,
  text2: text2,
  text3: text3
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
