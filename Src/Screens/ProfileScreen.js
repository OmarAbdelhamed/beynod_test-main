import { View, Text, Dimensions, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import ProfileInfo from '../Components/ProfileInfo'
import CommonBtn from '../Components/CommonBtn'
import { Colors } from '../assets/Colors'
import CommonInput from '../Components/CommonInput';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addUser } from '../Redux/Authantication'


const ProfileScreen = ({ navigation }) => {
  const [changeInfoState, setChangeInfoState] = useState(false)
  const login = useSelector((state) => state.auth.authState);
  const data = useSelector((state) => state.auth.userarray);
  const [updateEmail, setUpdateEmail] = useState(data.email)
  const [updateName, setUpdateName] = useState(data.name)
  const [updatePhone, setUpdatePhone] = useState(data.phone)
  const [updateGender, setUpdateGender] = useState(data.gender)

const dispatch=useDispatch()
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
          title={'My Profile'}
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
                    handdleChange={setUpdateName}
                    value={updateName}
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
                    handdleChange={setUpdatePhone}
                    value={updatePhone}
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
                    handdleChange={setUpdateGender}
                    value={updateGender}
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <CommonBtn
          text={changeInfoState ? 'Save changes' : 'Update Your Info'}
          fontSize={14}
          color={'rgba(255, 255, 255, 1)'}
          Radius={10}
          width={Dimensions.get('screen').width / 2.5}
          height={Dimensions.get('screen').height / 18}
          handdleClick={() => {
            if (changeInfoState) {
              const postData = {
                name: updateName,
                email: updateEmail,
                phone: updatePhone,
                gender: updateGender
              }
              axios.post('https://beyond-fix.applaiteknoloji.online/api/update-profile', postData, {
                headers: {
                  'Authorization': `Bearer ${login.token}`

                }
              })
                .then((response) => {
                  // Handle the response
                  if (response.status === 200) {
                    dispatch(addUser(response.data.message))

                    Alert.alert('Profile Updates')
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

            } else {
              setChangeInfoState(!changeInfoState)


            }
          }

          }
          margintop={''}
          backround={Colors.secondry}
          fontWeight={'700'}

        />

        <CommonBtn
          text={'Update Your Password'}
          fontSize={14}
          color={'rgba(255, 255, 255, 1)'}
          Radius={10}
          width={Dimensions.get('screen').width / 2.15}
          height={Dimensions.get('screen').height / 18}
          handdleClick={() => navigation.navigate('UpdatePassword')}
          margintop={''}
          backround={Colors.secondry}
          fontWeight={'700'}

        />
      </View>
    </View>
  )
}

export default ProfileScreen