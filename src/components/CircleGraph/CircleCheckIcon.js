import React from 'react'
import PropTypes from 'prop-types'
import { degreesToRadians } from '../../utils'
import { useTheme } from '../../theme'

const CHECK_ICON_RATE = 0.28

const CircleCheckIcon = ({ radius, degreesPct, colorSettings = {} }) => {
  const theme = useTheme()
  const { innerBackground, outerBackground, checkColor } = colorSettings
  const iconSize = Math.ceil(radius * 2 * CHECK_ICON_RATE)
  const radians = degreesToRadians(degreesPct * 360 - 90)
  const xPos = radius * Math.cos(radians)
  const yPos = radius * Math.sin(radians)

  return (
    <div
      css={`
        position: relative;
        top: ${yPos}px;
        left: ${xPos}px;
      `}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 40.6667C32.3093 40.6667 40.6667 32.3093 40.6667 22C40.6667 11.6907 32.3093 3.33333 22 3.33333C11.6907 3.33333 3.33333 11.6907 3.33333 22C3.33333 32.3093 11.6907 40.6667 22 40.6667Z"
          fill={innerBackground ?? theme.positiveSurfaceContent}
          stroke={outerBackground ?? theme.surface}
          strokeWidth="5.33333"
        />
        <path
          d="M28.203 16.1179L28.203 16.1179L19.1841 25.7674L15.7973 22.1439C15.7973 22.1439 15.7973 22.1439 15.7973 22.1439C15.4288 21.7496 14.8261 21.7497 14.4576 22.1439L14.4576 22.1439C14.0955 22.5312 14.0955 23.1547 14.4576 23.5421L14.5874 23.4207L14.4576 23.5421L18.5142 27.8822C18.8826 28.2765 19.4857 28.2761 19.8539 27.8822L29.5427 17.5161C29.5427 17.5161 29.5427 17.5161 29.5427 17.5161C29.9048 17.1287 29.9048 16.5053 29.5427 16.1179C29.1742 15.7236 28.5715 15.7237 28.203 16.1179Z"
          fill={checkColor ?? 'white'}
          stroke={checkColor ?? 'white'}
          strokeWidth="0.355556"
        />
      </svg>
    </div>
  )
}

CircleCheckIcon.propTypes = {
  radius: PropTypes.number,
  degreesPct: PropTypes.number,
  colorSettings: PropTypes.shape({
    innerBackground: PropTypes.string,
    outerBackground: PropTypes.string,
    checkColor: PropTypes.string,
  }),
}

export default CircleCheckIcon
