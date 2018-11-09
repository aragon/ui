import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Text,
  SafeLink,
  Countdown,
  Info,
  ProgressBar,
  Popover,
  IconClose,
  theme,
} from '../..'
import { noop } from '../../utils'

class TransactionProgress extends React.Component {
  static propTypes = {
    openerRef: PropTypes.instanceOf(Element).isRequired,
    top: PropTypes.string,
    left: PropTypes.string,
    slow: PropTypes.bool,
    transactionHashUrl: PropTypes.string,
    endTime: PropTypes.instanceOf(Date),
    onClose: PropTypes.func,
    progress: PropTypes.number,
  }
  static defaultProps = {
    onClose: noop,
  }

  render() {
    const {
      slow,
      progress,
      endTime,
      transactionHashUrl,
      onClose,
      openerRef,
      top,
      left,
    } = this.props

    return (
      <Popover
        top={top}
        left={left}
        placement="auto"
        zIndex={100}
        openerRef={openerRef}
        onClose={onClose}
      >
        <CloseButton type="button" onClick={onClose}>
          <IconClose />
        </CloseButton>
        <Wrapper>
          <Text size="large" weight="bold">
            Pending transaction
          </Text>
          <ContentWrapper>
            <Text smallcaps color={theme.textSecondary}>
              Estimated time:
            </Text>
            <Countdown removeDaysAndHours end={endTime} />
          </ContentWrapper>
          <ProgressBar color={theme.accent} progress={progress} />
          <FooterWrapper slow={slow}>
            {slow && (
              <SlowTransaction>
                <Info.Alert>Slow transaction. Retry with more gas</Info.Alert>
              </SlowTransaction>
            )}
            <Link href={transactionHashUrl}>See on Etherscan</Link>
          </FooterWrapper>
        </Wrapper>
      </Popover>
    )
  }
}

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
  color: #21aae7;
  text-decoration: none;
`

const SlowTransaction = styled.div`
  margin-right: 10px;
`

export default TransactionProgress
