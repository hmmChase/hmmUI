// https://gooey-react.netlify.app/

import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Goo.style';

const Goo = ({
  children,
  className,
  composite = false,
  blur = 12,
  id = 'gooey-react',
}) => {
  const alpha = blur * 6;
  const shift = alpha / -2;
  const r = '1 0 0 0 0';
  const g = '0 1 0 0 0';
  const b = '0 0 1 0 0';
  const a = `0 0 0 ${alpha} ${shift}`;

  return (
    <>
      <sc.EssVeeGee style={{ pointerEvents: 'none', position: 'absolute' }}>
        <defs>
          <filter colorInterpolationFilters='sRGB' id={id}>
            <feGaussianBlur stdDeviation={blur} />

            <feColorMatrix values={`${r} ${g} ${b} ${a}`} />

            {composite && <feComposite in='SourceGraphic'></feComposite>}
          </filter>
        </defs>
      </sc.EssVeeGee>

      <sc.Goo className={className} style={{ filter: `url(#${id})` }}>
        {children}
      </sc.Goo>
    </>
  );
};

Goo.propTypes = {
  blur: PropTypes.number,
  children: PropTypes.element,
  className: PropTypes.string,
  composite: PropTypes.bool,
  id: PropTypes.string,
};

export default Goo;
