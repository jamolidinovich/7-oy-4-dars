const defaultState = {
  todos: [],
};
export function todoReducer(state = defaultState, action) {
  let copied = JSON.parse(JSON.stringify(state.todos));
  if (action.type == "TODO_ADD") {
    copied.push(action.payload);
    return { ...state, todos: copied };
  } else if (action.type == "TODO_DELETE") {
    copied = copied.filter((el) => {
      return el.id != action.payload;
    });
    return { ...state, todos: copied };
  } else if (action.type == "TODO_CHECK") {
    copied = copied.map((el) => {
      if (el.id == action.payload.id) {
        el.status = action.payload.status;
      }
    });
  } else {
    return state;
  }
}
