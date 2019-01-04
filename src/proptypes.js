import PropTypes from 'prop-types'

const ExtendedPropTypes = {
  ...PropTypes,
  _component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  _spring: PropTypes.shape({
    mass: PropTypes.number,
    tension: PropTypes.number,
    friction: PropTypes.number,
    precision: PropTypes.number,
  }),
}

export default ExtendedPropTypes
