const React = require('react')
const Data = require('../public/data')

const ShowCard = require('./ShowCard')

const Search = () => (
  <div className='container'>
    <div className="shows">
      {Data.shows.map(show => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
