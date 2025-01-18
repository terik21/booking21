import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Promo from '../components/articles/Promo';
import { LinearGradient } from 'expo-linear-gradient';
import TabMenu from '../components/Menus/TabMenu';
import Hotels from '../components/_Search/Hotels';
import Tours from '../components/_Search/Tours';

const Search = ({navigation}: {navigation: any}) => {

    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <Promo title='Поиск' subtitle='Если нужно найти удобное предложение' isLogo />

            <View>
                <Tours navigation={navigation} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default Search;
