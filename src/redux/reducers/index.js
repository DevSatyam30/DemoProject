import { combineReducers } from 'redux';
 import postLogin from './authentication/postLogin';

 const appReducer = combineReducers({
    postLogin: postLogin,   
});

export default appReducer;