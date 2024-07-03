import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ProductCart from '../Components/ProductCart'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'

const CategoryListScreen = ({ route }) => {
    const screenWidth = Dimensions.get('screen').width - Dimensions.get('screen').width / 22 * 2
    const { name } = route.params
    const navigation =useNavigation();
    return (
        <View
            style={{
                flex: 1,
                paddingTop: Dimensions.get('screen').height / 15,
                paddingBottom: Dimensions.get('screen').height / 70,
                backgroundColor: 'white'


            }}
        >
            <View
                style={{
                    marginBottom: 22,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: Dimensions.get('screen').width / 22,

                }}
            >

                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            marginRight: 7
                        }}
                    >
                        <Image source={require('../assets/Images/Frame 42.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Search')}
                    >
                        <Image source={require('../assets/Images/Group 2.png')} />
                    </TouchableOpacity>

                </View>
                <Text
                    style={{
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 20,
                        fontWeight: '600'
                    }}
                >{name}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Wishlist')}


                >
                    <Image source={require('../assets/Images/Frame 3 (2).png')} />
                </TouchableOpacity>
            </View>
            <ScrollView
                
                nestedScrollEnabled={true}
                style={{
                    borderTopColor:'rgba(240, 240, 240, 1)',
                    borderTopWidth:10,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        paddingHorizontal: Dimensions.get('screen').width / 50,
                        justifyContent:'space-between',
                        marginTop:22


                    }}
                >
                    <View
                        style={{
                            width: screenWidth / 2,
                        }}
                    >
                        <ProductCart
                            img={require('../assets/Images/Rectangle 152 (1).png')}
                            favIcon={true}
                            cartIcon={true}
                            discount={'40%'}
                            Name={'Zara'}
                            desc={'Emerald Green Unisex Oversize Zipper '}
                            rating={3}
                            price={'SAR 99,99'}
                            discountPrice={'SAR 40'}
                            handlePress={()=>navigation.navigate('ProductDetails',{
                                "id":1
                            })}

                        />
                    </View>

                    <View
                        style={{
                            width: screenWidth / 2,
                        }}
                    >
                        <ProductCart
                            img={require('../assets/Images/Rectangle 152 (1).png')}
                            favIcon={true}
                            cartIcon={true}
                            discount={'40%'}
                            Name={'Zara'}
                            desc={'Emerald Green Unisex Oversize Zipper '}
                            rating={3}
                            price={'SAR 99,99'}
                            discountPrice={'SAR 40'}
                            id={'1'}
                            handlePress={()=>navigation.navigate('ProductDetails',{
                                "id":1
                            })}

                        />
                    </View>

                    <View
                        style={{
                            width: screenWidth / 2,
                        }}
                    >
                        <ProductCart
                            img={require('../assets/Images/Rectangle 152 (1).png')}
                            favIcon={true}
                            cartIcon={true}
                            discount={'40%'}
                            Name={'Zara'}
                            desc={'Emerald Green Unisex Oversize Zipper '}
                            rating={3}
                            price={'SAR 99,99'}
                            discountPrice={'SAR 40'}
                            id={'1'}
                            handlePress={()=>navigation.navigate('ProductDetails',{
                                "id":1
                            })}

                        />
                    </View>


                    <View
                        style={{
                            width: screenWidth / 2,
                        }}
                    >
                        <ProductCart
                            img={require('../assets/Images/Rectangle 152 (1).png')}
                            favIcon={true}
                            cartIcon={true}
                            discount={'40%'}
                            Name={'Zara'}
                            desc={'Emerald Green Unisex Oversize Zipper '}
                            rating={3}
                            price={'SAR 99,99'}
                            discountPrice={'SAR 40'}
                            id={'1'}
                            handlePress={()=>navigation.navigate('ProductDetails',{
                                "id":1
                            })}

                        />
                    </View>



                    <View
                        style={{
                            width: screenWidth / 2,
                        }}
                    >
                        <ProductCart
                            img={require('../assets/Images/Rectangle 152 (1).png')}
                            favIcon={true}
                            cartIcon={true}
                            discount={'40%'}
                            Name={'Zara'}
                            desc={'Emerald Green Unisex Oversize Zipper '}
                            rating={3}
                            price={'SAR 99,99'}
                            discountPrice={'SAR 40'}
                            id={'1'}
                            handlePress={()=>navigation.navigate('ProductDetails',{
                                "id":1
                            })}

                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CategoryListScreen