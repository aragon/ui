import styled from 'styled-components'

const color = '#1dd9d5'
const checkIcon = `<svg width='14' height='10' viewBox='0 0 14 10' xmlns='http://www.w3.org/2000/svg'><path d='M4.176 7.956L12.114 0l1.062 1.062-9 9L0 5.886l1.044-1.062z' fill='${color}' fill-rule='evenodd' /></svg>`

export const CheckButton = styled.input.attrs({ type: 'radio' })`
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
  border-radius: 0;
  outline: 0;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    opacity: 0;
    transform: scale(0.3);
    transition: all 100ms ease-in-out;
  }
  &:active {
  }
  &:active:after {
    opacity: 1;
    transform: scale(0.6);
  }
  &:checked:after {
    opacity: 1;
    transform: scale(1);
    content: '';
    background-image: url("data:image/svg+xml;utf8,${checkIcon}");
    background-repeat: no-repeat;
    color: #1dd9d5;
    font-size: 20px;
    height: 14px;
    width: 14px;
    top: 1px;
    left: 0px;
  }
`
