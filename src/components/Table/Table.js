import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'

function Table({ header, children, noSideBorders, ...props }) {
  const theme = useTheme()
  return (
    <table
      {...props}
      css={`
        width: 100%;
        border-spacing: 0;

        td {
          border-bottom: 1px solid ${theme.border};
        }

        /* First and last cell styling */
        tr:first-child td {
          border-top: 1px solid ${theme.border};
        }
        td:first-child {
          border-left: ${noSideBorders ? '0' : `1px solid ${theme.border}`};
        }
        td:last-child {
          border-right: ${noSideBorders ? '0' : `1px solid ${theme.border}`};
        }

        /* First and last row styling */
        tr:first-child td:first-child {
          border-top-left-radius: ${noSideBorders ? '0' : '3px'};
        }
        tr:first-child td:last-child {
          border-top-right-radius: ${noSideBorders ? '0' : '3px'};
        }
        tr:last-child td:first-child {
          border-bottom-left-radius: ${noSideBorders ? '0' : '3px'};
        }
        tr:last-child td:last-child {
          border-bottom-right-radius: ${noSideBorders ? '0' : '3px'};
        }
      `}
    >
      {header && <thead>{header}</thead>}
      <tbody>{children}</tbody>
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  noSideBorders: PropTypes.bool,
}

Table.defaultProps = {
  noSideBorders: false,
}

export default Table
