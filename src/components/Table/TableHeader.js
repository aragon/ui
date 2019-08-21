import React from 'react'
import PropTypes from 'prop-types'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme'

function TableHeader({ title, align, ...props }) {
  const theme = useTheme()
  return (
    <th
      css={`
        padding: 0;
        padding-left: ${align === 'left' ? 2.5 * GU + 1 : 0}px;
        padding-right: ${align === 'right' ? 2.5 * GU + 1 : 0}px;
        text-align: ${align};
        white-space: nowrap;
        color: ${theme.contentSecondary};
        ${textStyle('label2')};
        line-height: ${4 * GU}px;
      `}
      {...props}
    >
      {title}
    </th>
  )
}

TableHeader.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
}

TableHeader.defaultProps = {
  align: 'left',
}

export default TableHeader
