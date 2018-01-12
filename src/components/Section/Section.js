/* @flow */
import React from 'react'
import styled from 'styled-components'
import { grid } from '../../utils/styles/grid'

const StyledContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ large }) => grid(large ? 12 : 10)}px;
`

type Props = {
  className: string,
  large: boolean,
  publicUrl: string,
  visual: boolean,
}

const DefaultProps = {
  large: false,
  visual: false,
}

const Section = ({ large, visual, className, publicUrl, ...props }: Props) => {
  const containerProps = { className }
  const content = (
    <StyledContent large={large}>
      <div {...props} />
    </StyledContent>
  )
  if (visual) return <div {...containerProps}>{content}</div>
  return <section {...containerProps}>{content}</section>
}

Section.defaultProps = DefaultProps
export default Section
