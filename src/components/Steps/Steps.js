import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../theme'
import PropTypes from 'prop-types'

const DOT_SIZE_SM = 11
const DOT_SIZE_LG = 31
const TOP_ROW_HEIGHT = 32
const LINE_WIDTH = 2
const DIVISION = 2

const Steps = ({ steps, activeIdx, showProgress }) => (
  <StepsContainer>
    {steps.map((stepText, idx) => {
      return (
        <Step
          key={idx}
          idx={idx}
          activeIdx={activeIdx}
          isLast={idx === steps.length - 1}
          showProgress={showProgress}
        >
          {stepText}
        </Step>
      )
    })}
  </StepsContainer>
)

const Step = ({ children, idx, activeIdx, isLast, showProgress = true }) => {
  const theme = useTheme()
  const done = idx <= activeIdx
  const active = activeIdx === idx
  let doneLeftLine = false
  let doneRightLine = false

  if (idx < activeIdx) {
    doneLeftLine = true
    doneRightLine = true
  } else if (active) {
    doneLeftLine = true
  }

  return (
    <StepDiv>
      {showProgress ? (
        <>
          <StepTop>
            {idx > 0 ? <LineLeft theme={theme} done={doneLeftLine} /> : null}
            {active ? (
              <>
                <Dot theme={theme} done={done} />
                <DotActive theme={theme} />
              </>
            ) : (
              <Dot theme={theme} done={done} />
            )}
            {isLast ? null : <LineRight theme={theme} done={doneRightLine} />}
          </StepTop>

          <StepText theme={theme} active={active || done}>
            {children}
          </StepText>
        </>
      ) : null}
    </StepDiv>
  )
}

Step.propTypes = {
  children: PropTypes.node,
  idx: PropTypes.number,
  activeIdx: PropTypes.number,
  isLast: PropTypes.bool,
  showProgress: PropTypes.bool,
}

Steps.propTypes = {
  steps: PropTypes.array,
  activeIdx: PropTypes.number,
  showProgress: PropTypes.bool,
}

// HELPERS

const StepsContainer = styled.div`
  display: flex;
  user-select: none;
  margin-bottom: 16px;
`

const StepDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const StepTop = styled.div`
  width: 100%;
  height: ${TOP_ROW_HEIGHT}px;
  position: relative;
  margin-bottom: 10px;
`
const StepText = styled.div`
  color: ${p => (p.active ? p.theme.accent : p.theme.purple)};
`
const LineLeft = styled.div`
  z-index: 10;
  position: absolute;
  top: calc(50% - ${LINE_WIDTH / DIVISION}px);
  left: 0;
  right: 50%;
  height: ${LINE_WIDTH}px;
  background: ${p => (p.done ? p.theme.accent : p.theme.purple)};
`
const LineRight = styled.div`
  z-index: 10;
  position: absolute;
  top: calc(50% - ${LINE_WIDTH / DIVISION}px);
  left: 50%;
  right: 0;
  height: ${LINE_WIDTH}px;
  background: ${p => (p.done ? p.theme.accent : p.theme.purple)};
`

const Dot = styled.div`
  z-index: 20;
  position: absolute;
  background-color: ${p => (p.done ? p.theme.accent : p.theme.purple)};
  top: calc(50% - ${DOT_SIZE_SM / DIVISION}px);
  left: calc(50% - ${DOT_SIZE_SM / DIVISION}px);
  width: ${DOT_SIZE_SM}px;
  height: ${DOT_SIZE_SM}px;
  border-radius: 50%;
`

const DotActive = styled(Dot)`
  z-index: 15;
  background-color: ${p => p.theme.primary};
  top: calc(50% - ${DOT_SIZE_LG / DIVISION}px);
  left: calc(50% - ${DOT_SIZE_LG / DIVISION}px);
  width: ${DOT_SIZE_LG}px;
  height: ${DOT_SIZE_LG}px;
  animation-name: pulse;
  animation-duration: 2s;
  // animation-timing-function: ease-in-out;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes pulse {
    0% {
      opacity: 0.5;
      transform: scale(70%);
    }
    100% {
      opacity: 0.2;
      transform: scale(110%);
    }
  }
`
export { Steps }
export default Steps
