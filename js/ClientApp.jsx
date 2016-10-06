const React = require('react')
const ReactDOM = require('react-dom')
const {Router, Route, hashHistory} = require('react-router')

const Landing = require('./Landing')
const Search = require('./Search')

const ClientApp = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)

ReactDOM.render(<ClientApp />, document.getElementById('app'))
