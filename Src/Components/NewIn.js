import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const NewIn = ({ catID }) => {
    const [new_in, setNew_in] = useState([]);
    const navigation = useNavigation()
    useEffect(() => {
        const getNew_in = () => {
            axios.get(`https://beyond-fix.applaiteknoloji.online/api/new_in?category_id=${catID && catID}`, {
                headers: {
                    currency: 'SAR'

                }
            })
                .then((response) => {
                    // Handle the response
                    if (response.status === 200) {
                        setNew_in(response.data.new_in[0]);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getNew_in()
    }, [new_in])
    return (
        <View
            style={{
                paddingHorizontal: Dimensions.get('screen').width / 22,

            }}
        >
            <Text
                style={{
                    fontWeight: '500',
                    fontSize: 20,
                    marginBottom: 22,

                }}
            >New In</Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >

                {new_in && new_in.map((newItem, index) => {
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
                        </View>)
                })}


            </View>
        </View>
    )
}

export default NewIn

const styles = StyleSheet.create({})