import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import TotalContainer from '../Components/TotalContainer'
import CommonBtn from '../Components/CommonBtn'
import { Colors } from '../assets/Colors'
import { useSelector } from 'react-redux'

const Checkout1Screen = ({navigation,route}) => {
    const [checked, setChecked] = useState('home');
const {data}=route.params
const userInfo = useSelector((state) => state.auth);
console.log(userInfo.userarray);
const [email, setEmail] = useState(userInfo.userarray.email)
const [name, setName] = useState(userInfo.userarray.name)
const [phone, setPhone] = useState(userInfo.userarray.phone)
console.log(checked);
    return (
        <View
            style={{
                flex: 1,
                paddingTop: Dimensions.get('screen').height / 15,
                paddingBottom: Dimensions.get('screen').height / 50,
                paddingHorizontal: Dimensions.get('screen').width / 22,
                backgroundColor: 'white',
                justifyContent: 'space-between'


            }}
        >
            <View
                  style={{
                    flex:1
                }}
            >
                <ComponentsHeader
                    title={'Checkout'}
                />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image source={require('../assets/Images/Group 370.png')} />

                </View>
                <ScrollView
                
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            marginTop: Dimensions.get('window').height / 50,
                            textAlign: 'center'

                        }}
                    >Where can we send your order?</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: Dimensions.get('window').height / 50
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => setChecked('home')}
                        >
                            <View
                                style={{
                                    backgroundColor: 'rgba(246, 245, 245, 1)',
                                    width: Dimensions.get('screen').width / 15.6,
                                    height: Dimensions.get('screen').height / 33.6,
                                    borderRadius: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: checked === 'home' ? Colors.secondry : 'rgba(246, 245, 245, 1)',
                                        width: Dimensions.get('screen').width / 26,
                                        height: Dimensions.get('screen').height / 56.26,
                                        borderRadius: 12

                                    }}
                                >

                                </View>

                            </View>
                            <Text
                                style={{
                                    marginLeft: 7,
                                    fontWeight: '500',
                                    fontSize: 18
                                }}
                            >Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => setChecked('work')}
                        >
                            <View
                                style={{
                                    backgroundColor: 'rgba(246, 245, 245, 1)',
                                    width: Dimensions.get('screen').width / 15.6,
                                    height: Dimensions.get('screen').height / 33.6,
                                    borderRadius: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: checked === 'work' ? Colors.secondry : 'rgba(246, 245, 245, 1)',
                                        width: Dimensions.get('screen').width / 26,
                                        height: Dimensions.get('screen').height / 56.26,
                                        borderRadius: 12

                                    }}
                                >

                                </View>

                            </View>
                            <Text
                                style={{
                                    marginLeft: 7,
                                    fontWeight: '500',
                                    fontSize: 18
                                }}
                            >Work</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => setChecked('other')}
                        >
                            <View
                                style={{
                                    backgroundColor: 'rgba(246, 245, 245, 1)',
                                    width: Dimensions.get('screen').width / 15.6,
                                    height: Dimensions.get('screen').height / 33.6,
                                    borderRadius: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: checked === 'other' ? Colors.secondry : 'rgba(246, 245, 245, 1)',
                                        width: Dimensions.get('screen').width / 26,
                                        height: Dimensions.get('screen').height / 56.26,
                                        borderRadius: 12

                                    }}
                                >

                                </View>

                            </View>
                            <Text
                                style={{
                                    marginLeft: 7,
                                    fontWeight: '500',
                                    fontSize: 18
                                }}
                            >Other</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            marginVertical: Dimensions.get('window').height / 50,


                        }}
                    >
                        <TextInput
                            placeholder='Email'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                            value={email}
                            onChangeText={setEmail}
                        />


                        <TextInput
                            placeholder='Full Name'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                            value={name}
                            onChangeText={setName}
                        />



                        {/* <TextInput
                            placeholder='Address / Street Name'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                        /> */}

                        {/* <TextInput
                            placeholder='City'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                        /> */}

                        {/* <TextInput
                            placeholder='Area'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                        /> */}

                        <TextInput
                            placeholder='Phone Number'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                            value={phone}
                            onChangeText={setPhone}
                        />

                    </View>
                    <TotalContainer 
                    data={data}
                    />

                </ScrollView>
            </View>
            <View
      
            >
                <CommonBtn
                    text={'Checkout'}
                    fontSize={20}
                    color={'rgba(255, 255, 255, 1)'}
                    Radius={10}
                    width={Dimensions.get('screen').width / 1.2}
                    height={Dimensions.get('screen').height / 18}
                    handdleClick={() => navigation.navigate('Checkout2',{
                        data:data,
                        name:name,
                        phone:phone,
                        email:email,
                        checked:checked
                    })}
                    margintop={''}
                    backround={Colors.secondry}
                    fontWeight={'700'}

                />


            </View>

        </View>
    )
}

export default Checkout1Screen