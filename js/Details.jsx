const React = require('react')
const {object} = React.PropTypes

class Details extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'left'}} className='container'>
        <pre><code>
          {JSON.stringify(this.props.params, null, 4)}
        </code></pre>
      </div>
    )
  }
}

Details.propTypes = {
  params: object
}

module.exports = Details
