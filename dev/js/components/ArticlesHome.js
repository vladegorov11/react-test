import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArticles} from '../actions/index';
import {Link} from 'react-router';

class ArticlesHome extends Component {
	componentWillMount(){
		this.props.getArticles()
	}
	renderArticles(){
		return this.props.articles.map((article) => {
			return (
				<li key={article.id}>
					<Link to={"articles/" + article.id}>
						<h4>{article.title}</h4>
					</Link>
					
				</li>
			)
		})
	}
	render() {
		console.log(this.props);
		return (
			<div className='container'>
			<Link to="articles/new" className="btn btn-warning">Create article </Link>
			<h1>Articles Home page</h1>
			<ul>
				{this.renderArticles()}
			</ul>
			</div>
		);
	}
} 

function mapStateToProps(state) {
	return {articles: state.articles.articles}
}
export default connect(mapStateToProps, {getArticles: getArticles})(ArticlesHome);