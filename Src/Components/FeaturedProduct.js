import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import axios from 'axios';

const FeaturedProduct = ({ catID }) => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
useEffect(() => {
    const getFeatured_products = () => {
        axios.get(`https://beyond-fix.applaiteknoloji.online/api/featured?category_id=${catID && catID}`, {
            headers: {
                currency: 'SAR'

            }
        })
            .then((response) => {
                // Handle the response
                if (response.status === 200) {

          setFeaturedProducts(response.data.featured[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getFeatured_products()
}, [featuredProducts])
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
    >Featured Products</Text>
    <View
        style={{
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}
    >
        {featuredProducts && featuredProducts.map((item, index) => {
            return (
                <View
                    style={{
                        width: '',
                        marginRight: 7
                    }}
                    key={index}

                >
                    <ProductCart
                            img={{ uri: item.image }}
                            favIcon={true}
                            cartIcon={true}
                            discount={item.discount_percentage_selling_price + '%'}
                            Name={item.name_en}
                            desc={item.desc_en}
                            rating={3}
                            isFav={false}
                            id={item.id}
                            price={'SAR' + item.price}
                            discountPrice={'SAR' + item.final_selling_price}
                            handlePress={() => navigation.navigate('ProductDetails', {
                                sku: item.sku,
                                productID:item.id
                            })}
                    />
                </View>)
        })}


    </View>
</View>
  )
}

export default FeaturedProduct

const styles = StyleSheet.create({})