import styled from 'styled-components';

export const Button = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0);
    transition: 0.3s;
  }

  img {
    display: block;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(3, 150px);

  &:hover ${Button}:not(:hover) {
    filter: grayscale(100%);

    &::after {
      background-color: rgba(#000, 0.5);
    }
  }
`;
