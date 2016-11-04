const React = require('react')
const {object, string, arrayOf} = React.PropTypes
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const {connector} = require('./Store')

/* class Search extends React.Component { // The above method doesn't have autobinding
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }
} */

const Search = (props) => (
  <div className='container'>
    <Header showSearch />
    <div className="shows">
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase()
            .indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(show => (
          <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

Search.propTypes = {
  route: object,
  searchTerm: string,
  shows: arrayOf(object)
}

module.exports = connector(Search)
