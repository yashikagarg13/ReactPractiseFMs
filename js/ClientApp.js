var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great', color: 'red'}),
    ce(MyTitle, {title: 'Props are best', color: 'blue'}),
    React.createElement(MyTitle, {title: 'My name is Yashika', color: 'peru'})
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
