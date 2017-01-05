import React from 'react'
import { connect } from 'react-redux'
import { fetchFaqs, fetchFaqsIfNeeded } from '../state/actions/faqActions'
import constants from '../lib/constants'
import FaqsList from '../components/List'
// import FaqListItem from '../components/FaqListItem'

class Faqs extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
   if (nextProps.faqs.length === 0) {
     this.props.dispatch(fetchFaqs(constants.faqsApi))
   }
  }

  render () {
    return (
      this.props.isFetchingFaqs ?
        <div>Loading...</div>
      :
        <div><FaqsList faqs={this.props.faqs} /></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetchingFaqs: state.faqs.isFetchingFaqs,
    faqs: state.faqs.data
  }
}

const FaqsContainer = connect(
  mapStateToProps
)(Faqs)

export default FaqsContainer
