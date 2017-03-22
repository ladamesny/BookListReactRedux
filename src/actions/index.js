export function selectBook(book) {
  // selectBook is an action creator. It needs to return an action
  // which is an object with a type property. Usually a payload as well.
  // The type should describe the purpose of the action. The payload further describes the
  // conditions of the actions being triggered.

  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
