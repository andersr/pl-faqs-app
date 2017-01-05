import React from 'react'
import { Accordion, Panel } from 'react-bootstrap'

const FaqsList = ({ faqs }) =>(
  <Accordion>{
    faqs.map((faq, index) => {
      return <Panel key={index} header={faq.question} eventKey={index}>{faq.answer}</Panel>
    })
  }</Accordion>
)

export default FaqsList
