import { View, Text, Dimensions, TouchableOpacity, Image, Alert, ScrollView, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import CommonBtn from '../Components/CommonBtn'
import { Colors } from "../assets/Colors"
import CommonInput from '../Components/CommonInput'
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authInfo } from '../Redux/Authantication'
import RNPickerSelect from 'react-native-picker-select';
import PhoneInput from 'react-native-phone-input';

const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [authState, setAuthState] = useState('login')
  const [loaddingState, setloaddingState] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+144');
  const [gender, setGender] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('us');
  const [callingCode, setCallingCode] = useState('1');
console.log(countryCode);
  const onSelect = (country) => {
    console.log(country);
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    phoneInput.current?.setValue(`+${country.callingCode[0]}`);
  };

  const handdleLogin = async () => {
    if (!email || !password) {
      Alert.alert('please enter All faild')
    } else {
      setloaddingState(true)
      const postData = {
        email: email,
        password: password
      };

      axios.post('https://beyond-fix.applaiteknoloji.online/api/login', postData)
        .then((response) => {
          // Handle the response
          if (response.status === 200) {
            dispatch(authInfo(response.data.data))
            setloaddingState(false)
            setEmail('')
            setPassword('')
            navigation.navigate('Home')
          }
        })
        .catch((error) => {
          // Handle any errors
          if (error.response.data.errors.email !== undefined) {
            Alert.alert(error.response.data.errors.email[0])
            setloaddingState(false)
          } else if (error.response.data.errors.password !== undefined) {
            Alert.alert(error.response.data.errors.password[0])
            setloaddingState(false)
          }
        })

    }

  }
  const handdleRegister = async () => {
    if (!registerEmail || !name || !gender || !phone || !registerPassword || !confirmationPassword) {
      Alert.alert('please enter All faild')
    } else if (registerPassword !== confirmationPassword) {
      Alert.alert('Password dos not match')

    }


    else {
      setloaddingState(true)
      const postData = {
        email: registerEmail,
        password: registerPassword,
        name: name,
        phone: phone,
        gender: gender,
        password: registerPassword,
        password_confirmation: confirmationPassword
      };

      axios.post('https://beyond-fix.applaiteknoloji.online/api/register', postData)
        .then((response) => {
          if (response.status === 200) {
            dispatch(authInfo(response.data.data))
            setloaddingState(false)
            setRegisterEmail('')
            setRegisterPassword('')
            setName('')
            setPhone('')
            setGender('')
            setConfirmationPassword('')
            navigation.navigate('Home')
          }
        })
        .catch((error) => {
          // Handle any errors
          if (error.response.data.errors.email !== undefined) {
            Alert.alert(error.response.data.errors.email[0])
            setloaddingState(false)
          } else if (error.response.data.errors.phone !== undefined) {
            Alert.alert(error.response.data.errors.phone[0])
            setloaddingState(false)
          }
        })

    }

  }

  return (
    <View
      style={{
        flex: 1,
        marginVertical: Dimensions.get('screen').height / 15,
        paddingHorizontal: Dimensions.get('screen').width / 22,

      }}
    >
      <Text
        style={{
          alignSelf: 'center',
          color: 'rgba(0, 0, 0, 1)',
          fontSize: 24,
          fontWeight: '600'
        }}
      >
        Welcome Back to
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          color: Colors.primary,
          fontSize: 24,
          fontWeight: '600'
        }}
      >BEYOND
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: Dimensions.get('screen').height / 15,
          justifyContent: 'center'

        }}
      >




        <CommonBtn
          text={'Login'}
          fontSize={20}
          color={authState === 'login' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          Radius={100}
          width={Dimensions.get('screen').width / 2.5}
          height={Dimensions.get('screen').height / 18}
          handdleClick={() => setAuthState('login')}
          backround={authState === 'login' ? Colors.primary : 'rgba(255, 255, 255, 1)'}


        />


        <CommonBtn
          text={'Sign up'}
          fontSize={20}
          color={authState === 'signup' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
          Radius={100}
          width={Dimensions.get('screen').width / 2.5}
          height={Dimensions.get('screen').height / 18}
          handdleClick={() => setAuthState('signup')}
          backround={authState === 'signup' ? Colors.primary : 'rgba(255, 255, 255, 1)'}


        />
      </View>
      {authState === "login" ?

        <View
          style={{
            marginTop: 22
          }}
        >

          <Text
            style={{
              marginBottom: 8,
              fontSize: 18,
              fontWeight: '500',
              color: 'rgba(0, 0, 0, 1)'
            }}
          >
            Email Address
          </Text>



          <CommonInput
            placeholder="Enter your Email"
            handdleChange={setEmail}
            value={email}
          />
          <Text
            style={{
              marginBottom: 12,
              fontSize: 18,
              fontWeight: '500',
              color: 'rgba(0, 0, 0, 1)',
              marginTop: 22
            }}
          >
            Password
          </Text>

          <CommonInput
            placeholder="Enter your Password"
            value={password}
            handdleChange={setPassword}

          />
          <TouchableOpacity
            onPress={() => navigation.navigate('forgetPassword')}

          >
            <Text
              style={{
                marginBottom: 12,
                fontSize: 13,
                fontWeight: '500',
                color: 'rgba(0, 0, 0, 1)',
                alignSelf: 'flex-end',
                marginTop: 7
              }}
            >Forgot your Passowrd ?</Text>
          </TouchableOpacity>
          <CommonBtn
            text={'Login'}
            fontSize={20}
            color={'rgba(255, 255, 255, 1)'}
            Radius={100}
            width={Dimensions.get('screen').width / 1.5}
            height={Dimensions.get('screen').height / 18}
            handdleClick={handdleLogin}
            margintop={Dimensions.get('screen').height / 18}
            loaddingState={loaddingState}

          />
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: 18,
              color: 'rgba(0, 0, 0, 1)',
              fontWeight: '500',
              fontSize: 16
            }}
          >
            Or via :
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 18,
              justifyContent: 'center'

            }}
          >
            <TouchableOpacity
              style={{
                marginRight: 12
              }}
            >
              <Image source={require('../assets/Images/Ellipse 1.png')} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginRight: 12
              }}
            >
              <Image source={require('../assets/Images/Ellipse 2.png')} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginRight: 12
              }}
            >
              <Image source={require('../assets/Images/Ellipse 3.png')} />
            </TouchableOpacity>
          </View>

        </View>
        :

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 22
            }}

          >

            <View style={{ marginBottom: 15 }}>
              <Text
                style={{
                  marginBottom: 8,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'rgba(0, 0, 0, 1)'
                }}
              >
                Email Address
              </Text>



              <CommonInput
                placeholder="Enter your Email"
                value={registerEmail}
                handdleChange={setRegisterEmail}

              />
            </View>
            <View style={{ marginBottom: 15 }}>
              <Text
                style={{
                  marginBottom: 8,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'rgba(0, 0, 0, 1)'
                }}
              >
                Name
              </Text>



              <CommonInput
                placeholder="Enter your Name"
                value={name}
                handdleChange={setName}

              />
            </View>
            <View style={{ marginBottom: 15 }}>
              <Text
                style={{
                  marginBottom: 8,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'rgba(0, 0, 0, 1)'
                }}
              >
                phone
              </Text>

           <View style={{position:'relative'}}>
           <PhoneInput
                ref={phoneInput}
                value={phone}
                onChangePhoneNumber={(number) => setPhone(number)}
                style={pickerSelectStyles.phoneInput}
                initialCountry={'eg'}
              />
     

           </View>


              {/* <CommonInput
                placeholder="Enter your phone"
                value={phone}
                handdleChange={setPhone}

              /> */}
            </View>
            <View style={{ marginBottom: 15 }}>

              <Text
                style={{
                  marginBottom: 8,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'rgba(0, 0, 0, 1)'
                }}
              >
                gender
              </Text>

              <RNPickerSelect
                onValueChange={(value) => setGender(value)}
                items={[
                  { label: 'female', value: 'female' },
                  { label: 'male', value: 'male' },
                ]}
                // style={{
                //   backgroundColor: 'rgba(247, 247, 247, 1)',
                //   paddingHorizontal: 15,
                //   paddingVertical: 15,
                //   borderRadius: 13,
                //   fontSize: 16,
                //   fontWeight: '600'

                // }}
                style={pickerSelectStyles}
              />

              {/*    <CommonInput
                placeholder="Enter your gender"
                value={gender}
                handdleChange={setGender}

              /> */}
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text
                style={{
                  marginBottom: 8,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'rgba(0, 0, 0, 1)'
                }}
              >
                Passowrd
              </Text>



              <CommonInput
                placeholder="Enter your Password"
                value={registerPassword}
                handdleChange={setRegisterPassword}

              />
            </View>
            <View style={{ marginBottom: 15 }}>
              <Text
                style={{
                  marginBottom: 8,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'rgba(0, 0, 0, 1)'
                }}
              >
                Confirmation Password
              </Text>



              <CommonInput
                placeholder="Enter your Confirmation Password"
                value={confirmationPassword}
                handdleChange={setConfirmationPassword}

              />

            </View>
            <CommonBtn
              text={'Sign up'}
              fontSize={20}
              color={'rgba(255, 255, 255, 1)'}
              Radius={100}
              width={Dimensions.get('screen').width / 1.5}
              height={Dimensions.get('screen').height / 18}
              handdleClick={handdleRegister}
              margintop={Dimensions.get('screen').height / 25}
              loaddingState={loaddingState}

            />
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                marginTop: 18,
                color: 'rgba(0, 0, 0, 1)',
                fontWeight: '500',
                fontSize: 16
              }}
            >
              Or via :
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 18,
                justifyContent: 'center'

              }}
            >
              <TouchableOpacity
                style={{
                  marginRight: 12
                }}
              >
                <Image source={require('../assets/Images/Ellipse 1.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginRight: 12
                }}
              >
                <Image source={require('../assets/Images/Ellipse 2.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginRight: 12
                }}
              >
                <Image source={require('../assets/Images/Ellipse 3.png')} />
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>

      }


    </View>
  )
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'rgba(247, 247, 247, 1)',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 13,
    fontWeight: '600'
  },
  inputAndroid: {
    fontSize: 16,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'rgba(247, 247, 247, 1)',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 13,
    fontWeight: '600'
    },
  phoneInput: {
    fontSize: 16,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'rgba(247, 247, 247, 1)',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 13,
    fontWeight: '600'
  },
  countryPickerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    position:'absolute',
    left:0,
    bottom:10,
  },
  phoneNumber: {
    marginTop: 16,
    fontSize: 16,
  },
});


export default SignupScreen