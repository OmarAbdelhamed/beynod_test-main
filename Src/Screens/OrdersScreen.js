import { View, Text, Dimensions, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import CartProductContainer from '../Components/CartProductContainer'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const OrdersScreen = () => {
  const login = useSelector((state) => state.auth.authState);
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const navigation=useNavigation()

  useEffect(() => {
    const getMyOrders = () => {
      axios.get(`https://beyond-fix.applaiteknoloji.online/api/my-orders`, {
        headers: {
          'Authorization': ` ${login.token}`,
          'currency': 'SAR'


        }
      })
        .then((response) => {
          // Handle the response
          if (response.status === 200) {
            setLoading(false)
            setData(response.data.orders);
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        })
    }
    getMyOrders()
  }, [])
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
          title={'Orders'}
        />

        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}


        >

          {data && data.map((item, index) => {
            return (

              <TouchableOpacity
              
              onPress={()=>navigation.navigate('OrderDetails',{
                "id":item.id
            })}
              >
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 8,
                    padding: 12,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    width: '99%',
                    marginBottom: 12

                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        color: '#222222',
                        fontSize: 16,
                        fontWeight: '600'
                      }}
                    >Order</Text>
                    <Text>{item.created_at.slice(0,10)}</Text>
                  </View>


                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 12

                    }}
                  >
                    <Text
                      style={{
                        color: '#222222',
                        fontSize: 16,
                        fontWeight: '400'
                      }}
                    >Tracking number:IW3475453455</Text>
                  </View>


                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 12

                    }}
                  >
                    <Text
                      style={{
                        color: '#222222',
                        fontSize: 16,
                        fontWeight: '400',
                        color: 'gray'
                      }}
                    >Quantity:3</Text>
                    <Text>Total Amount:{item.subtotal_amount}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 12
                    }}
                  >

                    <TouchableOpacity
                      style={{
                        color: '#000',
                        borderRadius: 22,
                        borderColor: '#000',
                        borderWidth: 1,
                        paddingVertical: 12,
                        paddingHorizontal: 18
                      }}
                    >
                      <Text>  Details
                      </Text>
                    </TouchableOpacity>
                    <Text>{item.status}</Text>
                  </View>
                </View>
              </TouchableOpacity>)
          })}


        </ScrollView>


      </View>
  )
}

export default OrdersScreen
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