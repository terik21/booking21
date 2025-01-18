import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Promo from '../components/articles/Promo'

const Contacts = () => {
  return (
    <LinearGradient
            colors={['#FFFFFF', '#FFFFFF']}
            style={styles.container}
        >
            <Promo title='График работы' subtitle='Мы работаем в это время' />

            <View style={styles.content}>
                
                <View style={{gap: 10, marginTop: 20}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                        <Text style={styles.textDays}>ПН/ПТ</Text>
                        <Text>с 9:00 до 21:00</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 10}}>
                    <Text style={styles.textDays}>ПН/ПТ</Text>
                    <Text>с 10:00 до 18:00</Text>
                    </View>
                </View>
            </View>
            
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    socialBlock: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 60
    },
    socialIcon: {
        width: 50,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    map: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    mainText: {
        fontFamily: 'Nunito',
        fontSize: 25,
        fontWeight: 400
    },
    content: {
        alignItems: 'center'
    },

    textDays: {
        backgroundColor: '#29f',
        padding: 2.5,
        paddingHorizontal: 15,
        borderRadius: 10,
        color: '#fff',
        fontSize: 10,
        fontFamily: 'Nunito'
    },
    textHours: {
        fontFamily: 'Nunito',
        fontSize: 15
    }
})

export default Contacts
