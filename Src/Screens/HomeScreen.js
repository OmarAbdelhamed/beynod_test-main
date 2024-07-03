import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import { Colors } from '../assets/Colors';
import MainHeader from '../Components/MainHeader';
import SearchInput from '../Components/SearchInput';
import BestSeller from '../Components/BestSeller';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addUser } from '../Redux/Authantication';
import axios from 'axios';
import SaleText from '../Components/SaleText';
import TopSlider from '../Components/TopSlider';
import SaleBanner from '../Components/SaleBanner';
import TopCategories from '../Components/TopCategories';
import FirstBanner from '../Components/FirstBanner';
import NewIn from '../Components/NewIn';
import SecondBanner from './SecondBanner';
import FeaturedProduct from '../Components/FeaturedProduct';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [catType, setCatType] = useState('Best Seller');
  const [catID, setCatID] = useState('');
  const [mainCategories, setMainCategories] = useState([]);
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);

  const scrollX = useRef(new Animated.Value(0)).current;
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const screenWidth =
    Dimensions.get('screen').width - (Dimensions.get('screen').width / 22) * 2;
  const login = useSelector((state) => state.auth.authState);
  useEffect(() => {
    setModalVisible(true);
    getMainCategoury();
    getUserData();
  }, []);
  const getMainCategoury = () => {
    axios
      .get('https://beyond-fix.applaiteknoloji.online/api/get_main_categories')
      .then((response) => {
        // Handle the response
        if (response.status === 200) {
          setMainCategories(response.data.categories);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getUserData = () => {
    axios
      .get('https://beyond-fix.applaiteknoloji.online/api/profile', {
        headers: {
          Authorization: `Bearer ${login.token}`,
        },
      })
      .then((response) => {
        // Handle the response
        if (response.status === 200) {
          dispatch(addUser(response.data.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Dimensions.get('screen').height / 15,
        paddingBottom: Dimensions.get('screen').height / 30,
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          paddingHorizontal: Dimensions.get('screen').width / 22,
        }}
      >
        <MainHeader />

        <SearchInput
          value={search}
          changeFun={(text) => {
            setSearch(text);
            axios
              .post(
                `https://beyond-fix.applaiteknoloji.online/api/search-products`,
                {
                  search: text,
                },
                {
                  headers: {
                    Authorization: ` ${login.token}`,
                  },
                }
              )
              .then((response) => {
                if (response.status === 200) {
                  setData(response.data.products[0].splice(0, 5));
                  setFullData(response.data.products[0]);
                }
              })
              .catch((error) => {
                console.log(error.response.data);
              });
          }}
        />
      </View>

      {search ? (
        <ScrollView
          style={{
            paddingHorizontal: Dimensions.get('screen').width / 22,
          }}
        >
          {data &&
            data.map((item, key) => {
              console.log(item.name_en);
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 12,
                  }}
                  onPress={() =>
                    navigation.navigate('ProductDetails', {
                      name: search,
                      sku: item.sku,
                      productID: item.id,
                    })
                  }
                >
                  <Text>{item.name_en.slice(0, 30)}</Text>
                  <Image
                    source={require('../assets/Images/Frame 42.png')}
                    style={{
                      transform: [{ rotate: '180deg' }],
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          {data.length !== 0 && (
            <TouchableOpacity
              style={{
                paddingVertical: 22,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                navigation.navigate('CategoryList', {
                  name: search,
                  item: fullData,
                })
              }
            >
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 16,
                  fontWeight: '700',
                }}
              >
                See More
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: Dimensions.get('screen').width / 22,
              backgroundColor: 'rgba(245, 245, 245, 1)',
              paddingVertical: 12,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={() => setCatType('Best Seller')}>
                <Text
                  style={{
                    fontWeight: catType === 'Best Seller' ? '700' : '400',
                    fontSize: 16,
                    color: 'rgba(0, 0, 0, 1)',
                    textDecorationLine:
                      catType === 'Best Seller' ? 'underline' : 'none',
                  }}
                >
                  Best Seller
                </Text>
              </TouchableOpacity>
              {mainCategories &&
                mainCategories.map((cat, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setCatType(cat.name.en);
                        setCatID(cat.id);
                      }}
                      style={{ marginHorizontal: 7 }}
                    >
                      <Text
                        style={{
                          fontWeight: catType === cat.name.en ? '700' : '400',
                          fontSize: 16,
                          color: 'rgba(0, 0, 0, 1)',
                          textDecorationLine:
                            catType === cat.name.en ? 'underline' : 'none',
                        }}
                      >
                        {cat.name.en}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>
          <ScrollView style={{ flexGrow: 1 }} nestedScrollEnabled={true}>
            <SaleText />
            <TopSlider />
            <SaleBanner />
            <TopCategories />
            <FirstBanner />
            <NewIn catID={catID} />
            <SecondBanner />
            <FeaturedProduct catID={catID} />
            <BestSeller />
            {/* {catType === 'Best Seller' &&

                            }
                            {catType === 'Women' &&

                                <HomeOfWoman />
                            } */}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: Colors.secondry,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: Dimensions.get('screen').width / 1.1,
    height: Dimensions.get('screen').height / 2.2,
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
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '500',
  },
});

// import React from 'react';
// import {
//   Alert,
//   Modal,
//   StyleSheet,
//   Text,
//   FlatList,
//   View,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   Animated,
//   ScrollView,
// } from 'react-native';

// const HomeScreen = () => {
//   return <Text>HomeScreen</Text>;
// };

// export default HomeScreen;
