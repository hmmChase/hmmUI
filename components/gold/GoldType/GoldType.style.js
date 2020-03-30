import styled from 'styled-components';

export const Wrapper = styled.div`
  h1,
  h2 {
    margin-left: 50px;
    font-family: 'Arvo';
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 30px;
  }

  h1,
  h2 {
    color: #d5ad6d; /*if no support for background-clip*/
    background: -webkit-linear-gradient(transparent, transparent),
      -webkit-linear-gradient(top, rgba(213, 173, 109, 1) 0%, rgba(
              213,
              173,
              109,
              1
            )
            26%, rgba(226, 186, 120, 1) 35%, rgba(163, 126, 67, 1) 45%, rgba(
              145,
              112,
              59,
              1
            )
            61%, rgba(213, 173, 109, 1) 100%);
    background: -o-linear-gradient(transparent, transparent);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
