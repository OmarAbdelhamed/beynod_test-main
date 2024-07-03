import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Dimensions, Text, View } from 'react-native';
import { Colors } from '../assets/Colors';

function SaleText() {
    const [news_bar, setNews_bar] = useState({});
useEffect(() => {
    const getnews_bar = () => {
        axios.get('https://beyond-fix.applaiteknoloji.online/api/news_bar')
            .then((response) => {
                // Handle the response
                if (response.status === 200) {
                    setNews_bar(response.data.news_bar);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getnews_bar();
}, [])
  return (
    <View
    style={{
        backgroundColor: Colors.secondry,
        paddingHorizontal: Dimensions.get('window').width / 11,
        paddingVertical: Dimensions.get('window').height / 50,
        justifyContent: 'center'
    }}
>
    <Text
        style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16,
            lineHeight: 17.86,
            color: 'rgba(255, 255, 255, 1)'
        }}
    >{Object.keys(news_bar).length !== 0 && news_bar && news_bar.key.en}</Text>
</View>
  )
}

export default SaleText