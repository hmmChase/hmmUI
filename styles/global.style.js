import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
// import theme from './theme.style';

// export const fontUrl =
//   'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap';

export default createGlobalStyle`
  ${styledNormalize}

  ${
    '' /* @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900'); */
  }

  ${
    '' /* @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url('/fonts/open-sans-v15-latin-regular.woff2') format('woff2'),
         url('/fonts/open-sans-v15-latin-regular.woff') format('woff');
  } */
  }

  ${
    '' /* @font-face {
    font-family: 'Play';
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url('/fonts/play-v10-latin-regular.woff2') format('woff2'),
         url('/fonts/play-v10-latin-regular.woff') format('woff');
  } */
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Open Sans', sans-serif;

    ${'' /* color: ${theme.color.text}; */}
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;

    ${'' /* overflow-y: auto; */}
    ${'' /* overflow-x: hidden; */}

    ${'' /* -webkit-font-smoothing: antialiased; */}
    ${'' /* -moz-osx-font-smoothing: grayscale; */}
    ${'' /* -webkit-tap-highlight-color: rgba(0, 0, 0, 0); */}
    ${'' /* -webkit-tap-highlight-color: transparent; */}
    ${'' /* -webkit-overflow-scrolling: touch; */}

  }

  #root {
    height: 100%;
  }
`;
