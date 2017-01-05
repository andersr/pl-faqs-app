import React from 'react'

const List = ({ listItems }) =>(
  <ul>{
    listItems.map(item => {
      return <li>{item.question}</li>
    })
  }</ul>
)

export default List
