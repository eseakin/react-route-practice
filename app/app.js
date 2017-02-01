import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory, browserHistory } from 'react-router';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container} >
                    <IndexRoute component={Home} />
                    <Route path='/address' component={Address}>
                        <Route path='twitter' component={TwitterFeed} />
                        <Route path='instagram' component={Instagram} />
                        <Route path='query' component={Query} />
                    </Route>
                    <Route path='/about(/:name)' component={About} />
                    <Route path='/namedComponent' component={NamedComponents}>
                      <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
                    </Route>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        );
    }
}

const Container = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>
)

const Nav = () => (
    <div>
        <IndexLink className='nav' activeClassName='active' to='/'>Home</IndexLink>&nbsp;
        <Link className='nav' activeClassName='active' to='/address'>Address</Link>
        <IndexLink className='nav' activeClassName='active' to='/about'>About</IndexLink>
        <IndexLink className='nav' activeClassName='active' to='/namedComponent'>Named Components</IndexLink>
    </div>
)

const Home = () => <h1>Hello from Home!</h1>

const Address = (props) => (
    <div>
        <br />
        <IndexLink className='nav' activeClassName='active' to='/address/twitter'>Twitter Feed</IndexLink>&nbsp;
        <IndexLink className='nav' activeClassName='active' to='address/instagram'>Instagram Feed</IndexLink>
        <IndexLink className='nav' activeClassName='active' to={{
            pathname: '/address/query',
            query: {message: 'Hello from Route Query'}
        }}>Route Query</IndexLink>
        <h1>We are in SF</h1>
        {props.children}
    </div>
)
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
const Query = (props) => (
  <h2>{props.location.query.message}</h2>
)


const About = (props) => (
    <div>
        <h3>Welcome to the About Page</h3>
        {props.params.name && <h2>Hello, {props.params.name}</h2>}
    </div>
)

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
    <h2>Hello from subTitle Component</h2>   
)

const NotFound = () => (<h1>404... Page not found!</h1>)

export default App
