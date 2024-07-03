import { Alert, Dimensions, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import CommonBtn from '../Components/CommonBtn';
import { Colors } from '../assets/Colors';
import CommonInput from '../Components/CommonInput';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AddAddressScreen = ({ route }) => {
    console.log(route.params.stat);
    const [firstName, setFirstName] = useState(route.params.item&&route.params.item.first_name)
    const [lastName, setLastName] = useState(route.params.item&&route.params.item.last_name)
    const [addressName, setAddressName] = useState(route.params.item&&route.params.item.type)
    const [code, setCode] = useState(route.params.item&&route.params.item.postal_code)
    const [street, setStreet] = useState(route.params.item&&route.params.item.street)
    const [city, setCity] = useState(route.params.item&&route.params.item.city)
    const [country, setCountry] = useState(route.params.item&&route.params.item.country)
    const [details, setDetails] = useState(route.params.item&&route.params.item.details)
    const login = useSelector((state) => state.auth.authState);
console.log(route.params.item);



    const AddressFun = () => {
if( route.params.stat === 'Add Address' ){
        const postData = {
            type:addressName,
            details:details,
            first_name:firstName,
            last_name:lastName,
            postal_code:code,
            street:street,
            city:city,
            country:country   
               };
    
        axios.post(`https://beyond-fix.applaiteknoloji.online/api/addresses`,postData, {
            headers: {
                'Authorization': ` ${login.token}`,


            }
        })
            .then((response) => {
                if (response.status === 200) {
Alert.alert('Added Successfully')
                }
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }else{
    console.log('edite');
}
    }
    return (
        <View
            style={{
                flex: 1,
                paddingTop: Dimensions.get('screen').height / 15,
                paddingBottom: Dimensions.get('screen').height / 40,
                paddingHorizontal: Dimensions.get('screen').width / 22,
                backgroundColor: 'white'
            }}
        >
            <ComponentsHeader
                title={route.params.stat}
            />
            <ScrollView
                showsVerticalScrollIndicator='false'
                style={{
                    marginBottom: 20
                }}
            >
                <View>
                    <View>
                        <Text style={{
                            marginBottom: 8,
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'rgba(0, 0, 0, 1)'
                        }}>First Name</Text>
                        <CommonInput
                            placeholder="Enter your First  Name"
                            handdleChange={setFirstName}
                            value={firstName}
                        />
                    </View>
                    <View>
                        <Text style={{
                            marginBottom: 8,
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'rgba(0, 0, 0, 1)'
                        }}>Last Name</Text>
                        <CommonInput
                            placeholder="Enter your Last Name"
                            handdleChange={setLastName}
                            value={lastName}
                        />
                    </View>
                    <View>
                        <Text style={{
                            marginBottom: 8,
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'rgba(0, 0, 0, 1)'
                        }}>Address Name</Text>

                        <CommonInput
                            placeholder="Enter your Address Name"
                            handdleChange={setAddressName}
                            value={addressName}
                        />
                    </View>
                    <View>
                        <Text style={{
                            marginBottom: 8,
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'rgba(0, 0, 0, 1)'
                        }}>Postal code</Text>
                        <CommonInput
                            placeholder="Enter your Postal code"
                            handdleChange={setCode}
                            value={code}
                        />
                    </View>
                    <View>
                        <Text style={{
                            marginBottom: 8,
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'rgba(0, 0, 0, 1)'
                        }}>Street</Text>
                        <CommonInput
                            placeholder="Enter your Street"
                            handdleChange={setStreet}
                            value={street}
                        />
                    </View>
                    <View>
                        <Text style={{
                            marginBottom: 8,
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'rgba(0, 0, 0, 1)'
                        }}>City
                        </Text>
                        <CommonInput
                            placeholder="Enter your City"
                            handdleChange={setCity}
                            value={city}
                        />
                    </View>



                    <View>
                        <Text style={{
                            marginBottom: 8,
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'rgba(0, 0, 0, 1)'
                        }}>Country

                        </Text>
                        <CommonInput
                            placeholder="Enter your Country"
                            handdleChange={setCountry}
                            value={country}
                        />
                    </View>
                    <View>
                        <Text style={{
                            marginBottom: 8,
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'rgba(0, 0, 0, 1)'
                        }}>Details


                        </Text>
                        <CommonInput
                            placeholder="Enter your Details"
                            handdleChange={setDetails}
                            value={details}
                        />
                    </View>
                </View>
            </ScrollView>
            <View>
                <CommonBtn
                    text={route.params.stat}
                    fontSize={20}
                    color={'rgba(255, 255, 255, 1)'}
                    Radius={10}
                    width={Dimensions.get('screen').width / 1.2}
                    height={Dimensions.get('screen').height / 18}
                    handdleClick={AddressFun}
                    margintop={''}
                    backround={Colors.secondry}
                    fontWeight={'700'}

                />
            </View>
        </View>
    )
}

export default AddAddressScreen

const styles = StyleSheet.create({})