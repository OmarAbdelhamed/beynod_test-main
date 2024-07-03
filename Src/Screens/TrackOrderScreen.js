import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import { Colors } from '../assets/Colors'
import CommonBtn from '../Components/CommonBtn'

const TrackOrderScreen = () => {
  console.log(Dimensions.get('window').height * 0.2136);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Dimensions.get('screen').height / 15,
        paddingBottom: Dimensions.get('screen').height / 50,

        paddingHorizontal: Dimensions.get('screen').width / 22,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'space-between'


      }}
    >
      <View>
        <ComponentsHeader
          title={'Track Order'}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: Dimensions.get('screen').height / 25
          }}
        >
          <Image
            source={require('../assets/Images/Rectangle 229.png')}

          />
          <Text
            style={{
              marginTop: 22,
              marginBottom: 12,
              fontWeight: '600',
              fontSize: 15
            }}
          >Estimated Delivery Time : 2 Days 12 Hours</Text>

        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ededed',
            borderRadius: 12,
            padding: Dimensions.get('window').width / 25,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 17,
              textAlign: 'center',
              paddingBottom: 12,

            }}
          >Order Number : #865646864</Text>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: 'rgba(241, 241, 241, 1)',
              paddingTop: 12,


            }}
          >



            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <View

              >
                <Image source={require('../assets/Images/Group 470 (1).png')} />

              </View>
              <View
                style={{
                  marginLeft: 7
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    marginBottom: 3
                  }}
                >We Shipped your Order, It’s on the way!</Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 11,
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  11:00AM - Mar 22, 2024
                </Text>
              </View>

            </View>
            <View
                  style={{
                    position: 'relative',
                    left: Dimensions.get('screen').width / 20
                  }}
            >
            <Image source={require('../assets/Images/Rectangle 243.png')} />


            </View>
            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <View

              >
                <Image source={require('../assets/Images/Group 470 (1).png')} />

              </View>
              <View
                style={{
                  marginLeft: 7
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    marginBottom: 3
                  }}
                >We Have Packed your Order</Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 11,
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  11:00AM - Mar 22, 2024
                </Text>
              </View>

            </View>
            <View
                  style={{
                    position: 'relative',
                    left: Dimensions.get('screen').width / 20
                  }}
            >
            <Image source={require('../assets/Images/Rectangle 243.png')} />


            </View>
            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <View

              >
                <Image source={require('../assets/Images/Group 470 (1).png')} />

              </View>
              <View
                style={{
                  marginLeft: 7
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    marginBottom: 3
                  }}
                >We Have Received your Order</Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 11,
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  11:00AM - Mar 22, 2024
                </Text>
              </View>

            </View>



            {/* <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}
            >
              <View
                style={{
                  width: "15%"
                }}
              >

                <View

                >
                  <Image source={require('../assets/Images/Group 470 (1).png')} />

                </View>
                <View
                  style={{
                    position: 'relative',
                    left: Dimensions.get('screen').width / 20
                  }}
                >
                  <Image source={require('../assets/Images/Rectangle 243.png')} />
                </View>


                <View>
                  <Image source={require('../assets/Images/Group 470 (1).png')} />

                </View>
                <View
                  style={{
                    position: 'relative',
                    left: Dimensions.get('screen').width / 20
                  }}
                >
                  <Image source={require('../assets/Images/Rectangle 243.png')} />
                </View>


                <View>
                  <Image source={require('../assets/Images/Group 470 (1).png')} />

                </View>
              </View>
              <View
                style={{
                  width: "85%"
                }}
              >

                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    marginBottom: 3
                  }}
                >We Shipped your Order, It’s on the way!</Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 11,
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  11:00AM - Mar 22, 2024
                </Text>
              </View>
            </View> */}
          </View>
        </View>
      </View>
      <View>
        <CommonBtn
          text={'Notify me when Arrives'}
          fontSize={20}
          color={'rgba(255, 255, 255, 1)'}
          Radius={100}
          width={Dimensions.get('screen').width / 1.4}
          height={Dimensions.get('screen').height / 18}
          handdleClick={() => setModalVisible(true)}
          margintop={''}
          backround={Colors.secondry}
          fontWeight={'600'}

        />


      </View>
    </View>
  )
}

export default TrackOrderScreen