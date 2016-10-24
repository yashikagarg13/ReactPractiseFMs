const React = require('react')
const {object} = React.PropTypes
const ShowCard = require('./ShowCard')

/* class Search extends React.Component { // The above method doesn't have autobinding
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }
} */

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermEvent (event) {
    this.setState({
      searchTerm: event.target.value
    })
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input className='search-input' placeholder='Search' type='text'
            value={this.state.searchTerm} onChange={this.handleSearchTermEvent} />
        </header>
        <div className="shows">
          {this.props.route.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
