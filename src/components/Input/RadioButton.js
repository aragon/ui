import styled from 'styled-components'

const RadioButton = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 14px;
  height: 14px;
  margin: 5px;
  background: #f3f9fb;
  border: 1px solid #daeaef;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    background: #daeaef;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    opacity: 0;
    transform: scale(0.3);
    transition: all 100ms ease-in-out;
  }
  &:active {
    border-color: #c9d9de;
  }
  &:active:after {
    opacity: 1;
    transform: scale(0.6);
    background: #daeaef;
  }
  &:checked:after {
    opacity: 1;
    transform: scale(1);
    background: #1dd9d5;
  }
`

export default RadioButton
