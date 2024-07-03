import React from 'react'
import Svg, { Path } from 'react-native-svg';

const CartIcon = (props) => {
  return (
    <Svg width={props.width&&props.width} height={props.height&&props.height} viewBox="0 0 15 15" fill={props.fill&&props.fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M11.76 2.94352L9.01127 1.72221C8.06439 1.30158 6.93561 1.30158 5.98873 1.72221L3.24001 2.94352C2.10876 3.44602 1.40625 4.46722 1.40625 5.60847V9.38975C1.40625 10.531 2.10876 11.5516 3.24001 12.0547L5.98938 13.276C6.45813 13.4841 6.97187 13.5885 7.48562 13.5903C7.49062 13.5903 7.495 13.5935 7.5 13.5935C7.505 13.5935 7.50938 13.591 7.51438 13.5903C8.02813 13.5885 8.54187 13.4841 9.01062 13.276L11.76 12.0547C12.8912 11.5522 13.5938 10.531 13.5938 9.38975V5.60847C13.5938 4.46722 12.8912 3.44602 11.76 2.94352ZM6.36936 2.57975C6.72374 2.42225 7.11188 2.34408 7.5 2.34408C7.88813 2.34408 8.27689 2.42225 8.63064 2.57975L11.3794 3.80099C11.5644 3.88286 11.7306 3.98534 11.88 4.10159L10.3112 4.79914L5.84187 2.81352L6.36936 2.57975ZM3.62 3.80038L4.68689 3.32659L9.15627 5.31222L8.25062 5.71475C7.79937 5.91474 7.19814 5.91537 6.74751 5.71475L3.11874 4.10159C3.26937 3.98471 3.43562 3.88288 3.62 3.80038ZM3.62064 11.1972C2.83314 10.8472 2.34375 10.1548 2.34375 9.38914V5.60786C2.34375 5.34473 2.405 5.0922 2.51312 4.8572L6.36749 6.57038C6.57437 6.66226 6.8 6.7191 7.03125 6.75723V12.606C6.80375 12.5679 6.58064 12.5116 6.37001 12.4179L3.62064 11.1972ZM12.6563 9.38975C12.6563 10.1547 12.1669 10.8478 11.3794 11.1978L8.62999 12.4191C8.41999 12.5122 8.19625 12.5691 7.96875 12.6066V6.75784C8.2 6.71971 8.42563 6.66348 8.63251 6.5716L12.4869 4.8585C12.5944 5.0935 12.6563 5.34595 12.6563 5.60908V9.38975Z" fill={props.fill&&props.fill}/>
    </Svg>
    
  )
}

export default CartIcon