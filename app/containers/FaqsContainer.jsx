import React from 'react'
import { connect } from 'react-redux'
import { fetchFaqs, fetchFaqsIfNeeded } from '../state/actions/faqActions'
import constants from '../lib/constants.js'
import List from '../components/List'

class Faqs extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {
    //  dataReady: true,
    //  faqs: []
    // }
  }

  componentDidMount() {
    this.props.dispatch(fetchFaqs(constants.faqsApi))
  }

  render () {
    // console.log('dispatch faqs: ', this.props.faqs);
    return (
      this.props.isFetchingFaqs ?
        <div>Loading...</div>
      :
        <div><List listItems={this.props.faqs} /></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetchingFaqs: state.faqState.isFetchingFaqs,
    faqs: state.faqState.faqs
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     handleFetchFaqs: api => dispatch(fetchFaqsIfNeeded(api))
//   }
// } , mapDispatchToProps

const FaqsContainer = connect(
  mapStateToProps
)(Faqs)

export default FaqsContainer
