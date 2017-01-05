import * as types from '../actions/actionTypes'

const initialState = {
  isFetchingFaqs: false,
  faqs: []
}

const faqState = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_FAQS:
      return  {
        ...state,
        isFetchingFaqs: true
      }
    case types.RECEIVE_FAQS:
      return  {
        ...state,
        isFetchingFaqs: false,
        faqs: action.faqs
      }
    default:
      return state
  }
}


export default faqState
