/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

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
