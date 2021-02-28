import { combineReducers } from 'redux';
import user from './User';

const reducers = combineReducers({
    user: user,
});

export default reducers;