import styled, { keyframes } from 'styled-components';

export const turning_cw = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const turning_ccw = keyframes`
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;

export const Container = styled.div`
  height: 300px;
  width: 800px;
  margin: auto;
  -webkit-font-smoothing: antialiased;
`;

export const OuterCircle = styled.div`
  animation: ${turning_cw} 5s infinite;
  background: linear-gradient(
    to bottom,
    #ffffff 48%,
    #ecebfa 49%,
    #ecebfa 51%,
    #fff 52%
  );
  border-radius: 220px;
  border: 10px solid #ecebfa;
  border-top-color: #746ebb;
  box-shadow: 0 0 50px 10px #453d9b;
  height: 220px;
  margin: 20% auto;
  opacity: 0.7;
  position: relative;
  text-align: center;
  width: 220px;
`;

export const InnerCircle = styled.div`
  animation: ${turning_ccw} 3s infinite;
  background: linear-gradient(
    to bottom,
    #ecebfa 48%,
    #746ebb 49%,
    #746ebb 51%,
    #ecebfa 52%
  );
  border: 10px solid #ecebfa;
  border-radius: 180px;
  border-left-color: #746ebb;
  border-right-color: #746ebb;
  height: 180px;
  margin: 10px;
  position: absolute;
  transform: rotate(360deg);
  width: 180px;
`;

export const CenterCircle = styled.div`
  animation: ${turning_cw} 5s infinite;
  background: linear-gradient(
    to bottom,
    #fff 48%,
    #ecebfa 49%,
    #ecebfa 51%,
    #fff 52%
  );
  border: 10px solid #746ebb;
  border-radius: 140px;
  border-bottom-color: #ecebfa;
  height: 140px;
  margin: 10px;
  position: absolute;
  transform: rotate(360deg);
  width: 140px;
`;

export const Content = styled.div`
  background: #2e2a69;
  border-radius: 140px;
  color: #746ebb;
  font-size: 30px;
  font-weight: bold;
  height: 120px;
  line-height: 120px;
  text-align: center;
  text-shadow: 0 2px 2px #000;
  width: 120px;

  /* position: absolute; */
  /* top: 10px;	*/
  /* left: 10px;	*/
`;
