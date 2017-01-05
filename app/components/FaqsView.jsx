import React from 'react'
import Heading from '../components/Heading'
import FaqsList from '../components/FaqsList'

class FaqsView extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, faqsApi } = this.props
    if (nextProps.faqs.length === 0) {
      dispatch(fetchFaqs(faqsApi))
    }
  }

  render () {
    const { headingText, isFetchingFaqs, faqs } = this.props
    return (
      <div className="container">
        <Heading text={headingText} />
        {  isFetchingFaqs ?
            <div>Loading...</div>
          :
            <FaqsList faqs={faqs} />
        }
      </div>
    )
  }
}

export default FaqsView
