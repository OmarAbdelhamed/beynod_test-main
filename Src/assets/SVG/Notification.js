import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Notification = (props) => {
  return (
    <Svg width={props.width&&props.width} height={props.height&&props.height} viewBox="0 0 24 24" fill={props.fill&&props.fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M20.4548 15.6465L19.3488 13.8005C18.9528 13.1405 18.7448 12.3855 18.7448 11.6165V8.9895C18.7448 5.2735 15.7188 2.24951 11.9998 2.24951C8.2808 2.24951 5.25479 5.2725 5.25479 8.9895V11.6165C5.25479 12.3855 5.04578 13.1405 4.65078 13.8005L3.5448 15.6465C3.1598 16.2875 3.15079 17.0595 3.51879 17.7095C3.88779 18.3615 4.55478 18.7505 5.30378 18.7505H9.28379C9.27579 18.8345 9.25079 18.9155 9.25079 19.0005C9.25079 20.5175 10.4838 21.7505 12.0008 21.7505C13.5178 21.7505 14.7508 20.5175 14.7508 19.0005C14.7508 18.9155 14.7258 18.8345 14.7178 18.7505H18.6978C19.4468 18.7505 20.1148 18.3615 20.4828 17.7104C20.8498 17.0594 20.8398 16.2875 20.4548 15.6465ZM13.2488 19.0005C13.2488 19.6895 12.6878 20.2505 11.9988 20.2505C11.3098 20.2505 10.7488 19.6895 10.7488 19.0005C10.7488 18.9155 10.7648 18.8325 10.7818 18.7505H13.2158C13.2328 18.8325 13.2488 18.9155 13.2488 19.0005ZM19.1758 16.9705C19.1278 17.0545 18.9868 17.2495 18.6958 17.2495H5.30178C5.01178 17.2495 4.86979 17.0545 4.82179 16.9705C4.77479 16.8865 4.67979 16.6655 4.82879 16.4175L5.93479 14.5715C6.47079 13.6785 6.75279 12.6565 6.75279 11.6165V8.9895C6.75279 6.1005 9.10578 3.74951 11.9978 3.74951C14.8898 3.74951 17.2428 6.1005 17.2428 8.9895V11.6165C17.2428 12.6565 17.5258 13.6785 18.0608 14.5715L19.1668 16.4175C19.3168 16.6655 19.2228 16.8865 19.1758 16.9705Z" fill={props.fill&&props.fill}/>
    </Svg>
    
  )
}

export default Notification