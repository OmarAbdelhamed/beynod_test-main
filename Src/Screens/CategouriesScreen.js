import { View, Text, Dimensions, ScrollView, Image, ActivityIndicator, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainHeader from '../Components/MainHeader'
import SearchInput from '../Components/SearchInput'
import CategoriesCard from '../Components/CategoriesCard'
import { Colors } from '../assets/Colors'
import axios from 'axios'
import { useSelector } from 'react-redux'

const CategouriesScreen = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [categoryState, setCategoryState] = useState(16)
    const [catType, setCatType] = useState('Best Seller');
    const [data, setData] = useState([])
    const [SubData, setSubData] = useState([])
    const [loading, setLoading] = useState(true)
    const login = useSelector((state) => state.auth.authState);

    const screenWidth = Dimensions.get('screen').width - Dimensions.get('screen').width / 22 * 2
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
    const CategoryItems = [
        { id: 1, name: 'Dress', img: require('../assets/Images/Ellipse 12.png') },
        { id: 2, name: 'Jeans', img: require('../assets/Images/Ellipse 12 (1).png') },
        { id: 3, name: 'Pants', img: require('../assets/Images/Ellipse 19.png') },
        { id: 4, name: 'Shoes', img: require('../assets/Images/Ellipse 13.png') },
        { id: 5, name: 'Makeup', img: require('../assets/Images/Ellipse 14.png') },
        { id: 6, name: 'Pyjamas', img: require('../assets/Images/Ellipse 20.png') },
    ]

    const FlatItem = (items) => {
        return (
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 22,
                    marginVertical: Dimensions.get('window').height / 75

                }}
                onPress={() => navigation.navigate('CategoryList', {
                    'name': items.title.name,
                    "id": items.title.id
                })}
            >
                <Image source={items.title.img} />
                <Text
                    style={{
                        fontWeight: '400',
                        fontSize: 14,
                        marginTop: 5
                    }}
                >{items.title.name}</Text>
            </TouchableOpacity>
        )
    }
    useEffect(() => {
        const get_all_categories = () => {
            axios.get(`https://beyond-fix.applaiteknoloji.online/api/get_all_categories`, {
                headers: {
                    'Authorization': ` ${login.token}`,
                    'currency': 'SAR'


                }
            })
                .then((response) => {
                    // Handle the response
                    if (response.status === 200) {
                        setData(response.data.data);
                        setSubData(response.data.data[0].children)
                        setLoading(false)
                    }
                })
                .catch((error) => {
                    console.log(error.response.data.errors);
                })
        }
        get_all_categories();
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
                    paddingBottom: Dimensions.get('screen').height / 30,
                    flexDirection: 'column',
                    backgroundColor: '#fff'
                }}
            >
                <View
                    style={{
                        paddingHorizontal: Dimensions.get('screen').width / 22,

                    }}
                >


                    <SearchInput
                        value={search}
                        changeFun={(text) => setSearch(text)}

                    />
                </View>


                {search ?
                    <ScrollView
                        showsVerticalScrollIndicator={'false'}
                        nestedScrollEnabled={true}
                        style={{
                            paddingHorizontal: Dimensions.get('screen').width / 22,

                        }}
                    >

                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 12
                            }}

                            onPress={() => navigation.navigate('CategoryList', {
                                'name': search
                            })}                    >
                            <Text>{search}</Text>
                            <Image source={require('../assets/Images/Frame 42.png')}
                                style={{
                                    transform: [{ rotate: '180deg' }]
                                }}
                            />

                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 12
                            }}

                            onPress={() => navigation.navigate('CategoryList', {
                                'name': search
                            })}                    >
                            <Text>{search}</Text>
                            <Image source={require('../assets/Images/Frame 42.png')}
                                style={{
                                    transform: [{ rotate: '180deg' }]
                                }}
                            />

                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 12
                            }}

                            onPress={() => navigation.navigate('CategoryList', {
                                'name': search
                            })}
                        >
                            <Text>{search}</Text>
                            <Image source={require('../assets/Images/Frame 42.png')}
                                style={{
                                    transform: [{ rotate: '180deg' }]
                                }}
                            />

                        </TouchableOpacity>



                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 12
                            }}

                            onPress={() => navigation.navigate('CategoryList', {
                                'name': search
                            })}                    >
                            <Text>{search}</Text>
                            <Image source={require('../assets/Images/Frame 42.png')}
                                style={{
                                    transform: [{ rotate: '180deg' }]
                                }}
                            />

                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 12
                            }}

                            onPress={() => navigation.navigate('CategoryList', {
                                'name': search
                            })}
                        >
                            <Text>{search}</Text>
                            <Image source={require('../assets/Images/Frame 42.png')}
                                style={{
                                    transform: [{ rotate: '180deg' }]
                                }}
                            />

                        </TouchableOpacity>

                    </ScrollView>
                    :
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={{
                                width: "30%"
                            }}
                        >

                            <ScrollView

                                nestedScrollEnabled={true}
                            >
                                {data && data.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => {

                                                setCategoryState(item.id)
                                                setSubData(item.children);
                                            }}
                                            style={{
                                                backgroundColor: categoryState === item.id ? Colors.secondry : 'rgba(255, 255, 255, 1)'
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: 'center',
                                                    paddingVertical: Dimensions.get('window').height / 55,
                                                    fontSize: 14,
                                                    fontWeight: '400',
                                                    color: categoryState === item.id ? 'rgba(255, 255, 255, 1)' : 'rgba(3, 3, 3, 1)'

                                                }}
                                            >{item.name.en}</Text>

                                        </TouchableOpacity>
                                    )
                                })}

                            </ScrollView>
                        </View>
                        <View
                            style={{
                                paddingVertical: Dimensions.get('window').height / 100,
                                paddingHorizontal: 10,
                                width: '70%'
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: '500',
                                    fontSize: 15
                                }}
                            >Picks for you</Text>
                            <ScrollView

                                nestedScrollEnabled={true}
                            >
                                <View
                                    style={{

                                        flex: 1,
                                        marginTop: 12,
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'

                                    }}
                                >

                                    {SubData&&SubData.map((items, index) => {
                                        return (
                                            <TouchableOpacity
                                                style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginRight: 0,
                                                    marginVertical: Dimensions.get('window').height / 75

                                                }}
                                                onPress={() => navigation.navigate('CategoryList', {
                                                    'name': items.name.en,
                                                    "id": items.id
                                                })}
                                            >
                                                <Image source={items.image} />
                                                <Text
                                                    style={{
                                                        fontWeight: '400',
                                                        fontSize: 14,
                                                        marginTop: 5
                                                    }}
                                                >{items.name.en}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}

                                    {/* <FlatList
                                    data={CategoryItems}
                                    numColumns={3}
                                    renderItem={({ item }) => <FlatItem title={item} />}
                                    keyExtractor={item => item.id}
                                /> */}
                                </View>
                            </ScrollView>

                        </View>

                    </View>
                }
            </View>
    )
}

export default CategouriesScreen
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