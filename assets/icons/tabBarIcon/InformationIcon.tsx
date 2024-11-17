import React from 'react';
import Svg, { Path } from 'react-native-svg';

const InformationIcon = ({ color }: { color: string }) => {
  return (
    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none">
      <Path
        d="M10.1667 13V9.5M10.1667 6H10.1754M18.9167 9.5C18.9167 14.3325 14.9992 18.25 10.1667 18.25C5.3342 18.25 1.41669 14.3325 1.41669 9.5C1.41669 4.66751 5.3342 0.75 10.1667 0.75C14.9992 0.75 18.9167 4.66751 18.9167 9.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default InformationIcon;