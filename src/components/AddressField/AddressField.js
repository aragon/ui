import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { useTheme } from '../../theme'
import TextCopy from '../TextCopy/TextCopy'
import EthIdenticon from '../EthIdenticon/EthIdenticon'

const HEIGHT = 5 * GU
const IDENTICON_SIZE = 6 * GU

const AddressField = React.memo(function AddressField({
  address,
  autofocus,
  icon,
  onCopy,
  ...props
}) {
  const theme = useTheme()
  const copyRef = useRef(null)

  useEffect(() => {
    const id = setTimeout(() => {
      if (autofocus && copyRef.current) {
        copyRef.current.focus()
      }
    }, 0)
    return () => clearTimeout(id)
  }, [autofocus])

  return (
    <TextCopy
      ref={copyRef}
      adornment={
        <EthIdenticon
          address={address}
          onCopy={onCopy}
          scale={2}
          css={`
            transform: scale(${HEIGHT / IDENTICON_SIZE});
            transform-origin: 0 0;
            position: absolute;
            left: 0;
            top: 0;
          `}
        />
      }
      value={address}
    />
  )
})

AddressField.propTypes = {
  address: PropTypes.string.isRequired,
  autofocus: PropTypes.bool,
  icon: PropTypes.node,
  onCopy: PropTypes.func,
}

AddressField.defaultProps = {
  autofocus: true,
}

export default AddressField
