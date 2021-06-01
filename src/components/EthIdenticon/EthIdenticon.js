import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Blockies from 'react-blockies'
import { stylingProps, isAddress } from '../../utils'

const PX_RATIO = typeof devicePixelRatio === 'undefined' ? 2 : devicePixelRatio
const BLOCKIES_SQUARES = 6
const BASE_SCALE = 3

class EthIdenticon extends React.Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    scale: PropTypes.number,
    radius: PropTypes.number,
    soften: PropTypes.number,
  }
  static defaultProps = {
    scale: 1,
    radius: 50,
    soften: 0.3,
  }
  render() {
    const { address, scale, radius, soften } = this.props
    const blockiesScale = scale * BASE_SCALE
    return isAddress(address) ? (
      <Main
        size={BLOCKIES_SQUARES * blockiesScale}
        radius={radius}
        {...stylingProps(this)}
      >
        <BlockiesScaling size={BLOCKIES_SQUARES * blockiesScale * PX_RATIO}>
          <BlockiesOpacity soften={soften}>
            <Blockies
              seed={address.toLowerCase()}
              size={BLOCKIES_SQUARES}
              scale={blockiesScale * PX_RATIO}
            />
          </BlockiesOpacity>
        </BlockiesScaling>
      </Main>
    ) : null
  }
}

/*
 * `vertical-align` prevents the inline parent to have an incorrect height.
 *
 * See
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=491549#c9
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=737757#c1
 */
const Main = styled.div`
  display: inline-flex;
  vertical-align: middle;
  overflow: hidden;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: ${p => p.radius}%;

  // Fix an issue where the border-radius wasn’t visible on Blink browsers.
  // See https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
  mask-image: linear-gradient(red, red);
`

const BlockiesOpacity = styled.div`
  opacity: ${p => 1 - p.soften};
`

const BlockiesScaling = styled.div`
  /* display:flex to remove the display:inline on the child without using a
  * selector (Blockies doesn’t allow the style prop to be passed). */
  display: flex;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background: #fff;

  /* add high-res screens support to Blockies */
  transform: scale(${1 / PX_RATIO}, ${1 / PX_RATIO});
  transform-origin: 0 0;
`

export default EthIdenticon
