import { Image, Text, View, SafeAreaView, ScrollView, Pressable, StyleSheet } from 'react-native'
import React, {useLayoutEffect} from 'react'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, EvilIcons, Ionicons, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { pixelNormalize } from '../../components/Normalise/Normalise'



const PropertyInfoScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    console.log(route.params.address);  
    

    const difference = route.params.oldPrice - route.params.nowPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#f5f5f5', height: '100%'}}>
    
      <ScrollView style={styles.propertyContainer}>
        <View style={styles.topContainer}>  
          <Image
            style={{width: '100%', height: 250, opacity: 0.95 }}
            source={{uri:route.params.image}}
            resizeMode='cover'
          />
          <Pressable style={{position: 'absolute', top: 20, left: 15}}>
            <Ionicons name="arrow-back-circle" size={40} color="#ECF6FD" 
              onPress={() => navigation.goBack()}
            />
          </Pressable>
          <Pressable style={{position: 'absolute', top: 20, right: 15}}>
            <AntDesign name="hearto" size={30} color="#ECF6FD" />
          </Pressable>
          
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.nrContainer}>
            <Text style={styles.name}>{route.params.name}</Text>
            <View style={styles.rContainer}>
              <AntDesign name="star" size={20} color="#FAC05E" />
              <Text style={styles.rating}>{route.params.rating}</Text>
            </View>
          </View>
          <View style={styles.adressContainer}>
            <EvilIcons name="location" size={25} color="#474747" />
            <Text style={styles.address}>{route.params.adress}</Text>
          </View>
        </View>
        <Pressable style={styles.photosConatiner}>
          {route.params.photos.slice(0,4).map((photo) => (
            <View style={{margin: 6}}>
              <Image 
                style={{width: 80, height:pixelNormalize(65), borderRadius: pixelNormalize(10)}} 
                source={{uri:photo.picture}} 
              />
            </View>
          ))}
        </Pressable>
        <View>
          <View style={styles.offerDetailsContainer}>
            <Text style={styles.OfferTxt}>Facilities</Text>
            <View style={styles.offerIconsContainer}>
             <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%'
                            }}
              >
                <View style={styles.iconsContainer}>
                  <FontAwesome5 name="parking" size={28} color="#095086" />
                  <Text style={styles.iconsTxt}>Parking</Text>
                </View>
                
                <View style={styles.iconsContainer}>
                  <AntDesign name="wifi" size={28} color="#095086" />
                  <Text style={styles.iconsTxt}>WiFi</Text>
                </View>

                <View style={styles.iconsContainer}>
                  <MaterialIcons name="pool" size={28} color="#095086" />
                  <Text style={styles.iconsTxt}>Pool</Text>
                </View>

                <View style={styles.iconsContainer}>
                  <MaterialIcons name="fitness-center" size={28} color="#095086" />
                  <Text style={styles.iconsTxt}>Gym</Text>
                </View>
             </View>

            </View>
          </View>
          {/*  */}
        </View>
        
        <View style={styles.stayContainer}>
          <Text style={{fontSize: 22, fontWeight: '700', textAlign: 'left', paddingLeft: 10}}>
            Your stay
          </Text>
          <View style={styles.appContainer}>
            <View style={styles.container}>
              <Text style={{fontSize: 20, fontWeight: '500', paddingVertical: 5}}>Check In</Text>
              <Text style={{fontSize: 18, color: '#095086'}}>{route.params.startDate}</Text>
            </View>
            <View style={styles.divider}/>
            <View style={styles.container}>
              <Text style={{fontSize: 20, fontWeight: '500', paddingVertical: 5}}>Check Out</Text>
              <Text style={{fontSize: 18, color: '#095086'}}>{route.params.endDate}</Text>
            </View>
            <View style={styles.divider}/>
            <View style={styles.container}>
              <Text style={{fontSize: 20, fontWeight: '500', paddingVertical: 5}}>Guests</Text>
              <Text style={{fontSize: 18, color: '#095086'}}>
                {route.params.adults} adults {route.params.children} children
              </Text>
            </View>
            <View style={styles.divider}/>
            <View style={styles.container}>
              <Text style={{fontSize: 20, fontWeight: '500', paddingVertical: 5}}>Rooms</Text>
              <Text style={{fontSize: 18, color: '#095086'}}>
                {route.params.Rooms} bedroom
              </Text>
            </View>
            <View style={styles.divider}/>
            <View style={styles.container}>
              <Text style={{fontSize: 20, fontWeight: '500', paddingVertical: 5}}>Price for 1 Night and {route.params.adults} adults</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingBottom: 10}}>
                <Text style={{fontSize: 18, color: '#095086', fontWeight: '600'}}> $ {route.params.nowPrice * route.params.adults}</Text>
                <View style={styles.offContainer}>
                  <MaterialIcons name="local-offer" size={18} color="white" />
                  <Text style={styles.offTxt}>{offerPrice.toFixed(0)} % OFF</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
      <Pressable 
      onPress={() => navigation.navigate('Rooms', {
        rooms:route.params.rooms,
        oldPrice:route.params.oldPrice,
        nowPrice:route.params.nowPrice,
        name:route.params.name,
        children:route.params.children,
        adults:route.params.adults,
        rating:route.params.rating,
        startDate:route.params.startDate,
        endDate:route.params.endDate,
        address:route.params.adress,
      })}
      style={styles.btnContainer}
    >
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Select Availability</Text>
    </Pressable>
      
    </SafeAreaView>

   
    </>
  )
}

export default PropertyInfoScreen
