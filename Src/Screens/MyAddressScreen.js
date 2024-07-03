import { View, Text, Dimensions, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import CartProductContainer from '../Components/CartProductContainer'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Colors } from '../assets/Colors'

const MyAddressScreen = ({navigation}) => {
    const login = useSelector((state) => state.auth.authState);
    const userData = useSelector((state) => state.auth.userarray);
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        const getMyaddresses = () => {
            axios.get(`https://beyond-fix.applaiteknoloji.online/api/addresses`, {
                headers: {
                    'Authorization': ` ${login.token}`,
                    'currency': 'SAR'


                }
            })
                .then((response) => {
                    // Handle the response
                    if (response.status === 200) {
                        setLoading(false)
                        setData(response.data.success);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getMyaddresses()
    }, [])
    const [addressID, setAddressID] = useState(2)


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
                    title={'My Address'}
                />

                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}


                >

                    <TouchableOpacity
                        style={{
                            width: '100%',
                            borderColor: Colors.secondry,
                            borderWidth
                                : 2,
                            borderRadius: 7,
                            paddingVertical: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 22
                        }}
                        onPress={()=>navigation.navigate('AddAddress',{
                            'stat':'Add Address'
                        })}
                    >
                        <Text
                            style={{
                                color: Colors.secondry,
                                fontWeight: '600'
                            }}
                        >Add New Address</Text>
                    </TouchableOpacity>
                    {data && data.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    borderRadius: 12,
                                    borderColor:addressID===item.id? Colors.secondry: 'black',
                                    borderWidth: 2,
                                    marginBottom: 12,
                                    padding: 12
                                }}
                                onPress={()=>{
                                setAddressID(item.id)
                                }}
                            >
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        paddingBottom: 12,
                                        borderBottomColor: 'balck',
                                        borderBottomWidth: 1
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: '600'
                                        }}
                                    >{item.type}</Text>
                                    <View
                                    style={{
                                        flexDirection:'row'
                                    }}
                                    >
                                        <TouchableOpacity
                                           onPress={()=>navigation.navigate('AddAddress',{
                                            'stat':'Edite Address',
                                            'item':item
                                        })}
                                        
                                        >
                                            <Text
                                            style={{
                                                textDecorationLine:'underline'
                                            }}
                                            >Edite</Text>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity
                                            style={{
                                                marginHorizontal: 8
                                            }}
                                        >
                                            <Text
style={{
        fontWeight:'600',
    color:'red'
}}
                                            >Delete</Text>
                                        </TouchableOpacity> */}

                                    </View>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        paddingBottom: 12,
                                        paddingTop: 12
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: '600'
                                        }}
                                    >Name:</Text>
                                        <Text>{item.first_name}{item.last_name}</Text>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        paddingBottom: 12,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: '600'
                                        }}
                                    >Address:</Text>
                                        <Text>{item.details}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>


            </View>
    )
}

export default MyAddressScreen
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
