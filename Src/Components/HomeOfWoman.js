import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ProductCart from './ProductCart'
import { Colors } from '../assets/Colors'
import { LinearGradient } from "expo-linear-gradient";
import CategoriesCard from './CategoriesCard';
import { useNavigation } from '@react-navigation/native';



const HomeOfWoman = () => {
    
    const screenWidth = Dimensions.get('screen').width - Dimensions.get('screen').width / 22 * 2
    const [numColumns, setNumColumns] = useState(4);
    const navigation=useNavigation()
    const BrandItem = [
        { id: 1, name: 'Tommy Jeans', img: require('../assets/Images/Rectangle 183.png') },
        { id: 2, name: 'Adidas', img: require('../assets/Images/Rectangle 183 (1).png') },
        { id: 3, name: 'Namshi X Trendyol', img: require('../assets/Images/Rectangle 183 (2).png') },
        { id: 3, name: 'Namshi X Trendyol', img: require('../assets/Images/Rectangle 183 (2).png') },
        { id: 3, name: 'Namshi X Trendyol', img: require('../assets/Images/Rectangle 183 (2).png') },
        { id: 3, name: 'Namshi X Trendyol', img: require('../assets/Images/Rectangle 183 (2).png') },
    ]
    const Items = [
        { id: 1, name: 'Just For You', backgroundColor: 'rgba(0, 180, 204, 1)', img: require('../assets/Images/Rectangle 238.png') },
        { id: 2, name: 'Brands', backgroundColor: 'rgba(235, 0, 197, 1)', img: require('../assets/Images/Rectangle 237.png') },
        { id: 3, name: 'Clothes', backgroundColor: 'rgba(255, 184, 0, 1)', img: require('../assets/Images/Rectangle 236.png') },
        { id: 4, name: 'Shoes', backgroundColor: 'rgba(193, 255, 240, 1)', img: require('../assets/Images/Rectangle 235.png') },
        { id: 5, name: 'Bags', backgroundColor: 'rgba(255, 0, 0, 1)', img: require('../assets/Images/Rectangle 239.png') },
        { id: 6, name: 'Wallets', backgroundColor: 'rgba(224, 116, 255, 1)', img: require('../assets/Images/Rectangle 240 (1).png') },
        { id: 7, name: 'Makeup', backgroundColor: 'rgba(255, 13, 13, 1)', img: require('../assets/Images/Rectangle 241 (2).png') },
        { id: 8, name: 'Jewelry', backgroundColor: 'rgba(0, 148, 255, 1)', img: require('../assets/Images/Rectangle 242.png') },
        { id: 9, name: 'Skin Care', backgroundColor: 'rgba(0, 148, 255, 1)', img: require('../assets/Images/Rectangle 242.png') },
        { id: 10, name: 'Fragrance', backgroundColor: 'rgba(0, 148, 255, 1)', img: require('../assets/Images/Rectangle 242.png') },
        { id: 11, name: 'Accessories', backgroundColor: 'rgba(0, 148, 255, 1)', img: require('../assets/Images/Rectangle 242.png') },
        { id: 12, name: 'Exclusive', backgroundColor: 'rgba(0, 148, 255, 1)', img: require('../assets/Images/Rectangle 242.png') },

    ]

    const BrandFlatItem = (items) => {
        return (
            <TouchableOpacity
                style={{
                    marginRight: 7,
                    marginVertical: Dimensions.get('window').height / 75

                }}
                onPress={() => navigation.navigate('CategoryList', {
                    'name': items.title.name,
                    "id": items.title.id
                })}
            >
                <Image source={items.title.img} />
                <LinearGradient
                    colors={['rgba(217, 217, 217, 0)', "rgba(57, 0, 73, 1)"]}


                    style={{
                        padding: 15,
                        alignItems: "center",
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: '50%',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Text
                        style={{
                            fontWeight: '700',
                            fontSize: 12,
                            marginTop: 5,
                            color: '#fff'
                        }}
                    >{items.title.name}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            {/********************************cat cart***************** */}
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingTop: Dimensions.get('screen').height / 50,
                    paddingBottom: Dimensions.get('screen').height / 50,
                    paddingHorizontal: Dimensions.get('screen').width / 22,
                    justifyContent:'space-between'


                }}
            >
                {Items.map((item,index) => {
                    return (
                        <View
                            style={{
                                width: screenWidth / 4.5,
                            }}
                        >
                            <CategoriesCard
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                backgroundColor={item.backgroundColor}
                            />
                        </View>
                    )
                })}








            </View>
            {/*************************shipping***********************/}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    paddingHorizontal: Dimensions.get('screen').width / 22,
                    marginBottom: Dimensions.get('screen').width / 10,
                    height: Dimensions.get('window').height / 6
                }}
            >
                <View

                    style={{
                        width: '49%'

                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'rgba(255, 184, 0, 0.8)',
                            borderRadius: 5,
                            padding: 18,

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '700',
                                color: '#fff'
                            }}
                        >New Arrivals</Text>
                        <Text
                            style={{
                                fontSize: 10,
                                fontWeight: '400',
                                color: '#fff'
                            }}
                        >+2000 Styles Added</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            top: Dimensions.get('window').height / 13,
                        }}
                    >
                        <Image source={require('../assets/Images/Rectangle 236 (1).png')}
                            style={{
                                marginRight: 7,
                                width:'47.5%'
                            }}
                        />
                        <Image source={require('../assets/Images/Rectangle 236 (1).png')}
                        style={{
                            width:'47.5%'

                        }}
                        />

                    </View>
                </View>
                <View

                    style={{
                        width: '49%',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'rgba(151, 71, 255, 0.8)',
                            borderRadius: 5,
                            padding: 18,

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '700',
                                color: '#fff'
                            }}
                        >Free Shipping</Text>
                        <Text
                            style={{
                                fontSize: 10,
                                fontWeight: '400',
                                color: '#fff'
                            }}
                        >
                            Shop sale
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            top: Dimensions.get('window').height / 13
                        }}
                    >
                        <Image source={require('../assets/Images/Rectangle 236 (1).png')}
                            style={{
                                marginRight: 7,
                                width:'47.5%'

                            }}
                        />
                        <Image source={require('../assets/Images/Rectangle 236 (1).png')} 
                        style={{
                            width:'47.5%'

                        }}
                        />

                    </View>
                </View>

            </View>
            {/*******************brand you love***************************/}
            <View
                style={{
                    paddingHorizontal: Dimensions.get('screen').width / 35,

                }}
            >
                <Text
                    style={{
                        fontWeight: '500',
                        fontSize: 20,
                        marginBottom: 12,

                    }}
                >Brands you love</Text>
                <View
                    style={{
                        flex: 1,
                        marginTop: 12,
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent:'space-between'

                    }}
                >
                    {BrandItem.map((items, index) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    marginVertical: Dimensions.get('window').height / 75

                                }}
                                key={index}
                                onPress={() => navigation.navigate('CategoryList', {
                                    'name': items.name,
                                    "id": items.id
                                })}
                            >
                                <Image source={items.img} />
                                <LinearGradient
                                    colors={['rgba(217, 217, 217, 0)', "rgba(57, 0, 73, 1)"]}


                                    style={{
                                        padding: 15,
                                        alignItems: "center",
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        height: '50%',
                                        justifyContent: 'flex-end'
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: '700',
                                            fontSize: 12,
                                            marginTop: 5,
                                            color: '#fff'
                                        }}
                                    >{items.name}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {/* <FlatList
                    data={BrandItem}
                    numColumns={3}
                    renderItem={({ item }) => <BrandFlatItem title={item} />}
                    keyExtractor={item => item.id}
                    key={`FlatList-${3}`}

                /> */}
            </View>
            {/*************************New In*********************** */}
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
                    <View
                        style={{
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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

                </View>
            </View>
            {/****************sale 3 banners**************** */}
            {/* <View
                style={{
                    padding: Dimensions.get('screen').width / 22,

                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <View

                    >
                        <TouchableOpacity
                            style={{
                                width: screenWidth / 2,
                            }}
                        >
                            <Image source={require('../assets/Images/Rectangle 154.png')}

                            />

                        </TouchableOpacity>
                    </View>
                    <View

                    >
                        <TouchableOpacity

                        >
                            <Image source={require('../assets/Images/Rectangle 155.png')}

                            />

                        </TouchableOpacity>
                    </View>




                </View>
            </View> */}

            {/*************************New In*********************** */}
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
                >Last Dress Collection</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    <View
                        style={{
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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
                            width: '',
                            marginRight: 7
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

                </View>
            </View>
            {/***********************brand****************** */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 22,
                    paddingHorizontal: Dimensions.get('screen').width / 22,
                    marginBottom: 20

                }}
            >
                <TouchableOpacity
                        onPress={() => navigation.navigate('CategoryList', {
                            'name': 'Sale',
                            "id": 'items.title.id'
                        })}
                >
                    <Image source={require('../assets/Images/Rectangle 186 (1).png')}
                        style={{
                            width: screenWidth / 2.02
                        }}
                    />
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', "rgba(231, 196, 174, 0.9)"]}


                        style={{
                            padding: 15,
                            alignItems: "center",
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            height: '75%',
                            justifyContent: "space-between"
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "700",
                                fontSize: 20,
                                color: "#fff",
                                textAlign: 'center'
                            }}
                        >
                            SEPHORA
                        </Text>
                        <Text
                            style={{
                                fontWeight: "500",
                                fontSize: 16,
                                color: "#fff",
                                textAlign: 'center'
                            }}
                        >SHOP NOW</Text>
                    </LinearGradient>

                </TouchableOpacity>

                <TouchableOpacity
                        onPress={() => navigation.navigate('CategoryList', {
                            'name': 'Sale',
                            "id": 'items.title.id'
                        })}
                >
                    <Image source={require('../assets/Images/Rectangle 186.png')}
                        style={{
                            width: screenWidth / 2.02

                        }}
                    />
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', "rgba(56, 75, 125, 0.9)"]}
                        style={{
                            padding: 15,
                            alignItems: "center",
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            height: '75%',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "700",
                                fontSize: 20,
                                color: "#fff",
                                textAlign: 'center'
                            }}
                        >
                            CERAVE PRODUCTS
                        </Text>
                        <Text
                            style={{
                                fontWeight: "500",
                                fontSize: 16,
                                color: "#fff",
                                textAlign: 'center'
                            }}
                        >SHOP NOW</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            {/**********************Explore more*************** */}
            <View
                style={{
                    marginBottom: 200

                }}
            >
                <Text
                    style={{
                        fontWeight: '500',
                        fontSize: 20,
                        marginBottom: 22,
                        paddingHorizontal: Dimensions.get('screen').width / 22,


                    }}
                >Explore more</Text>
                <View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            marginBottom: 7,
                            backgroundColor: 'rgba(242, 242, 242, 1)',
                            paddingHorizontal: 18,
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        onPress={() => navigation.navigate('CategoryList', {
                            'name': 'Sale',
                            "id": 'items.title.id'
                        })}
                    >
                        <Text
                            style={{
                                fontWeight: '500',
                                fontSize: 20,

                            }}
                        >Shop for MEN</Text>
                        <Image source={require('../assets/Images/Rectangle 212.png')} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            marginBottom: 7,
                            backgroundColor: 'rgba(242, 242, 242, 1)',
                            paddingHorizontal: 18,
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        onPress={() => navigation.navigate('CategoryList', {
                            'name': 'Sale',
                            "id": 'items.title.id'
                        })}
                    >
                        <Text
                            style={{
                                fontWeight: '500',
                                fontSize: 20,

                            }}
                        >
                            Shop for KIDS
                        </Text>
                        <Image source={require('../assets/Images/Rectangle 212 (1).png')} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            marginBottom: 7,
                            backgroundColor: 'rgba(242, 242, 242, 1)',
                            paddingHorizontal: 18,
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        onPress={() => navigation.navigate('CategoryList', {
                            'name': 'Sale',
                            "id": 'items.title.id'
                        })}
                    >
                        <Text
                            style={{
                                fontWeight: '500',
                                fontSize: 20,

                            }}
                        >Shop for TOYS</Text>
                        <Image source={require('../assets/Images/Rectangle 212 (2).png')} />

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeOfWoman