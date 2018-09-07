import React , {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createArticle} from '../../actions/index';

class NewArticle extends Component {

	static contextTypes = {router: PropTypes.object}

	onSubmit(props) {
		this.props.createArticle(props)
			.then(() => {
				this.context.router.push('/')
			});
	}

	render(){
		const {fields: {title, body}, handleSubmit} = this.props;
		return (
			<div className='container'>
				<h3> Create a new Article  </h3>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div>
						<label>Title</label>
						<input type='text' className='form-control' {...title}/>
					</div>
					<div>
						<label>body</label>
						<input type='text' className='form-control' {...body}/>
					</div>
					<button type='submit' className='btn btn-success'>Create</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'NewArticleForm',
	fields: ['title', 'body']
}, null,{createArticle})(NewArticle);
