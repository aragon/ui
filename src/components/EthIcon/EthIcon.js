import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Blockies from 'react-blockies'

const PX_RATIO = typeof devicePixelRatio === 'undefined' ? 2 : devicePixelRatio
const BLOCKIES_SQUARES = 8 // commonly used to represent Ethereum addresses
const BASE_SCALE = 3

class EthIcon extends React.Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    scale: PropTypes.number,
    radius: PropTypes.number,
  }
  static defaultProps = {
    scale: 1,
    radius: 0,
  }
  render() {
    const { address, scale, radius, ...props } = this.props
    const blockiesScale = scale * BASE_SCALE
    return (
      <Main size={BLOCKIES_SQUARES * blockiesScale} radius={radius} {...props}>
        <BlockiesWrapper size={BLOCKIES_SQUARES * blockiesScale * PX_RATIO}>
          <Blockies
            seed={address.toLowerCase()}
            size={BLOCKIES_SQUARES}
            scale={blockiesScale * PX_RATIO}
          />
        </BlockiesWrapper>
      </Main>
    )
  }
}

const Main = styled.div`
  display: inline-flex;
  overflow: hidden;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: ${p => p.radius}px;
`

const BlockiesWrapper = styled.div`
  /* display:flex to remove the display:inline on the child without using a
  * selector (Blockies doesn’t allow the style prop to be passed). */
  display: flex;
  width: ${p => p.size}px;
  height: ${p => p.size}px;

  /* add high-res screens support to Blockies */
  transform: scale(${1 / PX_RATIO}, ${1 / PX_RATIO});
  transform-origin: 0 0;
`

export default EthIcon
