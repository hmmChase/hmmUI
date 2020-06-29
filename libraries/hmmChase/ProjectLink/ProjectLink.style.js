import styled from 'styled-components';

export const projectLink = styled.a`
  background-color: #c4eada;
  cursor: pointer;
  display: inline-block;
  padding: 10px;
  border: none;
  outline: none;

  &:hover {
    box-shadow: 4px 4px 0 0 #ef7b7b;
    transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    -webkit-transition: all 200ms ease;
  }

  &:active {
    background-color: #ef7b7b;
    box-shadow: -4px -4px 0 0 #c4eada;
    transform: translateY(4px) translateX(4px);
    -moz-transform: translateY(4px) translateX(4px);
    -moz-transition: all 200ms ease;
    -ms-transform: translateY(4px) translateX(4px);
    -ms-transition: all 200ms ease;
    transition: all 200ms ease;
    -o-transform: translateY(4px) translateX(4px);
    -o-transition: all 200ms ease;
    -webkit-transform: translateY(4px) translateX(4px);
    -webkit-transition: all 200ms ease;
  }
`;
