import React , {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getArticle, deleteArticle} from '../../actions/index';
import {Link} from 'react-router';

class SingleArticleShow extends Component {

	static contextTypes = {router: PropTypes.object}

	componentWillMount(){
		this.props.getArticle(this.props.params.id);
	}
	deleteButtonClick(){
		this.props.deleteArticle(this.props.params.id)
			.then(() => {
				this.context.router.push('/')
			});
	}
	render() {
		const article = this.props.article;
		if(!this.props.article) {
			return <div> Getting article, please wait</div>;
		}
		return (
			<div  className="container">
				<h3>Title {article.title}</h3>
				<p>Body {article.body}</p>
				<button className="btn btn-warning" onClick={this.deleteButtonClick.bind(this)}>delete </button>
				<Link className="btn btn-info" to={"articles/" + article.id + "/edit"}>update article</Link>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {article: state.articles.article}
}
export default connect(mapStateToProps, {deleteArticle, getArticle})(SingleArticleShow);
