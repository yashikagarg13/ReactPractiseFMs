const React = require('react')
const {Provider} = require('react-redux')

const {store} = require('./Store')
const {Router, browserHistory} = require('react-router')

const Layout = require('./Layout')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure') // shim for node.js
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, callback) {
      require.ensure([], () => {
        callback(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, callback) {
        require.ensure([], () => {
          callback(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, callback) {
        require.ensure([], () => {
          callback(null, require('./Details'))
        })
      }
    }
  ]
}

/* const myRoutes = () => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)
*/
const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

App.routes = rootRoute
App.history = browserHistory
module.exports = App
