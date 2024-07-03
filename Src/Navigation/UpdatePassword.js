import { View, Text, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import ProfileInfo from '../Components/ProfileInfo'
import CommonBtn from '../Components/CommonBtn'
import { Colors } from '../assets/Colors'
import CommonInput from '../Components/CommonInput'
import axios from 'axios'
import { useSelector } from 'react-redux'

const UpdatePassword = ({ navigation }) => {
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const login  = useSelector((state) => state.auth.authState);
    const changePasswod=()=>{
        if(!oldPassword||!password||!checkPassword){
            Alert.alert('Please enter all filed')
        }else if(password !== checkPassword){
            Alert.alert('Password does not match')
        }else{
            const postData = {
                password: password,
                password_confirmation: checkPassword,
                old_password:oldPassword
              };
        
              axios.post('https://beyond-fix.applaiteknoloji.online/api/update-password', postData,{
                headers:{
                    'Authorization': `Bearer ${login.token}`
                
                }
              })
                .then((response) => {
                  // Handle the response
                  if (response.status === 200) {
                    navigation.navigate('Home')
                  }
                })
                .catch((error) => {
                  // Handle any errors
                  console.log(error.response.data.message)
                //   if (error.response.data.errors.email !== undefined) {
                //     Alert.alert(error.response.data.errors.email[0])
                //     setloaddingState(false)
                //   } else if (error.response.data.errors.password !== undefined) {
                //     Alert.alert(error.response.data.errors.password[0])
                //     setloaddingState(false)
                //   }
                })
        }
    }
    return (
        <View
            style={{
                flex: 1,
                paddingTop: Dimensions.get('screen').height / 15,
                paddingBottom: Dimensions.get('screen').height / 28,
                paddingHorizontal: Dimensions.get('screen').width / 22,
                backgroundColor: 'white',
                justifyContent: 'space-between'


            }}
        >
            <View>
                <ComponentsHeader
                    title={'Update Password'}
                />
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
                                marginTop: 75
                            }}
                        >

                            <View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        marginBottom: 7
                                    }}
                                >
                                    Old Password:


                                </Text>
                                <CommonInput
                                    placeholder="Enter your Password"
                                    handdleChange={setOldPassword}
                                    value={oldPassword}
                                />
                            </View>

                            <View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        marginVertical: 12
                                    }}
                                >
                                    Password:


                                </Text>
                                <CommonInput
                                    placeholder="Enter your Password"
                                    handdleChange={setPassword}
                                    value={password}
                                />
                            </View>

                            <View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        marginVertical: 12
                                    }}
                                >
                                    Confirm  Password:


                                </Text>
                                <CommonInput
                                    placeholder="Enter your Confirmation Password"
                                    handdleChange={setCheckPassword}
                                    value={checkPassword}
                                />
                            </View>


                        </View>
                    </View>

                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <CommonBtn
                    text={'Update Your Password'}
                    fontSize={14}
                    color={'rgba(255, 255, 255, 1)'}
                    Radius={10}
                    width={Dimensions.get('screen').width / 1.2}
                    height={Dimensions.get('screen').height / 18}
                    handdleClick={changePasswod}
                    margintop={''}
                    backround={Colors.secondry}
                    fontWeight={'700'}

                />


            </View>
        </View>
    )
}

export default UpdatePassword