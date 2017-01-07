import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'
import FaqsContainer from './containers/FaqsContainer'
import constants from './lib/constants'
const staticContent = require('./lib/staticContent')

render(
  <Provider store={store}>
    <FaqsContainer faqsApi={constants.faqsApi} headingText={staticContent.faqsHeader} />
  </Provider>,
  document.getElementById('root')
)

// if (module.hot) {
//   module.hot.accept('./containers/FaqsContainer', () => {
//     // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
//     const NextApp = require('./containers/FaqsContainer').default;
//
//     // And render it into the root element again
//     render(
//       <Provider store={store}>
//       <AppContainer>
//         <NextApp faqsApi={constants.faqsApi} headingText={staticContent.faqsHeader} />
//         </AppContainer>
//       </Provider>,
//       rootEl
//     );
//   })
// }
