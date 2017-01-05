import * as types from '../actions/actionTypes'

const initialState = {
  isFetchingFaqs: false,
  data: []
}

const faqs = (state = initialState, action) => {
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
        data: action.data
      }
    default:
      return state
  }
}


export default faqs
