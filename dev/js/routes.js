import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ArticlesHome from './components/articles/ArticlesHome';
import NewArticle from './components/articles/NewArticle';
import SingleArticleShow from './components/articles/SingleArticleShow';
import UpdateArticle from './components/articles/UpdateArticle';
export default (
	<Route path="/" component={App}>
		<IndexRoute component={ArticlesHome}/>
		<Route path='articles/new' component={NewArticle}/>
		<Route path='articles/:id' component={SingleArticleShow}/>
		<Route path='articles/:id/edit' component={UpdateArticle}/>
	</Route>
)
