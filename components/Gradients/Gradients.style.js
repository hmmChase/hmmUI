import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  width: 750px;
`;

export const OrangeAqua = styled.div`
  height: 100%;
  background: #ffe5bb;

  /* fallback for old browsers */
  background: -webkit-linear-gradient(
    0deg,
    #119da4 5.66%,
    #9bc7b2 31.53%,
    #ffe5bb 50.01%,
    #ffbe99 72.18%,
    #ff886a 94.35%
  );

  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    0deg,
    #119da4 5.66%,
    #9bc7b2 31.53%,
    #ffe5bb 50.01%,
    #ffbe99 72.18%,
    #ff886a 94.35%
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
