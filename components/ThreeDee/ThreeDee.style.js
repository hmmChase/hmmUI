import styled from 'styled-components';

export const ThreeDee = styled.div`
  /* body { */
  /* background: #edf2f4; */
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  height: 100vh;
  /* } */

  .card {
    pointer-events: none;
    transform: translateZ(0);
    padding: 30px;
    background: white;
    border-radius: 5px;
    width: 400px;
    height: 200px;
    margin: auto;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    position: relative;

    .shadow {
      transform: translateZ(0px) rotateX(90deg);
      position: absolute;
      width: 100%;
      height: 30px;
      border-radius: 45%;
      left: 0;
      bottom: -50px;
      box-shadow: 0 50px 20px rgba(0, 0, 0, 0.3);
    }

    .card-content {
      margin: auto;
      text-align: center;
      transform-style: preserve-3d;
    }

    h1 {
      transform: translateZ(100px);
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
  }
`;
