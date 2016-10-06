const React = require('react')
const ReactDOM = require('react-dom')
const {Router, Route, hashHistory} = require('react-router')

const Landing = require('./Landing')

const ClientApp = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
)

ReactDOM.render(<ClientApp />, document.getElementById('app'))
