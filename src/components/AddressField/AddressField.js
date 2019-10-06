import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { useTheme } from '../../theme'
import TextCopy from '../TextCopy/TextCopy'
import EthIdenticon from '../EthIdenticon/EthIdenticon'

const HEIGHT = 5 * GU
const ICON_WIDTH = 5 * GU

const AddressField = React.memo(function AddressField({
  address,
  icon,
  onCopy,
  ...props
}) {
  const theme = useTheme()
  return (
    <div
      css={`
        position: relative;
        display: inline-flex;
        max-width: 100%;
        height: ${HEIGHT}px;
        background: ${theme.surface};
        padding-left: ${ICON_WIDTH}px;
      `}
      {...props}
    >
      <TextCopy
        value={address}
        icon={
          <EthIdenticon
            address={address}
            scale={2}
            onCopy={onCopy}
            css={`
              transform: scale(calc(${HEIGHT} / 48));
              transform-origin: 0 0;
              position: absolute;
              left: 0;
              top: 0;
            `}
          />
        }
      />
    </div>
  )
})
AddressField.propTypes = {
  address: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onCopy: PropTypes.func,
}

export default AddressField
