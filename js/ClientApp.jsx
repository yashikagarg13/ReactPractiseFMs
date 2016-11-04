const React = require('react')
const ReactDOM = require('react-dom')
const {Provider} = require('react-redux')

const {store} = require('./Store')
const {Router, Route, IndexRoute, hashHistory} = require('react-router')

const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')
const Details = require('./Details')

const ClientApp = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<ClientApp />, document.getElementById('app'))
