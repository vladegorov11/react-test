import {GET_ARTICLES, GET_ARTICLE, UPDATE_ARTICLE} from '../actions/types';

const INITIAL_STATE = {articles: [], article:null};

export default function(state = INITIAL_STATE, action){
	switch(action.type) {
		case GET_ARTICLES:
			return {...state, articles: action.payload.data};
		case GET_ARTICLE:
			return {...state, article: action.payload.data};
		case UPDATE_ARTICLE:
			return {...state, article: action.payload.data};
		default: 
			return state;
	}
}