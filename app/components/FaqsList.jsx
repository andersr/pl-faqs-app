import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Accordion, Panel } from 'react-bootstrap'

const FaqsList = ({ faqs }) =>(
  <Accordion>{
    faqs.map((faq, index) => {
      const answer = <ReactMarkdown source={faq.answer} />
      return <Panel key={index} header={faq.question} eventKey={index}>{answer}</Panel>
    })
  }</Accordion>
)

export default FaqsList
