// state argument is not application state, only state this
// reducer is responsible for
// when argument comes in if state is undefines, set it to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}