import React, {Component} from 'react'
import {Link} from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li><a href="#">about</a></li>
          <li><a href="#">blog</a></li>
          <li><Link className="" to={"/"}>Home</Link></li>

        </ul>
        <Link to="articles/new" className="btn btn-warning">Create article </Link>
      </nav>
    )
  }
}
