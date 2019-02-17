import PropTypes from 'prop-types'

const ExtendedPropTypes = {
  ...PropTypes,
  _component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  _spring: PropTypes.shape({
    mass: PropTypes.number,
    tension: PropTypes.number,
    friction: PropTypes.number,
    precision: PropTypes.number,
  }),
  _null: PropTypes.oneOf([null]),
}

export default ExtendedPropTypes
