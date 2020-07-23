import React from 'react';
import * as sc from './grid.style';

// https://grid.layoutit.com/

const Items = () => (
  <>
    <p style={{ backgroundColor: 'red' }}>Hello 1</p>
    <div style={{ backgroundColor: 'blue' }}>Hello 2</div>
    <p style={{ backgroundColor: 'yellow' }}>Hello 3</p>
    <span style={{ backgroundColor: 'purple' }}>Hello 4</span>
    <p style={{ backgroundColor: 'orange' }}>Hello 5</p>
    <p style={{ backgroundColor: 'green' }}>Hello 6</p>
    <div style={{ backgroundColor: 'magenta' }}>Hello 7</div>
    <p style={{ backgroundColor: 'cyan' }}>Hello 8</p>
  </>
);

export const Grid0 = props => (
  <sc.Container0>
    <Items />
  </sc.Container0>
);

export const GridInline = props => (
  <sc.ContainerInline>
    <Items />
  </sc.ContainerInline>
);

export const GridCard1 = props => (
  <sc.ContainerCard1>
    <span style={{ backgroundColor: 'red', justifySelf: 'start' }}>
      Hello 1
    </span>

    <span style={{ backgroundColor: 'blue', justifySelf: 'center' }}>
      Hello 2
    </span>

    <span style={{ backgroundColor: 'yellow', justifySelf: 'end' }}>
      Hello 3
    </span>

    <p style={{ backgroundColor: 'purple', margin: 0, gridArea: 'middle' }}>
      Hello 4
    </p>

    <span style={{ backgroundColor: 'orange', justifySelf: 'start' }}>
      Hello 5
    </span>

    <span style={{ backgroundColor: 'green', justifySelf: 'center' }}>
      Hello 6
    </span>

    <span style={{ backgroundColor: 'magenta', justifySelf: 'end' }}>
      Hello 7
    </span>
  </sc.ContainerCard1>
);

export const GridCard2 = props => (
  <sc.ContainerCard2>
    <span style={{ backgroundColor: 'red' }}>Hello 1</span>

    <span style={{ backgroundColor: 'blue' }}>Hello 2</span>

    <span style={{ backgroundColor: 'yellow', justifySelf: 'end' }}>
      Hello 3
    </span>

    <p
      style={{
        backgroundColor: 'purple',
        margin: 0,
        gridArea: 'middle'
      }}
    >
      Hello 4
    </p>

    <span style={{ backgroundColor: 'orange' }}>Hello 5</span>

    <span style={{ backgroundColor: 'green' }}>Hello 6</span>

    <span style={{ backgroundColor: 'magenta', justifySelf: 'end' }}>
      Hello 7
    </span>
  </sc.ContainerCard2>
);
