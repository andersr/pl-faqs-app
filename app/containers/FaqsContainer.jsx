import React from 'react'
// import fetch helper function from lib

export default class FaqsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
     dataReady: true,
     faqs: []
    }
  }

  componentDidMount() {
    const url = 'https://api.realist.cloud/faqs'
    this.setState({dataReady: false })
    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        dataReady: true,
        faqs: data.faqs
       })
      console.log('data: ', this.state.faqs)
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
