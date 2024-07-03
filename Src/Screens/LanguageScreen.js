import { View, Text, Dimensions, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import { Colors } from '../assets/Colors'
import axios from 'axios'

const LanguageScreen = () => {
  const [langState, setLangState] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getcurrencies()
  }, [])
  const getcurrencies = () => {
    axios.get(`https://beyond-fix.applaiteknoloji.online/api/languages`, {
      //   headers:{
      //     'Authorization': ` ${login.token}`

      // }
    })
      .then((response) => {
        // Handle the response
        if (response.status === 200) {
setData(response.data.languages);
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
          title={'Coupons'}
        />
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.4)',
            fontWeight: '500',
            fontSize: 16,
            marginBottom: 24,
            marginVertical: 12
          }}
        >
          Choose the best language for you:

        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          {data&&data.map((item,index)=>{
            return(
              <TouchableOpacity
              style={{
                marginRight: 30,
                alignItems: 'center'
              }}
              onPress={() => setLangState(item.id)}
            >
  
              <Image source={{uri:item.logo}}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  borderWidth:langState===item.id?5:0,
                  borderColor:langState===item.id&&Colors.secondry
  
  
                }}
              />
              <Text
                style={{
                  marginTop: 7,
                  fontSize: 20,
                  fontWeight: '700',
                  color:langState===item.id?Colors.secondry:"rgba(0, 0, 0, 1)"
                }}
              >{item.name}</Text>
            </TouchableOpacity>
            )
          })}
       

     
        </View>


      </View>


    </View>
  )
}

export default LanguageScreen
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