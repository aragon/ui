import PropTypes from 'prop-types'

const ExtendedPropTypes = {
  ...PropTypes,
  _component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default ExtendedPropTypes
