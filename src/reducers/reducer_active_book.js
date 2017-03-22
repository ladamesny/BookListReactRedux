// state argument is not application state, only the state this reducter is responsible for
export default function (state = null, action) {
  switch (action.type){
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}

// Note: Redux doesn't let you return an undefined value. On start-up, state is undefined,
// thus it would throw an error. So we default it to null in the argument definition.
