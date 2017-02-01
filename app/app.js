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
                    <Route path='/about' component={About} />
                    <Route path='/namedComponent' component={NamedComponents}>
                      <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
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
        <IndexLink activeClassName='active' to='/namedComponent'>NamedComponents</IndexLink>
    </div>
)
const Container = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>
)
const About = () => <h3>Welcome to the About Page</h3>
const NamedComponents = (props) => (
    <div>
        {props.title}<br />
        {props.subTitle}
    </div>
)
const Title = () => (
    <h1>Hello from Title Component</h1>
)
const SubTitle = () => (
    <h1>Hello from subTitle Component</h1>   
)

export default App
