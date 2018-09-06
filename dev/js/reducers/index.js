import {combineReducers} from 'redux';
import ArticlesReducer from './articles_reducer';
import UserReducer from './user_reducer';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
	articles:  ArticlesReducer,
	user: UserReducer,
	form: formReducer
});

export default allReducers
