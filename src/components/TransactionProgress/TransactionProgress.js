import React from 'react'
import PropTypes from '../../proptypes'
import { noop } from '../../utils'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'
import ButtonIcon from '../Button/ButtonIcon'
import { IconClose } from '../../icons'
import Info from '../Info/Info'
import Link from '../Link/Link'
import Popover from '../Popover/Popover'
import ProgressBar from '../ProgressBar/ProgressBar'
import Timer from '../Timer/Timer'

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
      <section
        css={`
          padding: ${2 * GU}px;
        `}
      >
        <ButtonIcon
          label="Close"
          onClick={onClose}
          css={`
            position: absolute;
            top: ${1 * GU}px;
            right: ${1 * GU}px;
          `}
        >
          <IconClose />
        </ButtonIcon>
        <h1 css="font-weight: 600">Pending transaction</h1>
        <div
          css={`
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: ${2 * GU}px 0 ${1 * GU}px;
          `}
        >
          <span
            css={`
              ${textStyle('label2')};
              color: ${theme.contentSecondary};
            `}
          >
            Estimated time:
          </span>
          <Timer format="ms" end={endTime} />
        </div>
        <ProgressBar
          css={`
            color: ${theme.accent};
          `}
          value={progress}
        />
        <div
          css={`
            display: flex;
            justify-content: ${slow ? 'space-between' : 'end'};
            align-items: center;
            padding-top: ${2 * GU}px;
          `}
        >
          {slow && (
            <div
              css={`
                margin-right: ${2 * GU}px;
              `}
            >
              <Info.Alert>Slow transaction. Retry with more gas</Info.Alert>
            </div>
          )}
          <Link href={transactionHashUrl} css="text-decoration: none">
            See on Etherscan
          </Link>
        </div>
      </section>
    </Popover>
  )
})

TransactionProgress.propTypes = {
  endTime: PropTypes.instanceOf(Date),
  onClose: PropTypes.func,
  opener: PropTypes._element,
  progress: PropTypes.number,
  slow: PropTypes.bool,
  transactionHashUrl: PropTypes.string,
  visible: PropTypes.bool,
}

TransactionProgress.defaultProps = {
  onClose: noop,
  visible: false,
}

export default TransactionProgress
