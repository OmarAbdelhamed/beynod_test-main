import { View, Text, Dimensions, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import ProductCart from '../Components/ProductCart'
import { useSelector } from 'react-redux'
import axios from 'axios'

const WishlistScreen = ({ navigation }) => {
    const screenWidth = Dimensions.get('screen').width - Dimensions.get('screen').width / 22 * 2
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const login = useSelector((state) => state.auth.authState);
    useEffect(() => {

        const getFavorites = () => {
            axios.get(`https://beyond-fix.applaiteknoloji.online/api/favourites`, {
                headers: {
                    'Authorization': ` ${login.token}`,


                }
            })
                .then((response) => {
                    if (response.status === 200) {
                        setLoading(false)
                        setData(response.data.favourites);
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        }
        getFavorites()
    }, [data])
    return (
        loading ?
            <View style={[styles.container, styles.horizontal]}>
                < ActivityIndicator size="large" color="gray" />
            </View >
            :

            <View
                style={{
                    flex: 1,
                    paddingVertical: Dimensions.get('screen').height / 15,
                    paddingHorizontal: Dimensions.get('screen').width / 22,
                    backgroundColor: 'white'


                }}
            >
                <ComponentsHeader
                    title={'Wishlist'}
                />
                <ScrollView
                    nestedScrollEnabled={true}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}
                    >
                        {data.length > 0 ? data.map((item, index) => {
                            return (
                                <View
                                    style={{
                                        width: '',
                                        marginRight: 7
                                    }}
                                >
                                    <ProductCart
                                        img={{ uri: item.product.image }}
                                        favIcon={true}
                                        cartIcon={true}
                                        discount={item.product.discount_percentage_selling_price}
                                        Name={item.product.brand.name.en}
                                        desc={item.product.name_en}
                                        rating={3}
                                        price={item.product.final_price}
                                        discountPrice={item.product.final_selling_price}
                                        id={item.product.id}
                                        isFav={true}
                                        handlePress={() => navigation.navigate('ProductDetails', {
                                            "id": item.product.id
                                        })}

                                    />
                                </View>
                            )
                        })

                            :
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: Dimensions.get('screen').height / 1.5,
                                    width: Dimensions.get('screen').width / 1.1
                                }}
                            >
                             
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: '700',
                                        color: 'red'
                                    }}
                                >No Product Founted</Text>
                            </View>

                        }



                    </View>
                </ScrollView>
            </View>
    )
}

export default WishlistScreen
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