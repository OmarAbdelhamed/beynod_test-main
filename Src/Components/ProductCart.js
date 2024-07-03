import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Rating } from 'react-native-ratings';
import Favorite from '../assets/SVG/Favorite';
import Shopping from '../assets/SVG/Shopping';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../Redux/favorite';

const ProductCart = ({
  img,
  favIcon,
  cartIcon,
  discount,
  Name,
  desc,
  rating,
  price,
  discountPrice,
  isFav,
  id,
  handlePress,
}) => {
  const orginalprice = discountPrice / (1 - discount / 100);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const login = useSelector((state) => state.auth.authState);
  

  const isFavorite = favorites.includes(id);

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get('screen').width / 2.3,
        marginBottom: 12,
      }}
      onPress={handlePress}
    >
      <View>
        <Image
          source={img}
          style={{
            width: '100%',
            height: 300,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            top: 10,
            width: '100%',
            paddingHorizontal: 5,
          }}
        >
          {favIcon && (
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}
              onPress={handleFavoriteToggle}
            >
              {isFavorite ? (
                <Image
                  source={{
                    uri: 'https://beyond-fix.applaiteknoloji.online/home/img/like.png',
                  }}
                  width={22}
                  height={22}
                />
              ) : (
                <Favorite width={22} height={22} fill={'#000'} />
              )}
            </TouchableOpacity>
          )}
          {cartIcon && (
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}
            >
              <Shopping width={22} height={22} fill={'#000'} />
            </TouchableOpacity>
          )}
        </View>
        {/* {discount &&
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            bottom: 10,
                            right: 7,
                            backgroundColor: 'rgba(150, 0, 193, 1)',
                            alignItems: 'center',
                            padding: 5,
                            borderRadius: 58
                        }}
                    >
                        <Image source={require('../assets/Images/whiteFrame 2.png')}
                            style={{
                                alignItems: 'flex-end'
                            }}
                        />
                        <Text
                            style={{
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: 8,
                                fontWeight: '500',
                            }}
                        >{discount}%</Text>
                    </View>
                } */}
      </View>
      {/* <View
                style={{
                    borderColor: 'rgba(242, 242, 242, 1)',
                    borderWidth: 1,
                    padding: Dimensions.get('screen').height / 80
                }}
            >
                <Text
                    style={{
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 12,
                        fontWeight: '700',
                        marginTop: 10

                    }}
                >{Name}</Text>
                <Text
                    style={{
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 9,
                        fontWeight: '400',
                        marginTop: 10

                    }}
                >
                    {desc}
                </Text>
                <Rating
                    ratingCount={6}
                    imageSize={13}
                    readonly={true}
                    startingValue={rating}
                    style={{

                        alignItems: 'flex-start',
                        marginTop: 12
                    }}
                />
                <View
                    style={{
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                        marginTop: 12
                    }}
                >

                    <Text
                        style={{
                            color: 'rgba(0, 0, 0, 0.3)',
                            fontSize: 11,
                            fontWeight: '500',
                            textDecorationLine: discountPrice && 'line-through'
                        }}
                    >SAR {orginalprice.toFixed(2)}</Text>
                    {discountPrice &&
                        <Text
                            style={{
                                color: 'rgba(150, 0, 193, 1)',
                                fontSize: 11,
                                fontWeight: '500',
                                marginLeft: 7
                            }}

                        >SAR {discountPrice}</Text>
                    }
                </View>
            </View> */}
    </TouchableOpacity>
  );
};

export default ProductCart;
