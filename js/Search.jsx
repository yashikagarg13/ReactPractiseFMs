const React = require('react')
const Data = require('../public/data')

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
      searchTerm: 'Test search'
    }
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
          <h1 className='brand'>{this.state.searchTerm}</h1>
          <input className='search-input' placeholder='Search' type='text'
            value={this.state.searchTerm} onChange={this.handleSearchTermEvent} />
        </header>
        <div className="shows">
          {Data.shows.map(show => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
