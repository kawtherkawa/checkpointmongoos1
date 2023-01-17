
import {compose,createStore,applyMiddleware} from "redux";
import rootReducer from "../Reducers";
import thunk from  'redux-thunk'

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
//store
const store= createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
export default store; 
