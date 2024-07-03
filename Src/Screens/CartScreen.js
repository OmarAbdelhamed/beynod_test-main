import { View, Text, Dimensions, ScrollView, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCart from '../Components/ProductCart'
import CartProductContainer from '../Components/CartProductContainer'
import { Colors } from '../assets/Colors'
import CommonBtn from '../Components/CommonBtn'
import TotalContainer from '../Components/TotalContainer'
import { useSelector } from 'react-redux'
import axios from 'axios'

const CartScreen = ({ navigation }) => {
    const screenWidth = Dimensions.get('screen').width - Dimensions.get('screen').width / 22 * 2
    const login = useSelector((state) => state.auth.authState);
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const getMyCart = () => {
            axios.get('https://beyond-fix.applaiteknoloji.online/api/my-cart', {
                headers: {
                    currency: 'SAR',
                    'Authorization': `Bearer ${login.token}`,


                }
            })
                .then((response) => {
                    // Handle the response
                    if (response.status === 200) {
                        setLoading(false)

                        setData(response.data.cart);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getMyCart()
    }, [])
    return (
        loading ?
            <View style={[styles.container, styles.horizontal]}>
                < ActivityIndicator size="large" color="gray" />
            </View >
            :
            <View

                style={{
                    flex: 1,
                    paddingTop: Dimensions.get('screen').height / 15,
                    paddingBottom: Dimensions.get('screen').height / 70,
                    paddingHorizontal: Dimensions.get('screen').width / 22,
                    flexDirection: 'column',
                    backgroundColor: '#fff'
                }}
            >
                <Text
                    style={{
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 20,
                        fontWeight: '600',
                        textAlign: 'center',

                    }}
                >My Shopping Cart</Text>
              

                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            flex: 1
                        }}
                    >

                        <ScrollView 
                        showsVerticalScrollIndicator={false}
                        >
                            <View
                                style={{
                                    marginTop: 22
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: '500',
                                        fontSize: 20,
                                        paddingHorizontal: Dimensions.get('screen').width / 22,

                                    }}
                                >{data.length} items</Text>


                                {data&&data.cart?.map((item,index)=>{
                                    return(
                                        <CartProductContainer
                                        item={item}
                                        
                                        />

                                    )
                                })}
                                <View
                                    style={{
                                        backgroundColor: Colors.secondry,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 12,
                                        marginBottom: 12,
                                        alignItems: 'center'

                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Image source={require('../assets/Images/coupon.png')} />
                                        <Text
                                            style={{
                                                color: 'rgba(255, 255, 255, 1)',
                                                fontWeight: '400',
                                                fontSize: 16,
                                                marginLeft: 5
                                            }}
                                        >Enter a Coupon or Promo code</Text>

                                    </View>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Coupons')}
                                    >
                                        <Text
                                            style={{
                                                color: 'rgba(255, 255, 255, 1)',
                                                fontWeight: '700',
                                                fontSize: 16
                                            }}
                                        >Select</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <TotalContainer
                                coupanState={true}
                                data={data}
                            />
                        </ScrollView>

                        <View

                        >

                            <CommonBtn
                                text={'Checkout'}
                                fontSize={20}
                                color={'rgba(255, 255, 255, 1)'}
                                Radius={10}
                                width={Dimensions.get('screen').width / 1.2}
                                height={Dimensions.get('screen').height / 18}
                                handdleClick={() => navigation.navigate('Checkout1', {
                                    data:data
                                }                               
                                )}
                                margintop={''}
                                backround={Colors.secondry}
                                fontWeight={'700'}

                            />


                        </View>
                    </View>
              
            </View>
    )
}

export default CartScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});