import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArticles, getCategory} from '../../actions/index';
import {Link} from 'react-router';
import ArticleList from './ArticleList';

class ArticlesHome extends Component {
	componentWillMount(){
		this.props.getArticles()
	}
	renderArticles(){
		return this.props.articles.map((article) => {
			return (
				<ArticleList article={article} key={article.id}/>
			)
		})
	}
	renderCategories(){
		return this.props.category.map((category) => {
			return (
				<div key={category.id}>{category.name}</div>
			)
		})
	}

	render() {
		console.log(this.props.category, '-----');
		return (
			<div className='container-fluid'>
				<h1 className='text-center mt-3'>Articles Home page</h1>
				<div className='row mt-4'>
					<div className='col-md-9'>
						{this.renderArticles()}
					</div>
					<div className='col-md-3'>
						{this.renderCategories()}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state.articles.articles);
	return {
		articles: state.articles.articles,
		category: state.articles.category
	}
}
export default connect(mapStateToProps, {getArticles: getArticles, getCategory: getCategory})(ArticlesHome);
