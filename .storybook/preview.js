import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
// import { withKnobs } from '@storybook/addon-knobs';
// import { withA11y } from '@storybook/addon-a11y';
// import { DocsPage } from 'storybook-addon-deps/blocks';
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { MockedProvider } from '@apollo/react-testing';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global.style';
import theme from '../styles/theme.style';

// loadFontsForStorybook();

addParameters({
  options: {
    // showRoots: true,

    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }

  // a11y: {
  //   // optional selector which element to inspect
  //   element: '#root',
  //   // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
  //   config: {},
  //   // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  //   options: {}
  // }

  // // storybook-addon-deps/blocks
  // docs: { page: DocsPage },
  // dependencies: {
  //   //display only dependencies/dependents that have a story in storybook
  //   //by default this is false
  //   withStoriesOnly: true,
  //   //completely hide a dependency/dependents block if it has no elements
  //   //by default this is false
  //   hideEmpty: true
  // }
});

// addDecorator(withKnobs);
// addDecorator(withA11y);

addDecorator(story => (
  <div style={{ padding: '1rem' }}>
    {/* <MockedProvider> */}
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
    {/* </MockedProvider> */}
  </div>
));

// addParameters({
//   viewport: {
//     viewports: {
//       mobileBreakpoint: {
//         name: 'Mobile breakpoint',
//         styles: {
//           width: '479px',
//           height: '769px'
//         }
//       },
//       tabletBreakpoint: {
//         name: 'Tablet breakpoint',
//         styles: {
//           width: '768px',
//           height: '768px'
//         }
//       },
//       desktopBreakpoint: {
//         name: 'Desktop breakpoint',
//         styles: {
//           width: '1024px',
//           height: '1024px'
//         }
//       },

//       ...INITIAL_VIEWPORTS
//     },
//     defaultViewport: 'mobileBreakpoint'
//   }
// });

// addParameters({
//   backgrounds: [
//     { name: 'white', value: '#FFF' },
//     { name: 'gray', value: '#d3d3d3', default: true },
//     { name: 'black', value: '#000' },
//     { name: 'twitter', value: '#00aced' },
//     { name: 'facebook', value: '#3b5998' }
//   ]
// });

// addDecorator(withResponsiveViews({ mobile: 480, tablet: 768, desktop: 1024 }));
