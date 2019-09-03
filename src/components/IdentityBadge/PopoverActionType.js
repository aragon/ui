import PropTypes from 'prop-types'

export default PropTypes.shape({
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
})
