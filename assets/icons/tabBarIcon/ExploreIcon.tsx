import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ExploreIcon = ({color}: {color: string}) => {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <Path
        d="M6 13.875H13M8.64048 1.41853L2.70597 6.03426C2.30927 6.34281 2.11092 6.49708 1.96802 6.69028C1.84144 6.86142 1.74715 7.05422 1.68977 7.2592C1.625 7.49061 1.625 7.74189 1.625 8.24445V14.575C1.625 15.5551 1.625 16.0452 1.81574 16.4195C1.98352 16.7488 2.25123 17.0165 2.58052 17.1843C2.95486 17.375 3.44491 17.375 4.425 17.375H14.575C15.5551 17.375 16.0451 17.375 16.4195 17.1843C16.7488 17.0165 17.0165 16.7488 17.1843 16.4195C17.375 16.0452 17.375 15.5551 17.375 14.575V8.24445C17.375 7.74189 17.375 7.49061 17.3102 7.2592C17.2528 7.05422 17.1586 6.86142 17.032 6.69028C16.8891 6.49708 16.6907 6.34281 16.294 6.03427L10.3595 1.41853C10.0521 1.17943 9.8984 1.05989 9.72868 1.01393C9.57892 0.973384 9.42108 0.973384 9.27132 1.01393C9.1016 1.05989 8.94789 1.17943 8.64048 1.41853Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ExploreIcon;