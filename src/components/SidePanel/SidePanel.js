/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'
import Text from '../Text/Text'
import { lerp } from '../../math-utils'
import { springConf } from '../../shared-styles'
import getPublicUrl, { styledPublicUrl as asset } from '../../public-url'

import close from './assets/close.svg'

const PANEL_WIDTH = 400
const PANEL_OVERFLOW = PANEL_WIDTH * 0.2
const PANEL_HIDE_RIGHT = -PANEL_WIDTH * 1.6

const StyledSidePanel = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(68, 81, 89, 0.65);
`

const StyledPanel = styled.aside`
  display: flex;
  flex-direction: column;
  width: ${PANEL_WIDTH + PANEL_OVERFLOW}px;
  padding-right: ${30 + PANEL_OVERFLOW}px;
  padding-left: 30px;
  height: 100%;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: -2px 0 36px rgba(0, 0, 0, 0.2);
`

const StyledPanelHeader = styled.header`
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 20px;
`

const StyledPanelCloseButton = styled.button`
  ${StyledPanelHeader} & {
    position: absolute;
    padding: 20px;
    top: 0;
    right: -30px;
    cursor: pointer;
    background: none;
    border: 0;
    &::-moz-focus-inner {
      border: 0;
    }
  }
`

const motionStyles = progress => ({
  overlay: { opacity: progress },
  panel: { right: `${lerp(progress, PANEL_HIDE_RIGHT, -PANEL_OVERFLOW)}px` },
})

type Props = {
  children: Node,
  title: string,
  opened: boolean,
  onClose?: mixed,
}

const SidePanel = ({ children, title, opened, onClose }: Props) => {
  return (
    <Motion style={{ progress: spring(Number(opened), springConf('slow')) }}>
      {({ progress }) => {
        const styles = motionStyles(progress)
        return (
          <StyledSidePanel hidden={progress === 0}>
            <Overlay style={styles.overlay} />
            <StyledPanel style={styles.panel}>
              <StyledPanelHeader>
                <Text size="xxlarge" heading="1">
                  {title}
                </Text>
                <StyledPanelCloseButton type="button" onClick={onClose}>
                  <img src={asset(close)} alt="Close" />
                </StyledPanelCloseButton>
              </StyledPanelHeader>
              {children}
            </StyledPanel>
          </StyledSidePanel>
        )
      }}
    </Motion>
  )
}

export default getPublicUrl(SidePanel)
