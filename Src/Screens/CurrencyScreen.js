import { View, Text, Dimensions, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import { Colors } from '../assets/Colors'
import axios from 'axios'

const CurrencyScreen = () => {
  const [CurrencyState, setCurrencyState] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getcurrencies()
  }, [])
  const getcurrencies = () => {
    axios.get(`https://beyond-fix.applaiteknoloji.online/api/currencies`, {
      //   headers:{
      //     'Authorization': ` ${login.token}`

      // }
    })
      .then((response) => {
        // Handle the response
        if (response.status === 200) {
          setData(response.data.currencies);
          setLoading(false)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    
      loading?

        <View style = { [styles.container, styles.horizontal] }>
      < ActivityIndicator size = "large" color = "gray" />
    </View >

      :
<View
  style={{
    flex: 1,
    paddingVertical: Dimensions.get('screen').height / 15,
    paddingHorizontal: Dimensions.get('screen').width / 22,
    backgroundColor: 'white',


  }}
>

  <View>
    <ComponentsHeader
      title={'Currency'}
    />

    <View
      style={{
        marginTop: 22
      }}
    >
      {data && data.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={{
              marginBottom: 12,
              backgroundColor: 'rgba(246, 246, 246, 1)',
              paddingHorizontal: 22,
              paddingVertical: 18,
              borderRadius: 12,
              borderWidth: CurrencyState === item.id ? 2 : 0,
              borderColor: CurrencyState === item.id && Colors.secondry,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'

            }}
            onPress={() => setCurrencyState(item.id)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: item.flag }}
                style={{ width: 100, height: 30, marginHorizontal: 7 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400'
                }}
              >{item.name}</Text>
            </View>
            {CurrencyState === item.id &&
              <Image source={require('../assets/Images/check.png')} />

            }
          </TouchableOpacity>
        )
      })}
    </View>


  </View>


</View>
    
  

  )
}

export default CurrencyScreen
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