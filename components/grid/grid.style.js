import styled, { css } from 'styled-components';

const baseMixin = css`
  display: grid;
  /* border: 1px dashed black; */
`;

export const Container0 = styled.div`
  ${baseMixin};
`;

export const ContainerInline = styled.div`
  border: 1px dashed black;
  display: inline-grid;
`;

export const ContainerCard1 = styled.div`
  ${baseMixin};

  grid-template-areas:
    'top top top'
    'middle middle middle'
    'bottom bottom bottom';

  grid-gap: 1rem;
`;

export const ContainerCard2 = styled.div`
  ${baseMixin};

  grid-template-areas:
    'top top top'
    'middle middle middle'
    'bottom bottom bottom';

  grid-template-columns: min-content;

  grid-gap: 1rem;
`;
