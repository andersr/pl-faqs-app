import React from 'react'

const FaqsList = ({ faqs }) =>(
  <ul>{
    faqs.map((faq, index) => {
      return <li key={index}><h2>{faq.question}</h2><p>{faq.answer}</p></li>
    })
  }</ul>
)

export default FaqsList
