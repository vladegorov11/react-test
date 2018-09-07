import React from 'react'
import {Link} from 'react-router';

export default function ArticleList(props) {
  return (
    <div className='article'>
        <h4>{props.article.title}</h4>
        <p>{props.article.body}</p>
      <Link className="btn btn-info btn-right" to={"articles/" + props.article.id}>Read All</Link>
    </div>
  )
}
