import {createStore, combineReducers} from 'redux'
import reducerAccount from './account'

const reducer = combineReducers({
    account: reducerAccount

}
);

export default createStore(reducer);
