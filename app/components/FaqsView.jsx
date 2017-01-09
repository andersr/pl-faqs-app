import React from 'react'
import Heading from './Heading'
import FaqsList from './FaqsList'
import Spinner from './Spinner'
import { fetchFaqs } from '../state/actions/faqActions'

class FaqsView extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestFaqs()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.faqs.length === 0) {
      this.props.requestFaqs()
    }
  }

  render () {
    const { headingText, isFetchingFaqs, faqs } = this.props
    return (
      <div className="container"><Heading text={headingText} />
      {  isFetchingFaqs ?
         <Spinner />
         :
         <FaqsList faqs={faqs} />
      }
      </div>
    )
  }
}

export default FaqsView
