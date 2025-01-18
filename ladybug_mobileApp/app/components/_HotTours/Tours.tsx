import { getTours, TourType } from '@/app/apiController/getTours';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react'
import Promo from '../articles/Promo';
import ShowFiltres from '../Buttons/ShowFiltres';
import { FlatList, View } from 'react-native';
import Tour from './Tour';
import { StyleSheet } from 'react-native';

const Tours = () => {
    const [tours, setTours] = useState<TourType[] | null>(null);

    useEffect(() => {
        const loadTours = async () => {
          try {
            const result = await getTours();
            setTours(result);
          } catch (error) {
            console.error("Ошибка при загрузке туров:", error);
          }
        };
      
        loadTours();
      }, []);
      

    return (
        <View style={styles.container}>
            <Promo title='Предложения' subtitle='все доступные предложения' />

            <FlatList
                data={tours}
                keyExtractor={(item, index) => index.toString()}
                style={{paddingVertical: 30}}
                renderItem={({ item }) => (
                    <Tour
                        {...item}
                    />
                )}
            />
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

export default Tours
