import React from 'react'
// import fetch helper function from lib

export default class FaqsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
     dataReady: false
    }
  }

  componentDidMount() {
    const url = 'https://api.realist.cloud/faqs'
    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({dataReady: true })
      console.log('data: ', data)
    })
    .catch(function(err) {
     console.log('fetch error: ', err)
    })
  }

  render () {
    return (
      this.state.dataReady ?
        <div>Data Ready</div>
      :
        <div>Loading...</div>
    )
  }
}

// FaqsContainer.propTypes = {
//   dataReady: React.PropTypes.bool
// }
//
// FaqsContainer.defaultProps = {
//   dataReady: false
// }
