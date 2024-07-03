import { View, Text, Dimensions, ScrollView, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCart from '../Components/ProductCart'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const NewScreen = () => {
    const [new_in, setNew_in] = useState([]);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getcurrencies = () => {
            axios.get(`https://beyond-fix.applaiteknoloji.online/api/new_in`, {
                headers: {
                    currency: 'SAR'

                }
            })
                .then((response) => {
                    if (response.status === 200) {
                        setLoading(false)
                        setData(response.data.new_in[0]);
                    }
                })
                .catch((error) => {
                    console.log(error.errors);
                })
        }
        getcurrencies()
    }, [])

    const screenWidth = Dimensions.get('screen').width - Dimensions.get('screen').width / 22 * 2
    const navigation = useNavigation()
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
                    paddingVertical: Dimensions.get('screen').height / 15,

                    paddingHorizontal: Dimensions.get('screen').width / 22,
                    backgroundColor: 'white'


                }}
            >
                <Header
                    title={'New'}
                />
                <Text
                    style={{
                        color: 'rgba(0, 0, 0, 1)',
                        fontWeight: '500',
                        fontSize: 20,
                        marginBottom: 24
                    }}
                >New Products</Text>
                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}
                    >

                        {data && data.map((newItem, index) => {
                            console.log(newItem.id);
                            return (
                                <View
                                    style={{
                                        width: '',
                                        marginRight: 7
                                    }}
                                    key={index}

                                >
                                    
                                    <ProductCart
                                        img={{ uri: newItem.image }}
                                        favIcon={true}
                                        cartIcon={true}
                                        discount={newItem.discount_percentage_selling_price + '%'}
                                        Name={newItem.name_en}
                                        desc={newItem.desc_en}
                                        rating={3}
                                        isFav={false}
                                        id={newItem.id}
                                        price={'SAR' + newItem.price}
                                        discountPrice={'SAR' + newItem.final_selling_price}
                                        handlePress={() => navigation.navigate('ProductDetails', {
                                            sku: newItem.sku,
                                            productID:newItem.id
                                        })}
                                    />
                                </View>
                                
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
    )
}


export default NewScreen
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