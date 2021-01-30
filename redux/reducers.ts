const initialState = {};

interface Action {
  type: string
}

export default (state = initialState, action: Action) => {
  switch(action.type) {
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
