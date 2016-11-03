const React = require('react')
const {hashHistory} = require('react-router')
const {func, string} = React.PropTypes
const {Link} = require('react-router')

const {connector} = require('./Store')

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
  }

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  goToSearch (event) {
    event.preventDefault()

    hashHistory.push('search')
  }

  render () {
    return (
      <div className="home-info">
        <h1 className="title">SVideo</h1>
        <form onSubmit={this.goToSearch}>
          <input type="text" placeholder="Search" className="search"
            value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
        </form>
        <Link to="/search" className="browse-all">or Browse All</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
