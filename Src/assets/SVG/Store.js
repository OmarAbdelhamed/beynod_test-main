import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Store = (props) => {
    console.log(props);
  return (
    <Svg width={props.width&&props.width} height={props.height&&props.height} viewBox="0 0 30 30" fill={props.fill&&props.fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M27.1875 11.2512C27.1875 11.15 27.1712 11.0499 27.1387 10.9537L25.7787 6.87256C24.97 4.44506 22.7063 2.8125 20.1463 2.8125H9.85374C7.29374 2.8125 5.03127 4.44381 4.22127 6.87256L2.86125 10.9537C2.82875 11.0499 2.8125 11.15 2.8125 11.2512C2.81375 12.4737 3.295 13.5788 4.0625 14.4138V22.5C4.0625 25.085 6.165 27.1875 8.75 27.1875H13.4712V22.5C13.4712 21.6388 14.1725 20.9375 15.0337 20.9375C15.895 20.9375 16.5962 21.6388 16.5962 22.5V27.1875H21.25C23.835 27.1875 25.9375 25.085 25.9375 22.5V14.4138C26.705 13.5775 27.1863 12.4737 27.1875 11.2512ZM5.99998 7.46506C6.55373 5.80381 8.10249 4.6875 9.85374 4.6875H20.1463C21.8975 4.6875 23.4463 5.80381 24 7.46506L25.3088 11.3913C25.235 12.9 24.0325 14.0625 22.5125 14.0625C21.2463 14.0625 20.0087 13.2574 19.6337 12.1899C19.5025 11.8137 19.1475 11.5625 18.7488 11.5625H18.745C18.345 11.5638 17.99 11.8187 17.8613 12.1962C17.4975 13.2599 16.2662 14.0625 14.9975 14.0625C13.7287 14.0625 12.4975 13.2599 12.1337 12.1962C12.005 11.8187 11.65 11.5638 11.25 11.5625H11.2463C10.8488 11.5625 10.4925 11.8137 10.3613 12.1899C9.98625 13.2574 8.74875 14.0625 7.48375 14.0625C5.96375 14.0625 4.76125 12.9 4.6875 11.3913L5.99998 7.46506ZM21.25 25.3125H18.4712V22.5C18.4712 20.6038 16.9287 19.0625 15.0337 19.0625C13.1387 19.0625 11.5962 20.6038 11.5962 22.5V25.3125H8.75C7.19875 25.3125 5.9375 24.0512 5.9375 22.5V15.6512C6.425 15.825 6.94124 15.9375 7.48749 15.9375C8.92999 15.9375 10.3237 15.29 11.245 14.2787C12.1612 15.2912 13.5525 15.9375 15 15.9375C16.4475 15.9375 17.8388 15.29 18.755 14.2787C19.6763 15.2912 21.07 15.9375 22.5125 15.9375C23.0588 15.9375 23.575 15.825 24.0625 15.6512V22.5C24.0625 24.05 22.8013 25.3125 21.25 25.3125Z" fill={props.fill&&props.fill}/>
    </Svg>
    
  )
}

export default Store