import React , {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {updateArticle, getArticle} from '../../actions/index';

class UpdateArticle extends Component {

	static contextTypes = {router: PropTypes.object}

	componentWillMount(){
		this.props.getArticle(this.props.params.id);
	}

	onSubmit(props) {
		this.props.updateArticle(this.props.params.id, props)
			.then(() => {
				this.context.router.push('/')
			});
	}

	render(){

		const {fields: {title, body}, handleSubmit} = this.props;
		if(!this.props.article) {
			return <div> Getting article, please wait</div>;
		}
		return (
			<div className='container'>
				<h3> Create a new Article  </h3>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div>
						<label>Title</label>
						<input type='text' className='form-control' {...title} defaultValue={this.props.article.title}/>
					</div>
					<div>
						<label>body</label>
						<input type='text' className='form-control' {...body} defaultValue={this.props.article.body}/>
					</div>
					<button type='submit' className='btn btn-success'>Create</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {article: state.articles.article}
}

export default reduxForm({
	form: 'UpdateArticleForm',
	fields: ['title', 'body']
}, mapStateToProps,{updateArticle, getArticle})(UpdateArticle);
