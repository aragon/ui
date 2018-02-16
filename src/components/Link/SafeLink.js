import styled from 'styled-components'

const SafeLink = styled.a.attrs({
  // See https://mathiasbynens.github.io/rel-noopener
  rel: 'noopener noreferrer',
})``

export default SafeLink
