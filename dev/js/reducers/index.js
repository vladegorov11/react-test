import {combineReducers} from 'redux';
import ArticlesReducer from './articles_reducer';
import CategoryReducer from './category_reducer';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
	articles:  ArticlesReducer,
	category: CategoryReducer,
	form: formReducer
});

export default allReducers
