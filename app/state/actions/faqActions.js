import * as types from './actionTypes'

export function fetchFaqs(api) {
  return dispatch => {

    dispatch(requestFaqs(api))

    return fetch(api, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch(receiveFaqs(data.faqs)))
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

function receiveFaqs(data) {
  return {
    type: types.RECEIVE_FAQS,
    data
  }
}
