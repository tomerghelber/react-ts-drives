import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export default configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
      const middlewares = getDefaultMiddleware();
      middlewares.concat(logger);
      return middlewares;
    }
});
