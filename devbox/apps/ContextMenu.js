import React from 'react'
import {
  Box,
  ContextMenu,
  ContextMenuItem,
  IconAdd,
  IconRemove,
  IconLabel,
  GU,
  textStyle,
  useTheme,
} from '@tecommons/ui'

const logAction = action => () => console.log(action)
const actions = [
  [logAction('add'), IconAdd, 'Add tokens'],
  [logAction('remove'), IconRemove, `Remove token`],
  [logAction('edit'), IconLabel, 'Edit label'],
]

export default function() {
  const theme = useTheme()
  return (
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      `}
    >
      <Box>
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 200px;
          `}
        >
          <p
            css={`
              ${textStyle('body2')}
            `}
          >
            Actions
          </p>
          <ContextMenu>
            {actions.map(([onClick, Icon, label], index) => (
              <ContextMenuItem onClick={onClick} key={index}>
                <span
                  css={`
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${theme.surfaceContentSecondary};
                  `}
                >
                  <Icon />
                </span>
                <span
                  css={`
                    margin-left: ${1 * GU}px;
                  `}
                >
                  {label}
                </span>
              </ContextMenuItem>
            ))}
          </ContextMenu>
        </div>
      </Box>
    </div>
  )
}
