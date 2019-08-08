import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from '../Tag/Tag'

function Count({ value, digits, ...props }) {
  const parsed = parseInt(value, 10)
  const max = Math.pow(10, digits) - 1
  const formatedValue = parsed >= max ? `${max}+` : parsed

  return <Tag {...props}>{formatedValue}</Tag>
}

Count.propTypes = {
  ...Tag.propTypes,
  value: PropTypes.number.isRequired,
  digits: PropTypes.number,
}

Count.defaultProps = {
  digits: 2,
}

export { Count }
