import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { noop } from '../../utils'
import Text from '../Text/Text'
import { Link } from '../Link'
import Countdown from '../Countdown/Countdown'
import { Info } from '../Info'
import ProgressBar from '../ProgressBar/ProgressBar'
import Popover from '../Popover/Popover'
import { IconClose } from '../../icons'
import { useTheme } from '../../theme'
import { GU } from '../../style'

const TransactionProgress = React.memo(function TransactionProgress({
  visible,
  slow,
  progress,
  endTime,
  transactionHashUrl,
  onClose,
  opener,
}) {
  const theme = useTheme()

  return (
    <Popover visible={visible} opener={opener} onClose={onClose}>
      <CloseButton type="button" onClick={onClose}>
        <IconClose />
      </CloseButton>
      <Wrapper>
        <Text size="large" weight="bold">
          Pending transaction
        </Text>
        <ContentWrapper>
          <Text
            smallcaps
            css={`
              color: ${theme.contentSecondary};
            `}
          >
            Estimated time:
          </Text>
          <Countdown removeDaysAndHours end={endTime} />
        </ContentWrapper>
        <ProgressBar
          css={`
            color: ${theme.accent};
          `}
          value={progress}
        />
        <FooterWrapper slow={slow}>
          {slow && (
            <SlowTransaction>
              <Info.Alert>Slow transaction. Retry with more gas</Info.Alert>
            </SlowTransaction>
          )}
          <Link
            external
            href={transactionHashUrl}
            css={`
              text-decoration: none;
            `}
          >
            See on Etherscan
          </Link>
        </FooterWrapper>
      </Wrapper>
    </Popover>
  )
})

TransactionProgress.propTypes = {
  visible: PropTypes.bool,
  opener: PropTypes.instanceOf(Element),
  slow: PropTypes.bool,
  transactionHashUrl: PropTypes.string,
  endTime: PropTypes.instanceOf(Date),
  onClose: PropTypes.func,
  progress: PropTypes.number,
}

TransactionProgress.defaultProps = {
  visible: false,
  onClose: noop,
}

const Wrapper = styled.div`
  padding: 1rem;
`

const CloseButton = styled.button`
  position: absolute;
  top: ${GU}px;
  right: ${GU}px;
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

const SlowTransaction = styled.div`
  margin-right: ${GU}px;
`

export default TransactionProgress
