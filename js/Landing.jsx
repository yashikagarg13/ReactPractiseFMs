const React = require('react')
const {Link} = require('react-router')

const Landing = () => (
  <div className="app-container">
    <div className="home-info">
      <h1 className="title">SVideo</h1>
      <input type="text" placeholder="Search" className="search" />
      <Link to="/search" className="browse-all">or Browse All</Link>
    </div>
  </div>
)

module.exports = Landing
