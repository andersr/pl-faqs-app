import * as types from './actionTypes'

export function fetchFaqs(api) {
  return dispatch => {

    dispatch(requestFaqs(api))

    return fetch(api, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log('data: ', data.faqs)
        dispatch(receiveFaqs(data.faqs))
    })
      .catch(function(err) {
       console.log('fetch error: ', err)
      })
  }
}

function requestFaqs() {
  return {
    type: types.REQUEST_FAQS
  }
}

function receiveFaqs(faqs) {
  return {
    type: types.RECEIVE_FAQS,
    faqs
  }
}

function shouldFetchFaqs(state) {
  const faqs = state.faqState
  if (faqs.isFetchingFaqs) {
    return false
  } else if (faqs.length === 0) {
    return true
  } else {
    return false
  }
}

export function fetchFaqsIfNeeded(api) {
  return (dispatch, getState) => {
    if (shouldFetchFaqs(getState())) {
      return dispatch(fetchFaqs(api))
    }
  }
}
