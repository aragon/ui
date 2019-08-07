import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from '../Tag/Tag'

const NORMAL = 'normal'
const SMALL = 'small'
const INFO = 'info'
const WARNING = 'warning'
const HELP = 'help'
const TAG = 'tag'
const APP = 'app'
const IDENTITY = 'identity'
const NOTIFICATION = 'notification'

function Count({ value, digits, ...props }) {
  const parsed = parseInt(value, 10)
  const max = Math.pow(10, digits) - 1
  const formatedValue = parsed >= max ? `${max}+` : parsed

  return <Tag {...props}>{formatedValue}</Tag>
}

Count.propTypes = {
  value: PropTypes.number.isRequired,
  digits: PropTypes.number,
}

Count.defaultProps = {
  digits: 2,
  mode: PropTypes.oneOf([
    INFO,
    WARNING,
    HELP,
    TAG,
    APP,
    IDENTITY,
    NOTIFICATION,
  ]),
  color: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf([NORMAL, SMALL]),
}

export { Count }
