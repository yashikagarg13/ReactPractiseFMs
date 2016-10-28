const React = require('react')
const {Link} = require('react-router')
const {bool, string, func} = React.PropTypes

class Header extends React.Component {
  handleSearchTermEvent (event) {
    this.props.handleSearchTermChange(event.target.value)
  }

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input className='search-input' placeholder='Search' type='text'
        value={this.props.searchTerm} onChange={this.handleSearchTermEvent.bind(this)} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }

    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>svideo</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  showSearch: bool,
  searchTerm: string,
  handleSearchTermChange: func
}

module.exports = Header
