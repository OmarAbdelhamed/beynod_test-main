import { View, Text, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import SearchInput from '../Components/SearchInput'
import { Colors } from '../assets/Colors'
import ProductCart from '../Components/ProductCart'
import CategoriesCard from '../Components/CategoriesCard'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useSelector } from 'react-redux'

const SearchScreen = () => {
    const screenWidth = Dimensions.get('screen').width - Dimensions.get('screen').width / 22 * 2
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const navigation = useNavigation()
    const Items = [
        { id: 1, name: 'SHOES', backgroundColor: 'rgba(0, 180, 204, 1)', img: require('../assets/Images/Rectangle 238.png') },
        { id: 2, name: 'BEAUTY', backgroundColor: 'rgba(235, 0, 197, 1)', img: require('../assets/Images/Rectangle 237.png') },
        { id: 3, name: 'CLOTHING', backgroundColor: 'rgba(255, 184, 0, 1)', img: require('../assets/Images/Rectangle 236.png') },
        { id: 4, name: 'OUTLET', backgroundColor: 'rgba(193, 255, 240, 1)', img: require('../assets/Images/Rectangle 235.png') },
        { id: 5, name: 'LINGERIE', backgroundColor: 'rgba(255, 0, 0, 1)', img: require('../assets/Images/Rectangle 239.png') },
        { id: 6, name: 'SKINCARE', backgroundColor: 'rgba(224, 116, 255, 1)', img: require('../assets/Images/Rectangle 240 (1).png') },
        { id: 7, name: 'BAGS', backgroundColor: 'rgba(255, 13, 13, 1)', img: require('../assets/Images/Rectangle 241 (2).png') },
        { id: 8, name: 'JEWELRY', backgroundColor: 'rgba(0, 148, 255, 1)', img: require('../assets/Images/Rectangle 242.png') },

    ]

    const login = useSelector((state) => state.auth.authState);

    return (
        <View
            style={{
                flex: 1,
                paddingTop: Dimensions.get('screen').height / 15,
                paddingBottom: Dimensions.get('screen').height / 50,
                paddingHorizontal: Dimensions.get('screen').width / 22,
                backgroundColor: 'white',
            }}
        >
            <ComponentsHeader
                title={'Search'}
            />

            <SearchInput
                value={search}
                changeFun={(text) => {
                    setSearch(text)
                    axios.post(`https://beyond-fix.applaiteknoloji.online/api/search-products`, {
                        search: text
                    }, {
                        headers: {
                            'Authorization': ` ${login.token}`,


                        }
                    })
                        .then((response) => {
                            if (response.status === 200) {
                                setData(response.data.products[0].splice(0, 5));
                                setFullData(response.data.products[0])
                            }
                        })
                        .catch((error) => {
                            console.log(error.response.data);
                        })

                }}

            />
            {search ?
                <ScrollView
                    nestedScrollEnabled={true}

                >



                    {data && data.map((item, key) => {
                        console.log(item.name_en);
                        return (
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: 12
                                }}

                                onPress={() => navigation.navigate('ProductDetails', {
                                    'name': search,
                                    sku: item.sku,
                                    productID:item.id

                                })}                    >
                                <Text>{item.name_en.slice(0, 30)}</Text>
                                <Image source={require('../assets/Images/Frame 42.png')}
                                    style={{
                                        transform: [{ rotate: '180deg' }]
                                    }}
                                />

                            </TouchableOpacity>
                        )
                    })}
                    {data.length !== 0 &&
                        <TouchableOpacity
                            style={{
                                paddingVertical: 22,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={() => navigation.navigate('CategoryList', {
                                'name': search,
                                'item': fullData

                            })}
                        >
                            <Text
                                style={{
                                    color: Colors.primary,
                                    fontSize: 16,
                                    fontWeight: '700'
                                }}
                            >See More</Text>
                        </TouchableOpacity>
                    }


                </ScrollView>
                :
                <ScrollView
                    nestedScrollEnabled={true}

                >

                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                paddingTop: Dimensions.get('screen').height / 50,
                                paddingBottom: Dimensions.get('screen').height / 50,

                            }}
                        >
                            {Items.map((item) => {
                                return (
                                    <View
                                        style={{
                                            width: screenWidth / 4,
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
                    </View>

                    <View>
                        <Text
                            style={{
                                fontWeight: '500',
                                fontSize: 15,
                                color: Colors.black,
                                marginHorizontal: 12,
                                marginVertical: 12
                            }}
                        >New In Women Dresses</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap'
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
                                    handlePress={() => navigation.navigate('ProductDetails', {
                                        "id": 1
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
                                    handlePress={() => navigation.navigate('ProductDetails', {
                                        "id": 1
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
                                    handlePress={() => navigation.navigate('ProductDetails', {
                                        "id": 1
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
                                    handlePress={() => navigation.navigate('ProductDetails', {
                                        "id": 1
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
                                    handlePress={() => navigation.navigate('ProductDetails', {
                                        "id": 1
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
                                    handlePress={() => navigation.navigate('ProductDetails', {
                                        "id": 1
                                    })}
                                />
                            </View>

                        </View>
                    </View>
                </ScrollView>

            }

        </View>
    )
}

export default SearchScreen