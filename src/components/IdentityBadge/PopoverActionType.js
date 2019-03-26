import PropTypes from 'prop-types'

export default PropTypes.shape({
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
})
