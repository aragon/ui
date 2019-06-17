import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppBar from './AppBar'
import { stylingProps } from '../../utils'
import { useAppViewRegister } from '../Main/Main'

function AppView({ appBar, children, height, padding, tabs, title, ...props }) {
  // Notify Main that it contains this AppView
  useAppViewRegister()

  return (
    <div
      height={height}
      css={`
        display: flex;
        height: ${p => p.height};
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
      `}
      {...props}
    >
      <div
        css={`
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        `}
      >
        {appBar || <AppBar title={title} tabs={tabs} />}
      </div>
      <div
        css={`
          position: relative;
          z-index: 1;
          height: 100%;
          overflow: auto;
        `}
      >
        <div
          padding={padding}
          css={`
            display: flex;
            flex-direction: column;
            min-height: 100%;
            padding: ${({ padding }) => `${padding}px`};
          `}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

AppView.defaultProps = {
  title: '',
  padding: 30,
  height: '100vh',
}

AppView.propTypes = {
  appBar: PropTypes.element,
  title: PropTypes.string,
  children: PropTypes.node,
  padding: PropTypes.number,
  height: PropTypes.string,
  tabs: PropTypes.element,
}

export default AppView
