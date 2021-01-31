import {
  createAction,
  createReducer,
  AnyAction,
  PayloadAction
} from "@reduxjs/toolkit";

const initialState = {};

const increment = createAction<number>("increment");
const decrement = createAction<number>("decrement");

function isActionWithNumberPayload(
  action: AnyAction
): action is PayloadAction<number> {
  return typeof action.payload === "number";
}

export default createReducer(initialState, builder => {
  builder
    .addCase(increment, (state, action) => {
      // action is inferred correctly here
      state.counter += action.payload;
    })
    // You can chain calls, or have separate `builder.addCase()` lines each time
    .addCase(decrement, (state, action) => {
      state.counter -= action.payload;
    })
    // You can apply a "matcher function" to incoming actions
    .addMatcher(isActionWithNumberPayload, (state, action) => {})
    // and provide a default case if no other handlers matched
    .addDefaultCase((state, action) => {});
});
