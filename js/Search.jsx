const React = require('react')
const {object} = React.PropTypes
const ShowCard = require('./ShowCard')
const Header = require('./Header')

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
  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm})
  },
  render () {
    return (
      <div className='container'>
        <Header
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          showSearch />
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
