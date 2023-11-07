import { applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
import { legacy_createStore as createStore} from 'redux'

// export const store = configureStore(
//   {
//     reducer: reducers,
//   },
//   compose(applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );


export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);