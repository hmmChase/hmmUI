import styled from 'styled-components';

export const Wrapper = styled.div`
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  height: 100vh;
`;

export const UL = styled.ul`
  position: absolute;
  top: 150px;
  left: 100px;
  list-style: none;

  li {
    margin-top: 15px;
    height: 90px;
    width: 90px;
    border-radius: 61%;
    box-shadow: 0px 0px 20px 0px rgba(140, 125, 63, 1);
    transition: 0.2s box-shadow ease-out;

    &:hover {
      box-shadow: 0px 0px 20px 2px rgba(140, 125, 63, 1);
    }

    img {
      width: 90px;
    }

    &.active {
      box-shadow: 0px 0px 0px 0px rgba(140, 125, 63, 1);
    }
  }
`;

export const Card = styled.div`
  /* pointer-events: none; */
  transform: translateZ(0);
  padding: 30px;
  border-radius: 5px;
  width: 400px;
  height: 200px;
  margin: auto;
  transform-style: preserve-3d;
  backface-visibility: visible;
  position: relative;
  transition: 0.1s transform ease-out;
`;

export const CardContent = styled.div`
  margin: auto;
  text-align: center;
  transform-style: preserve-3d;

  img {
    display: block;
    width: 100%;
    position: absolute;
    force3d: true;

    &.hide {
      opacity: 0;
    }

    &:nth-of-type(1) {
      transform: translateX(0%) translateY(-50%) translateZ(var(--spacing));
    }
    &:nth-of-type(2) {
      transform: translateX(0%) translateY(-50%)
        translateZ(calc(var(--spacing) * 2));
    }
    &:nth-of-type(3) {
      transform: translateX(0%) translateY(-50%)
        translateZ(calc(var(--spacing) * 3));
    }
    &:nth-of-type(4) {
      transform: translateX(0%) translateY(-50%)
        translateZ(calc(var(--spacing) * 4));
    }
    &:nth-of-type(5) {
      transform: translateX(0%) translateY(-50%)
        translateZ(calc(var(--spacing) * 5));
    }
  }

  p {
    transform: translateZ(50px);
    display: block;

    &.related {
      transform: translateZ(80px);
      font-style: italic;
    }
  }

  a {
    color: #69c6b8;
    pointer-events: auto;
  }
`;

export const Root = styled.div`
  --spacing: 0px;
`;
