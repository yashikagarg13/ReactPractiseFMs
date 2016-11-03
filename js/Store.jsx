const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: ''
}

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM: 
      return reduceSearchTerm(state, action)
    default: 
        return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const store = redux.createStore(rootReducer);