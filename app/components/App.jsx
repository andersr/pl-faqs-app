import React from 'react'
import Heading from './Heading'
import FaqsContainer from '../containers/FaqsContainer'
const staticContent = require('../lib/staticContent')

const App = () =>(
  <div>
    <Heading text={staticContent.faqsHeader} />
    <FaqsContainer />
  </div>
)

export default App
