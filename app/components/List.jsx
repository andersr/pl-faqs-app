import React from 'react'

const List = ({ listItems }) =>(
  <ul>{
    listItems.map((item, index) => {
      return <li key={index}><h2>{item.question}</h2><p>{item.answer}</p></li>
    })
  }</ul>
)

export default List
