import { Dimensions, Image, ImageBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const TopCategories = () => {
    const navigation = useNavigation();
    const [topCategories, setTopCategories] = useState([]);
useEffect(() => {
    const top_categories = () => {
        axios.get('https://beyond-fix.applaiteknoloji.online/api/top_categories')
            .then((response) => {
                // Handle the response
                if (response.status === 200) {
                    setTopCategories(response.data.top_categories);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    top_categories()
}, [])

    return (
        <View
            style={{

                flex: 1,
                marginTop: 12,
                paddingHorizontal: Dimensions.get('screen').width / 70,
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between'


            }}
        >


            {topCategories && topCategories.map((items) => {
                return (
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 15,
                            marginVertical: Dimensions.get('window').height / 75

                        }}
                        onPress={() => navigation.navigate('CategoryList', {
                            'name': items.name.en,
                            "id": items.id
                        })}
                    >
                        <Image source={{ uri: items.image }} style={{ width: 50, height: 50, borderRadius: '50%' }} />
                        <Text
                            style={{
                                fontWeight: '400',
                                fontSize: 14,
                                marginTop: 5
                            }}
                        >{items.name.en}</Text>
                    </TouchableOpacity>)
            })}
            {/* <FlatList
        data={CategoryItems}
        numColumns={numColumns}
        renderItem={({ item }) => <FlatItem title={item} />}
        keyExtractor={item => item.id}
        key={`FlatList-${numColumns}`}

    /> */}
        </View>
    )
}

export default TopCategories

const styles = StyleSheet.create({})