import { Text, View, ScrollView, Pressable } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const RoomsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // console.log(route.params)

  useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: 'Available Rooms',
        headerTitleStyle: {
         fontSize: 22,
         fontWeight: 'bold',
         color: '#010B13'
        },
        headerStyle: {
          height: 120,
          backgroundColor: 'white',
          borderBottomColor: 'transparent',
          shadowColor: 'transparent',
        },
      })
    }, []);
  return (
    <ScrollView>
      {route.params.rooms.map((room, index) => {
        <Pressable 
          style={styles.roomContainer}
          key={index}
        >
          <View style={styles.roomImg}>
            <Image
              style={{width: '100%', height: 100, borderRadius: 20}}
              source={{uri:room.image}}
            />
          </View>
          <View style={styles.roomDetailsContainer}>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#095086'}}>{room.name}</Text>
            <View style={styles.detailsContainer}>
              {room.refundable === "refundable" ? (
                
              <MaterialCommunityIcons name="cash-refund" size={24} color="green" />
              )
            : ( <MaterialCommunityIcons name="cash-refund" size={24} color="red" />)
              }
              <Text style={{fontSize: 15, fontWeight: '500'}}>{room.refundable}</Text>

            </View>
            <View style={styles.detailsContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <MaterialCommunityIcons name="bed-queen-outline" size={24} color="#095086" />
                <Text style={{fontSize: 15, fontWeight: '500'}}>{room.bed}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <MaterialIcons name="payment" size={24} color="#095086" />
                <Text style={{fontSize: 15, fontWeight: '500'}}>{room.payment}</Text>
              </View>
            </View>
            <Pressable
              style={styles.bookContainer}
            >
              <Text style={{fontSize: 20, fontWeight: '800', color: 'white'}}>Book Now</Text>
            </Pressable>
          </View>
        </Pressable>
      })}
    </ScrollView>
  )
}

export default RoomsScreen

