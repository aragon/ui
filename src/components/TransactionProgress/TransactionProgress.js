import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, SafeLink, Countdown, Info, theme } from '@aragon/ui'
import { Transition, animated } from 'react-spring'

import { springs } from '../../utils/styles'

import { IconClose } from '../../icons'
import ProgressBar from '../ProgressBar/ProgressBar'

const Card = styled(animated.div)`
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  z-index: 999;
  width: 480px;
`

const Wrapper = styled.div`
  padding: 1rem;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: 0;
  outline: 0;
  &::-moz-focus-inner {
    border: 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

const FooterWrapper = styled.div`
  display: flex;
  justify-content: ${({ slow }) => (slow ? 'space-between' : 'end')};
  align-items: center;
  padding-top: 1rem;
`

const Link = styled(SafeLink)`
  font-size: 16px;
  font-weight: 700;
  color: #21aae7;
  text-decoration: none;
`

export default class TransactionProgress extends React.Component {
  static propTypes = {
    top: PropTypes.string,
    left: PropTypes.string,
  }

  state = {
    opened: false,
  }
  render() {
    const { slow, top, left, handleClose } = this.props

    return (
      <Transition
        config={springs.swift}
        from={{ scale: 0.9, opacity: 0 }}
        to={{ scale: 1, opacity: 1 }}
        native
      >
        {({ scale, opacity }) => (
          <Card
            style={{
              top,
              left,
              opacity,
              transform: scale.interpolate(t => `scale3d(${t},${t},1)`),
            }}
          >
            <CloseButton type="button" onClick={handleClose}>
              <IconClose />
            </CloseButton>
            <Wrapper>
              <Text size="large" weight="bold">
                Pending transaction
              </Text>
              <ContentWrapper>
                <Text smallcaps={true} weight="bolder" color="#707070">
                  Estimated time:
                </Text>
                <Countdown
                  removeDaysAndHours={true}
                  end={new Date(Date.now() + 100000)}
                />
              </ContentWrapper>
              <ProgressBar color={theme.accent} progress={0.25} />
              <FooterWrapper slow={slow}>
                {slow && (
                  <Info.Alert>Slow transaction. Retry with more gas</Info.Alert>
                )}
                <Link href="https://aragon.org/">See on Etherscan</Link>
              </FooterWrapper>
            </Wrapper>
          </Card>
        )}
      </Transition>
    )
  }
}
