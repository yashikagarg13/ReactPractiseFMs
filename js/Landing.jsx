const React = require('react')

const Landing = () => (
  <div className="app-container">
    <div className="home-info">
      <h1 className="title">SVideo</h1>
      <input type="text" placeholder="Search" className="search" />
      <button type="button" className="browse-all">or Browse All</button>
    </div>
  </div>
)

module.exports = Landing
