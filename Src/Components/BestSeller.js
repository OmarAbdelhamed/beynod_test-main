import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import { Colors } from '../assets/Colors'
// import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

const BestSeller = () => {
    const screenWidth = Dimensions.get('screen').width - Dimensions.get('screen').width / 22 * 2
    const [numColumns, setNumColumns] = useState(4);
    const [news_bar, setNews_bar] = useState({});
    const [topCategories, setTopCategories] = useState([]);
    const [single_banner, setSingle_banner] = useState({});
    const [single_banner2, setSingle_banner2] = useState({});
    const [new_in, setNew_in] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [home_forniture, setHome_forniture] = useState([]);
    const [top_slider_value, setTop_slider_value] = useState([]);
    const [brands, setBrands] = useState([]);
    const login = useSelector((state) => state.auth.authState);

    const navigation = useNavigation()
    useEffect(() => {
        getHome_forniture();
        getsingle_product();
        top_slider();
        getbrands()
    }, [])

    const getsingle_product = () => {
        axios.get(`https://beyond-fix.applaiteknoloji.online/api/new_in`, {
            headers: {
                'Authorization': ` ${login.token}`,
                'currency': 'SAR'


            }
        })
            .then((response) => {
                // Handle the response
                if (response.status === 200) {
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const top_slider = () => {
        axios.get(`https://beyond-fix.applaiteknoloji.online/api/top_slider`, {
            headers: {
                'Authorization': ` ${login.token}`,
                'currency': 'SAR'
            }
        })
            .then((response) => {
                // Handle the response
                if (response.status === 200) {
                    setTop_slider_value(response.data.top_slider.value);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
   
 

    const getbrands = () => {
        axios.get('https://beyond-fix.applaiteknoloji.online/api/brands')
            .then((response) => {
                // Handle the response
                if (response.status === 200) {
                    setBrands(response.data.data.slice(0, 6))
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
 

 
    const getHome_forniture = () => {
        axios.get('https://beyond-fix.applaiteknoloji.online/api/home_forniture')
            .then((response) => {
                // Handle the response
                if (response.status === 200) {
                    // setNew_in(response.data.new_in);
                    setHome_forniture(response.data.home_forniture);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const BrandItem = [
        { id: 1, name: 'Tommy Jeans', img: require('../assets/Images/Rectangle 183.png') },
        { id: 2, name: 'Adidas', img: require('../assets/Images/Rectangle 183 (1).png') },
        { id: 3, name: 'Namshi X Trendyol', img: require('../assets/Images/Rectangle 183 (2).png') },
    ]


    return (
        <View>
            {/*************************sale text******************** */}
          
            {/*******************header carsoul***************/}
       
            {/********************sale********************/}

  
            {/*********************categories******************** */}
          
            {/*****************banner***************** */}
      
            {/*************************New In*********************** */}
       

            {/*********************banner*************************** */}
      
            {/**************************Featured Products***************** */}
         
            {/******************Featured Products Brands********************/}
            <View
                style={{
                    flex: 1,
                    marginTop: 12,
                    paddingHorizontal: Dimensions.get('screen').width / 40,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'space-between'

                }}
            >

                {brands && brands.map((items, index) => {
                    return (
                        <TouchableOpacity
                            style={{
                                marginVertical: Dimensions.get('window').height / 75,
                                width:Dimensions.get('window').width/4,
                                marginTop:50

                            }}
                            key={index}
                            onPress={() => navigation.navigate('CategoryList', {
                                'name': items.name.en,
                                "id": items.id
                            })}
                        >
                            {/* <Image source={{uri:items.image} /> */}
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
                               >{items.name.en}</Text>
                           </LinearGradient>

                        </TouchableOpacity>
                       //<TouchableOpacity
                        //     style={{
                        //         marginVertical: Dimensions.get('window').height / 75

                        //     }}
                        //     key={index}
                        //     onPress={() => navigation.navigate('CategoryList', {
                        //         'name': items.name,
                        //         "id": items.id
                        //     })}
                        // >
                        //     <Image source={items.img} />
                        //     <LinearGradient
                        //         colors={['rgba(217, 217, 217, 0)', "rgba(57, 0, 73, 1)"]}


                        //         style={{
                        //             padding: 15,
                        //             alignItems: "center",
                        //             position: 'absolute',
                        //             bottom: 0,
                        //             width: '100%',
                        //             height: '50%',
                        //             justifyContent: 'flex-end'
                        //         }}
                        //     >
                        //         <Text
                        //             style={{
                        //                 fontWeight: '700',
                        //                 fontSize: 12,
                        //                 marginTop: 5,
                        //                 color: '#fff'
                        //             }}
                        //         >{items.name}</Text>
                        //     </LinearGradient>
                        // </TouchableOpacity>
                    )
                })}

            </View>
            {/****************sale 3 banners**************** */}
            {/* <View
                style={{
                    padding: Dimensions.get('screen').width / 40,

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
                                backgroundColor: 'red'


                            }}
                            onPress={() => navigation.navigate('CategoryList', {
                                'name': 'Sale',
                                "id": 'items.title.id'
                            })}
                        >
                            <Image source={require('../assets/Images/Rectangle 154.png')}
                                style={{
                                    width: 110
                                }}
                            />

                        </TouchableOpacity>
                    </View>
                    <View

                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'green'


                            }}
                            onPress={() => navigation.navigate('CategoryList', {
                                'name': 'Sale',
                                "id": 'items.title.id'
                            })}
                        >
                            <Image source={require('../assets/Images/Rectangle 155.png')}
                                style={{
                                    width: 110
                                }}
                            />

                        </TouchableOpacity>
                    </View>

                    <View

                    >

                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red'
                            }}
                            onPress={() => navigation.navigate('CategoryList', {
                                'name': 'Sale',
                                "id": 'items.title.id'
                            })}
                        >
                            <Image source={require('../assets/Images/Rectangle 156.png')}
                                style={{
                                    width: 110
                                }}
                            />
                        </TouchableOpacity>
                    </View>


                </View>
            </View> */}
            {/**************************************Home Fornitures*************** */}
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
                >Home Fornitures</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >

                    {home_forniture && home_forniture.map((item, index) => {
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
            {/*********************banner*************************** */}
            <TouchableOpacity
                style={{
                    marginVertical: 22,
                    paddingHorizontal: Dimensions.get('screen').width / 22,

                }}
                onPress={() => navigation.navigate('CategoryList', {
                    'name': 'Sale',
                    "id": 'items.title.id'
                })}
            >
                <View>
                    <Image source={require('../assets/Images/Rectangle 159.png')}
                        style={{
                            width: '100%'
                        }}
                    />

                </View>
            </TouchableOpacity>
            {/*************************Shop By*********************** */}
            <View
                style={{
                    paddingHorizontal: Dimensions.get('screen').width / 30,

                }}
            >
                <Text
                    style={{
                        fontWeight: '500',
                        fontSize: 20,
                        marginBottom: 22,

                    }}
                >Shop By</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <View

                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CategoryList', {
                                'name': 'Sale',
                                "id": 'items.title.id'
                            })}
                        >
                            <Image source={require('../assets/Images/Group 119.png')}
                                style={{
                                    width: 110
                                }}
                            />

                        </TouchableOpacity>
                    </View>
                    <View

                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CategoryList', {
                                'name': 'Sale',
                                "id": 'items.title.id'
                            })}
                        >
                            <Image source={require('../assets/Images/Group 120.png')}
                                style={{
                                    width: 110
                                }}
                            />

                        </TouchableOpacity>
                    </View>

                    <View

                    >

                        <TouchableOpacity
                            onPress={() => navigation.navigate('CategoryList', {
                                'name': 'Sale',
                                "id": 'items.title.id'
                            })}
                        >
                            <Image source={require('../assets/Images/Group 121.png')}
                                style={{
                                    width: 110
                                }}
                            />
                        </TouchableOpacity>
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
                    marginBottom: 200

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

        </View>
    )
}

export default BestSeller

