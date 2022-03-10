import * as React from 'react';
import {Image, Text, View} from 'react-native';
import style from './style';

const StartUp = () => {
    return (
        <View style={style.screen}>
            <Image
                style={style.logo}
                source={require('@assets/image/Group.png')}
            />
        </View>
    );
};

export default StartUp;
