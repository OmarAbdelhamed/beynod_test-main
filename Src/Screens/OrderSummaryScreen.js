import { View, Text, Dimensions, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import CommonBtn from '../Components/CommonBtn'
import { Colors } from '../assets/Colors'
import CartProductContainer from '../Components/CartProductContainer'
import TotalContainer from '../Components/TotalContainer'

const OrderSummaryScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

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
            <View>
                <ComponentsHeader
                    title={'Order Summary'}
                />
                <CartProductContainer />
                <View
                    style={{
                        paddingBottom: Dimensions.get('screen').height / 60
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: '600',
                                color: Colors.black,
                                marginBottom: 5

                            }}
                        >
                            Delivering to

                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                color: Colors.black,
                                marginBottom: 5

                            }}
                        >
                            Hacen Business
                        </Text>

                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: 'rgba(0, 0, 0, 0.7)',
                                marginBottom: 5

                            }}
                        >
                            Al Ashriah St, Al Badi, 32414
                        </Text>

                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                color: Colors.black,
                                marginBottom: 5

                            }}
                        >
                            Saudi Arabia
                        </Text>
                    </View>

                </View>
                <View
                    style={{
                        borderColor: '#ededed',
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        paddingVertical: Dimensions.get('screen').height / 60
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: '600',
                                color: Colors.black

                            }}
                        >
                            Payment

                        </Text>

                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                color: Colors.black,
                                marginTop: 3

                            }}
                        >
                            Visa card ends with XXX6 8228

                        </Text>

                    </View>
                </View>
            </View>
            <View>
                <TotalContainer />
                <CommonBtn
                    text={'Order Now'}
                    fontSize={20}
                    color={'rgba(255, 255, 255, 1)'}
                    Radius={10}
                    width={Dimensions.get('screen').width / 1.2}
                    height={Dimensions.get('screen').height / 18}
                    handdleClick={() => setModalVisible(true)}
                    margintop={''}
                    backround={Colors.secondry}
                    fontWeight={'700'}

                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={{
                                    alignItems: 'flex-end'
                                }}
                                onPress={() => setModalVisible(!modalVisible)}      >
                                <Image source={require('../assets/Images/Frame 50.png')}

                                />
                            </TouchableOpacity>
                            <Image source={require('../assets/Images/Rectangle 177.png')} style={{width:Dimensions.get('screen').width/2,height:Dimensions.get('screen').height/5}}/>
                            <Text style={[styles.modalText, { fontSize: 20, fontWeight: '700' }]}>Your Order is Confirmed!</Text>
                            <Text style={styles.modalText}>We’ll send you a shipping confirmation email as soon as your order ships.</Text>
                            {/* <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                borderRadius: 9,
                                padding: 12,
                                marginTop:22
                            }}
                            onPress={()=>navigation.navigate('Home')}
                        >
                            <Text
                                style={{
                                    color: Colors.primary,
                                    fontSize: 20,
                                    fontWeight: '800',
                                }}
                            >Go Back Home</Text>
                        </TouchableOpacity> */}
                            <CommonBtn
                                text={'Go Back Home'}
                                fontSize={20}
                                color={'rgba(255, 255, 255, 1)'}
                                Radius={100}
                                width={Dimensions.get('screen').width / 1.5}
                                height={Dimensions.get('screen').height / 18}
                                handdleClick={() => {
                                    navigation.navigate('home')
                                    setModalVisible(false)
                                }}
                                margintop={Dimensions.get('screen').height / 10}
                                backround={Colors.secondry}

                            />

                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});



export default OrderSummaryScreen