import styled from 'styled-components';

export const Container0 = styled.div`
  border: 1px dashed black;
`;

export const Container1 = styled.div`
  display: flex;
  border: 1px dashed black;
`;

export const Container2 = styled.div`
  display: flex;
  border: 1px dashed black;
`;

export const Container3 = styled.div`
  display: flex;
  border: 1px dashed black;
  justify-content: center;
`;

export const ResponsiveWidth = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const FlexStackRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  > button {
    margin-bottom: calc(-1 * (0.5rem));
    margin-left: calc(-1 * (0.5rem));
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const FlexStackCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  > button {
    margin-bottom: calc(-1 * (0.5rem));
    margin-left: calc(-1 * (0.5rem));
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
