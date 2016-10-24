const React = require('react')
const ReactDOM = require('react-dom')
const {Router, Route, IndexRoute, hashHistory} = require('react-router')

const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')
const Details = require('./Details')

const ClientApp = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
      <Route path='/details/:id' component={Details} />
    </Route>
  </Router>
)

ReactDOM.render(<ClientApp />, document.getElementById('app'))
