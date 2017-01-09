import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FaqsView from '../components/FaqsView'
import * as FaqActions from '../state/actions/faqActions'

const mapStateToProps = (state, ownProps) => {
  return {
    isFetchingFaqs: state.faqs.isFetchingFaqs,
    faqs: state.faqs.data
  }
}

function mapActionCreatorsToProps(dispatch){
  return bindActionCreators(FaqActions, dispatch)
}

const FaqsContainer = connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(FaqsView)

export default FaqsContainer
