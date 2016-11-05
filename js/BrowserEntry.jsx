const React = require('react')
const ReactDOM = require('react-dom')
const {match} = require('react-router')

const App = require('./ClientApp')

match({history: App.history, routes: App.Routes}, (error, redirectLocation, renderProps) => {
  if (error) {
    console.log('Browser entry error', error)
  }
  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})

