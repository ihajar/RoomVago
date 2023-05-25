import { Pressable, ScrollView, Text, View } from 'react-native'
import React, {useLayoutEffect}from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import styles from './styles'

import data from '../../../assets/data/data.json';

import PorpertyCard from '../../components/PorpertyCard/PorpertyCard';

const PlacesScreen = () => {
    const route = useRoute();
    // console.log(route.params)
    const navigation  = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: 'Popular Places',
          headerTitleStyle: {
           fontSize: 24,
           fontWeight: 'bold',
           color: '#010B13'
          },
          headerStyle: {
            height: 90,
            backgroundColor: 'white',
            borderBottomColor: 'transparent',
            shadowColor: 'transparent',
          },
        })
      }, []);
    
  return (
    <View>
      <Pressable style={styles.hdIconContainer}>
        <Pressable style={styles.icnContainer} >
            <Octicons name="arrow-switch" size={24} color="black" />
            <Text style={styles.icnTxt}>Sort</Text>
        </Pressable>
        <Pressable style={styles.icnContainer}>
        <Ionicons name="filter-outline" size={24} color="black" />
            <Text style={styles.icnTxt}>Filter</Text>
        </Pressable>
        <Pressable style={styles.icnContainer}>
        <MaterialCommunityIcons name="map-marker-radius-outline" size={24} color="black" />
            <Text style={styles.icnTxt}>Map</Text>
        </Pressable>
      </Pressable>
      
      <ScrollView style={styles.prptyContainer}>
        {data?.filter((item) => item.place === route.params.place).map((item) => 
            item.properties.map((property, index) => 
            <PorpertyCard
                key={index}
                rooms={route.params.rooms}
                adults={route.params.adults}
                children={route.params.children}
                startDate={route.params.startDate}
                endDate={route.params.endDate}
                property={property}
                availableRooms={property.rooms}
            />
            ))
        }
      </ScrollView>
    </View>
  )
}

export default PlacesScreen

