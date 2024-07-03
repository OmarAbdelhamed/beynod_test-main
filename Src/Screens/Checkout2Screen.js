import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import TotalContainer from '../Components/TotalContainer'
import CommonBtn from '../Components/CommonBtn'
import { Colors } from '../assets/Colors'

const Checkout2Screen = ({ navigation,route }) => {
    const [checked, setChecked] = useState('paypal');
    const {data}=route.params

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
                    flex: 1
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
                    <Image source={require('../assets/Images/Group 370 (1).png')} />

                </View>
                <ScrollView
            
            nestedScrollEnabled={true}
                >
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
                                alignItems: 'center',
                                borderColor: 'rgba(239, 239, 239, 1)',
                                borderWidth: 1,
                                padding: 12,
                                borderRadius: 5,
                                backgroundColor: checked === 'paypal' ? Colors.secondry : 'rgba(239, 239, 239, 1)',

                            }}
                            onPress={() => setChecked('paypal')}
                        >
                            <Text
                                style={{
                                    color: checked === 'paypal' ? 'white' : 'rgba(0, 0, 0, 0.4)'

                                }}
                            >PayPal</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderColor: 'rgba(239, 239, 239, 1)',
                                borderWidth: 1,
                                padding: 12,
                                borderRadius: 5,
                                backgroundColor: checked === 'Card' ? Colors.secondry : 'rgba(239, 239, 239, 1)'
                            }}
                            onPress={() => setChecked('Card')}
                        >
                            <Text
                                style={{
                                    color: checked === 'Card' ? 'white' : 'rgba(0, 0, 0, 0.4)'
                                }}
                            >Card</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderColor: 'rgba(239, 239, 239, 1)',
                                borderWidth: 1,
                                padding: 12,
                                borderRadius: 5,
                                backgroundColor: checked === 'tabby' ? Colors.secondry : 'rgba(239, 239, 239, 1)'

                            }}
                            onPress={() => setChecked('tabby')}
                        >
                            <Image source={require('../assets/Images/Rectangle 230.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderColor: 'rgba(239, 239, 239, 1)',
                                borderWidth: 1,
                                padding: 12,
                                borderRadius: 5,
                                backgroundColor: checked === 'tamara' ? Colors.secondry : 'rgba(239, 239, 239, 1)'

                            }}

                            onPress={() => setChecked('tamara')}
                        >

                            <Image source={require('../assets/Images/Rectangle 231.png')} />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            marginVertical: Dimensions.get('window').height / 50,


                        }}
                    >
                        <TextInput
                            placeholder='Name on the card'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                        />


                        <TextInput
                            placeholder='Card Number'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                        />

<View
style={{
    flexDirection:'row'
}}
>

<TextInput
placeholder='CVV'
style={{
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(228, 228, 228, 1)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginBottom: 12
}}
/>
<TextInput
placeholder='Expiry Date'
style={{
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(228, 228, 228, 1)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    marginLeft:12,
    width:'77%'
}}
/>
</View>
{/* 
                        <TextInput
                            placeholder='Address / Street Name'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                        />

                        <TextInput
                            placeholder='City'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                        />

                        <TextInput
                            placeholder='Area'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderColor: 'rgba(228, 228, 228, 1)',
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 12
                            }}
                        />

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
                        /> */}

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
                    handdleClick={() => navigation.navigate('OrderSummary')}
                    margintop={''}
                    backround={Colors.secondry}
                    fontWeight={'700'}

                />


            </View>

        </View>
    )
}

export default Checkout2Screen