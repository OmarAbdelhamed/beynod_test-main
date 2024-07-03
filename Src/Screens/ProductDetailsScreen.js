import { View, Text, Dimensions, Alert, ScrollView, Image, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonBtn from '../Components/CommonBtn'
import { Colors } from '../assets/Colors'
import ProductCart from '../Components/ProductCart'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useSelector } from 'react-redux'

const ProductDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { sku } = route.params
  const { productID } = route.params
  const login = useSelector((state) => state.auth.authState);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const userData = useSelector((state) => state.auth);
  useEffect(() => {
    getsingle_product()
  }, [])
  const getsingle_product = () => {
    axios.get(`https://beyond-fix.applaiteknoloji.online/api/single-product?sku=${sku}`, {
      headers: {
        'Authorization': `Bearer ${login.token}`,
        currency: 'SAR'


      }
    })
      .then((response) => {
        // Handle the response
        if (response.status === 200) {
          setData(response.data.data);
          setLoading(false)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const addToCart = () => {
    const postData = {
      product_id:productID
    };

    axios.post('https://beyond-fix.applaiteknoloji.online/api/add-to-cart', postData, {
      headers: {
        'Authorization': `Bearer ${login.token}`

      }
    })
      .then((response) => {
        // Handle the response
        if (response.status === 200) {
          Alert.alert('product add successfully')
          console.log(response.data);
        }
      })
      .catch((error) => {
        // Handle any errors
        console.log(error.response.data)
      })
  }
  return (
    loading ?
      <View style={[styles.container, styles.horizontal]}>
        < ActivityIndicator size="large" color="gray" />
      </View >
      :

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingTop: Dimensions.get('screen').height / 15,
          paddingBottom: Dimensions.get('screen').height / 50,
          backgroundColor: '#fff'

        }}
      >
        <ScrollView
          nestedScrollEnabled={true}
        >
          {/***********************des*******************************/}
          <View
            style={{
              paddingHorizontal: Dimensions.get('screen').width / 22,
            }}
          >
            <View></View>
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 700,
                  fontSize: 28,
                  marginBottom: 12
                }}
              >{data.product.name_en}</Text>
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: 600,
                    fontSize: 20,
                    marginBottom: 12
                  }}

                >Brand:</Text>
                <Text
                  style={{
                    color: '#00000066',
                    fontWeight: 600,
                    fontSize: 20,
                    marginBottom: 12
                  }}

                >{data.product.brand.name && data.product.brand.name.en}</Text>

              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(243, 243, 243, 1)',
                padding: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 8

              }}
            >


              <Image source={require('../assets/Images/Rectangle 208.png')} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 11,

                  }}>
                  Pay half of the value today{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 11,
                    color: 'rgba(150, 0, 193, 1)'
                  }}
                >
                  SAR 20
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 11,
                  }}
                >
                  , and the rest fr the next 2 months. withouts any fees involved.
                </Text>
                <TouchableOpacity>
                  <Text> Learn more</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/**************************desc******************************/}
          <View
            style={{
              paddingHorizontal: Dimensions.get('screen').width / 22,

            }}
          >
            <Text
              style={{
                fontWeight: '700',
                fontSize: 18,
                marginVertical: 12
              }}
            >Product Description:</Text>
            <View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                }}
              >
                A scuba dress is the wardrobe essential you never knew you needed. Made from soft, stretchy neoprene fabric that's ultra-supportive, the scuba midi dress is an essential when it comes to comfortable style that flatters all body shapes. Give your figure the attention it deserves with a Bardot neckline or wear a scuba skater dress for ultimate pretty vibes at any event. Now that's fashion-forward.
              </Text>
            </View>
          </View>
          {/************************Highlights :******************************/}
          <View
            style={{
              paddingHorizontal: Dimensions.get('screen').width / 22,

            }}
          >
            <Text
              style={{
                fontWeight: '500',
                fontSize: 20,
                marginVertical: 12
              }}
            >Highlights :</Text>
            <FlatList
              data={[
                { key: 'Name : Puff Sleeves Sweetheart Neck Midi Dress' },
                { key: 'Color : BOTTLE GREEN' },
                { key: 'Brand Name : ZARA' },
                { key: 'Gender : Women' },
                { key: 'Category : Clothing' },
                { key: 'Subcategory : Dresses' },
                { key: 'Occasion : Brunch' },
                { key: 'Dress : LengthKnee Length' },
                { key: 'Sleeve : LengthShort Sleeve' },
              ]}
              renderItem={({ item }) => <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    marginRight: 7

                  }}
                >.</Text>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '500',

                }}>{item.key}</Text>
              </View>
              }
            />

          </View>

          {/***********************Size Guide******************************* */}

          <View
            style={{
              marginBottom: 7
            }}
          >
            <Text
              style={{
                fontWeight: '500',
                fontSize: 20,
                marginVertical: 12,
                paddingHorizontal: Dimensions.get('screen').width / 22,

              }}
            >Size Guide :</Text>
            <Image source={require('../assets/Images/Rectangle 172.png')}
              style={{
                width: '100%'
              }}
            />
          </View>
          {/************************ Like Products*********************** */}
          <View
            style={{
              paddingHorizontal: Dimensions.get('screen').width / 22,

            }}
          >
            <Text
              style={{
                fontWeight: '500',
                fontSize: 20,
                marginVertical: 12
              }}
            >You May Also Like</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}
            >
              <View
                style={{
                  width: '49%'
                }}
              >
                <ProductCart
                  img={require('../assets/Images/Rectangle 152 (1).png')}
                  favIcon={true}
                  cartIcon={true}
                  discount={'40%'}
                  Name={'Zara'}
                  desc={'Emerald Green Unisex Oversize Zipper '}
                  rating={3}
                  price={'SAR 99,99'}
                  discountPrice={'SAR 40'}
                  handlePress={() => navigation.navigate('ProductDetails', {
                    "id": 1
                  })}

                />
              </View>
              <View
                style={{
                  width: '49%'
                }}
              >
                <ProductCart
                  img={require('../assets/Images/Rectangle 152 (1).png')}
                  favIcon={true}
                  cartIcon={true}
                  discount={'40%'}
                  Name={'Zara'}
                  desc={'Emerald Green Unisex Oversize Zipper '}
                  rating={3}
                  price={'SAR 99,99'}
                  discountPrice={'SAR 40'}
                  handlePress={() => navigation.navigate('ProductDetails', {
                    "id": 1
                  })}

                />
              </View>
              <View
                style={{
                  width: '49%'
                }}
              >

                <ProductCart
                  img={require('../assets/Images/Rectangle 152 (1).png')}
                  favIcon={true}
                  cartIcon={true}
                  discount={'40%'}
                  Name={'Zara'}
                  desc={'Emerald Green Unisex Oversize Zipper '}
                  rating={3}
                  price={'SAR 99,99'}
                  discountPrice={'SAR 40'}
                  handlePress={() => navigation.navigate('ProductDetails', {
                    "id": 1
                  })}
                />

              </View>
              <View
                style={{
                  width: '49%'
                }}
              >
                <ProductCart
                  img={require('../assets/Images/Rectangle 152 (1).png')}
                  favIcon={true}
                  cartIcon={true}
                  discount={'40%'}
                  Name={'Zara'}
                  desc={'Emerald Green Unisex Oversize Zipper '}
                  rating={3}
                  price={'SAR 99,99'}
                  discountPrice={'SAR 40'}
                  handlePress={() => navigation.navigate('ProductDetails', {
                    "id": 1
                  })}
                />


              </View>

            </View>
          </View>

        </ScrollView>
        <CommonBtn
          text={'Add To Cart'}
          fontSize={20}
          color={'rgba(255, 255, 255, 1)'}
          Radius={10}
          width={Dimensions.get('screen').width / 1.2}
          height={Dimensions.get('screen').height / 18}
          handdleClick={addToCart}
          margintop={''}
          backround={Colors.secondry}
          fontWeight={'700'}
          handlePress={() => navigation.navigate('ProductDetails', {
            "id": 1
          })}
        />
      </View>
  )
}

export default ProductDetailsScreen;
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