import React from 'react'

const Heading = ({level, text}) => React.createElement(`h${level}`, null, text)

Heading.propTypes = {
  text:    React.PropTypes.string.isRequired,
  level:   React.PropTypes.number
}

Heading.defaultProps = {
  level: 1
}

export default Heading
