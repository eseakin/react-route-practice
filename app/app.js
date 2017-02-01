import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory, browserHistory } from 'react-router';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container} >
                    <IndexRoute component={Home} />
                    <Route path='/address' component={Address}>
                        <IndexRoute component={TwitterFeed} />
                        <Route path='instagram' component={Instagram} />
                    </Route>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        );
    }
}

const Home = () => <h1>Hello from Home!</h1>
const Address = (props) => (
    <div>
        <br />
        <IndexLink activeClassName='active' to='/address'>Twitter Feed</IndexLink>&nbsp;
        <IndexLink activeClassName='active' to='address/instagram'>Instagram Feed</IndexLink>
        <h1>We are in SF</h1>
        {props.children}
    </div>
)
const NotFound = () => (<h1>404... Page not found!</h1>)
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
const Nav = () => (
    <div>
        <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
        <IndexLink activeClassName='active' to='/address'>Address</IndexLink>
        <IndexLink activeClassName='active' to='/about'>About</IndexLink>
    </div>
)
const Container = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>
)

export default App
