import React from 'react';
import { IconType } from 'types/utility.types';

const Plus: IconType = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="7" width="16" height="2" fill="#C4C4C4" />
    <rect
      x="9"
      width="16"
      height="2"
      transform="rotate(90 9 0)"
      fill="#C4C4C4"
    />
  </svg>
);

export default Plus;