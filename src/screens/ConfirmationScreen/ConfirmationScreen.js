import { Pressable, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialIcons, Ionicons, FontAwesome, Feather, Fontisto } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { savedPlaces } from '../../../SavedReducer'




const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Confirmation Booking',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
      },
      headerStyle: {
        backgroundColor: 'white',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
    });
  }, []);



    
  // const dispatch = useDispatch();
  
  return (
    <View style={{flexDirection: 'column', justifyContent: 'space-between', height: '100%',}}>
      <View>
        <Pressable style={styles.bookingContainer}>
          <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'left', marginHorizontal: 10, marginBottom: 20, }}>
            Booking Details
          </Text>
          <View style={styles.detailsContainer}>
            <View style={styles.imgContainer}>
              <Image source={{uri:route.params.room.image}} style={{width: '100%', height: 140, borderRadius: 20}} />
            </View>
            <View style={styles.infosContainer}>
              <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'left', marginHorizontal: 10, color: '#095086' }}>{route.params.name}</Text>
              <View style={styles.addressContainer}>
                <Feather name="map-pin" size={18} color="grey" />
                <Text style={{fontSize: 14, color: 'grey', paddingLeft: 5}}>{route.params.address}</Text>
              </View>
              
              <View style={styles.guestsContainer}>
                <View style={styles.container}>
                  <Ionicons name="person" size={18} color="#EF066F" />
                  <Text style={{fontSize: 16, color: 'grey', paddingLeft: 5}}>{route.params.adults} adults</Text>
                </View>
                <View style={styles.container}>
                  <FontAwesome name="child" size={18} color="#EF066F" />
                  <Text style={{fontSize: 16, color: 'grey', paddingLeft: 5}}>{route.params.children} children</Text>
                </View>
              </View>

              <View style={styles.container}>
                <Fontisto name="room" size={18} color="#EF066F" />
                <Text style={{fontSize: 16, color: 'grey', paddingLeft: 5}}>{route.params.selected}</Text>
              </View>
              
            </View>
            
          </View>
          <View style={styles.divider}/>
          <View style={styles.datesContainer}>
            <View styles={styles.checkBox}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>Check In</Text>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#095086'}}>{route.params.startDate}</Text>
            </View>
            <View styles={styles.checkBox}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>Check Out</Text>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#095086'}}>{route.params.endDate}</Text>
            </View>
          </View>
        </Pressable>
      {/* Contact */}
        <Pressable style={styles.contactContainer}>
            <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'left', marginHorizontal: 10, marginBottom: 20}}>
              Contact Details
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={styles.userBox}>
                <Text style={{fontSize: 18, fontWeight: '500', color: '#095086', marginHorizontal: 10, marginVertical: 5,}}>
                  {route.params.firstName} {route.params.lastName}
                </Text>
                <View style={styles.container}>
                  <MaterialIcons name="email" size={18} color="#EF066F" />
                  <Text style={{fontSize: 16, color: 'grey', paddingLeft: 5}}>{route.params.email}</Text>
                </View>
                <View style={styles.container}>
                  <FontAwesome name="phone" size={18} color="#EF066F" />
                  <Text style={{fontSize: 16, color: 'grey', paddingLeft: 5}}>{route.params.phoneNo}</Text>
                </View>
                

              </View>
              <View style={styles.editContainer}>
              <Pressable onPress={() => navigation.goBack()}>
                <MaterialIcons name="edit" size={24} color="#095086" />
              </Pressable>
            </View>
            </View>
        </Pressable>
      </View>
      {/* Confirm Booking */}
      <View style={styles.confirmContainer}>
        <View style={styles.priceContainer}>
          <Text style={{fontSize: 18, fontWeight: '500', textAlign: 'left',}}>Total Price</Text>
          <Text style={{fontSize: 20, fontWeight: '800',}}>${route.params.nowPrice * route.params.adults }</Text>
        </View>
      
      <Pressable
        style={styles.confirmBtn}
      >
        <Text style={{textAlign:"center",color:"white",fontSize:18,fontWeight:"bold"}}>Confirm Booking</Text>
      </Pressable>
      
      </View>
    </View>

  )
}

export default ConfirmationScreen

