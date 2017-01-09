import { put, take, fork } from 'redux-saga/effects'
import { fetchData } from '../../lib/fetchData'

const faqsApi = 'https://api.realist.cloud/faqs'
const faqsPath = 'faqs'

export function* loadFaqs() {
  try {
    const data = yield fetchData(faqsApi, faqsPath)
    yield put({ type: 'RECEIVE_FAQS', data })
  } catch (error) {
    yield put({ type: 'LOAD_FAILURE', error})
  }
}

export function* watchForloadFaqs() {
  while (true) {
    yield take('REQUEST_FAQS')
    yield fork(loadFaqs)
  }
}
