const React = require('react')
const Data = require('../public/data')

const Search = () => (
  <div className='container'>
    {Data.shows.map(show => (
      <h3>{show.title}</h3>
    ))}
  </div>
)

module.exports = Search
