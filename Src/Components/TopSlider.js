import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSelector } from 'react-redux';

const TopSlider = () => {
    const login = useSelector((state) => state.auth.authState);
    const [top_slider_value, setTop_slider_value] = useState([]);

    useEffect(() => {
        const top_slider = () => {
            axios.get(`https://beyond-fix.applaiteknoloji.online/api/top_slider`, {
                headers: {
                    'Authorization': ` ${login.token}`,
                    'currency': 'SAR'
                }
            })
                .then((response) => {
                    // Handle the response
                    if (response.status === 200) {
                        setTop_slider_value(response.data.top_slider.value);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        top_slider()
    }, [])
    _renderItem = ({ item, index }) => {
        return (
            <View
                style={{
                    marginBottom: 22
                }}
            >
                <Image source={{ uri: item.en }}
                    width={300}
                    height={150}
                />
            </View>
        );
    }

  return (
    <View
    style={{
        paddingHorizontal: Dimensions.get('screen').width / 22,
        marginTop: 7

    }}
>
    {/* <Carousel
        data={headerArray}
        renderItem={bannerRenderItem}
        sliderWidth={400}
        itemWidth={370}
        activeSlideAlignment={'start'}
        loop={true}
        autoplay={true}

    /> */}
    <Carousel
        ref={(c) => { _carousel = c; }}
        data={top_slider_value}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('screen').width / 1.2}
        itemWidth={370}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={3000}
        loop={true}

    />
</View>  )

}

export default TopSlider