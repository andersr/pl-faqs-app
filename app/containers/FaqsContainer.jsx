import React from 'react'
import { connect } from 'react-redux'
import { fetchFaqs, fetchFaqsIfNeeded } from '../state/actions/faqActions'
import FaqsView from '../components/FaqsView'

const mapStateToProps = (state, ownProps) => {
  return {
    isFetchingFaqs: state.faqs.isFetchingFaqs,
    faqs: state.faqs.data
  }
}

const FaqsContainer = connect(
  mapStateToProps
)(FaqsView)

export default FaqsContainer
