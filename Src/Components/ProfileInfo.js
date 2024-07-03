import { View, Text, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import CommonInput from './CommonInput';

const ProfileInfo = ({ changeInfoState }) => {
    const login = useSelector((state) => state.auth.authState);
    const data = useSelector((state) => state.auth.userarray);
    const [updateEmail, setUpdateEmail] = useState(data.email)
    const [name, setName] = useState(data.name)
    const [phone, setPhone] = useState(data.phone)
    const [gender, setGender] = useState(data.gender)
    return (
        <View

        >

            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        width: '95%',
                        backgroundColor: '#fff',
                        marginTop: 12,
                        padding: 18,
                        borderRadius: 8,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 5,
                        marginTop: 50
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 22
                        }}
                    >
                        <Image source={require('../assets/Images/Ellipse 22.png')} />
                    </View>
                    {changeInfoState ?

                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 7

                            }}

                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 12
                                }}

                            >Name:</Text>
                            <CommonInput
                                handdleChange={setName}
                                value={name}
                                width={Dimensions.get('screen').width / 1.5}
                            />
                        </View>
                        :
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                marginVertical: 14
                            }}
                        >Name : {data.name}


                        </Text>
                    }
                    {changeInfoState ?

                        <View
                            style={{
                                flexDirection: 'row',

                            }}

                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 12
                                }}

                            >Email:</Text>
                            <CommonInput
                                handdleChange={setUpdateEmail}
                                value={updateEmail}
                                width={Dimensions.get('screen').width / 1.5}
                            />
                        </View>
                        :
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                marginVertical: 14
                            }}
                        >Email : {data.email}


                        </Text>


                    }

                    {changeInfoState ?

                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 7

                            }}

                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 12
                                }}

                            >Phone:</Text>
                            <CommonInput
                                handdleChange={setPhone}
                                value={phone}
                                width={Dimensions.get('screen').width / 1.5}
                            />
                        </View>
                        :
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                marginTop: 12
                            }}
                        >Phone : {data.phone}


                        </Text>
                    }

                    {changeInfoState ?

                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 7

                            }}

                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 12
                                }}

                            >Gender:</Text>
                            <CommonInput
                                handdleChange={setGender}
                                value={gender}
                                width={Dimensions.get('screen').width / 1.5}
                            />
                        </View>
                        :
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                marginTop: 12
                            }}
                        >Gender : {data.gender}


                        </Text>
                    }
                </View>
            </View>

        </View>
    )
}

export default ProfileInfo