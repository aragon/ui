import styled from 'styled-components'

export default styled.div`
  display: flex;
  max-width: 800px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  & > div {
    margin-left: 20px;
  }
  & > div:first-child {
    margin: 0;
  }
`
