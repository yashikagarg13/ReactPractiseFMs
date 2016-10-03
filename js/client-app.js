var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, "My Title component")
      )
    )
  }
});

var MyTitleFact = React.createFactory(MyTitle);
var ce = React.createElement;

var MyFirstComponent = (
  div(null,
    MyTitleFact(null),
    ce(MyTitle, null),
    React.createElement(MyTitle, null)
  )
);
ReactDOM.render(MyFirstComponent, document.getElementById("app"));
