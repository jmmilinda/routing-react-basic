import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
//import FullPost from '../FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div>
        <div className='Blog'>
          <header>
            <nav>
              <ul>
                <li><NavLink to="/posts/"
                  exact
                  activeClassName='my-active' activeStyle={{ color: '#fa923f', textDecoration: 'underline' }}>Posts</NavLink></li>
                <li><NavLink to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</NavLink></li>
              </ul>
            </nav>
          </header>
        </div>
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/* <Route path="/" component={Posts} /> */}
        </Switch>

      </div>
    );
  }
}

export default Blog;
