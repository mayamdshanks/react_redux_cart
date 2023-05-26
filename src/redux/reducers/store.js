import { legacy_createStore as createStore } from "redux";
import reducers from "./func";

const store=createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //empty object is initial state for store

export default store;
//allows other parts of your application to import 
//the Redux store and use it for managing application state.