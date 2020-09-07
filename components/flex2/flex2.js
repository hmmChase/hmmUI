import React from 'react';
import * as sc from './flex2.style';

const Items = () => (
  <>
    <p style={{ backgroundColor: 'red' }}>Hello 1</p>
    <div style={{ backgroundColor: 'blue' }}>Hello 2</div>
    <p style={{ backgroundColor: 'yellow' }}>Hello 3</p>
    <span style={{ backgroundColor: 'purple' }}>Hello 4</span>
    <p style={{ backgroundColor: 'orange' }}>Hello 5</p>
    <p style={{ backgroundColor: 'green' }}>Hello 6</p>
    <p style={{ backgroundColor: 'magenta' }}>Hello 7</p>
    <p style={{ backgroundColor: 'cyan' }}>Hello 8</p>
  </>
);

export const Flex0 = () => (
  <sc.Container0>
    <Items />
  </sc.Container0>
);

export const Flex1 = () => (
  <sc.Container1>
    <Items />
  </sc.Container1>
);

export const Flex2 = () => (
  <sc.Container2>
    <Items />
  </sc.Container2>
);

export const Flex3 = () => (
  <sc.Container3>
    <Items />
  </sc.Container3>
);

export const FlexButton = () => (
  <sc.ResponsiveWidth>
    <button>Button</button>
    <button>Button</button>
    <button>Button</button>
  </sc.ResponsiveWidth>
);

export const FlexStackRow = () => (
  <sc.FlexStackRow>
    <button>Button</button>
    <button>Button</button>
    <button>Button</button>
  </sc.FlexStackRow>
);

export const FlexStackCol = () => (
  <sc.FlexStackCol>
    <button>Button</button>
    <button>Button</button>
    <button>Button</button>
  </sc.FlexStackCol>
);
