import { Image, Text, View, SafeAreaView, ScrollView, Pressable, StyleSheet } from 'react-native'
import React, {useLayoutEffect} from 'react'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, EvilIcons, Ionicons, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { pixelNormalize } from '../../components/Normalise/Normalise'
import { registerRootComponent } from 'expo';

const PropertyInfoScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    console.log(route.params.rooms);  
    // useLayoutEffect(() => {
    //   navigation.setOptions({
    //     headerShown: true,
    //     title: 'Your Stay',
    //     headerTitleStyle: {
    //      fontSize: 22,
    //      fontWeight: 'bold',
    //      color: '#010B13'
    //     },
    //     headerStyle: {
    //       height: 120,
    //       backgroundColor: 'white',
    //       borderBottomColor: 'transparent',
    //       shadowColor: 'transparent',
    //     },
    //   })
    // }, []);

    const difference = route.params.oldPrice - route.params.nowPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#EBEBEB', height: '100%'}}>
    
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
            <Text style={styles.OfferTxt}>What we offer</Text>
            <View style={styles.offerIconsContainer}>
              {route.params.rooms.map((room) => (
                
                <View style={{width: 82, height:pixelNormalize(120), borderRadius: pixelNormalize(15),
                              backgroundColor: 'white', margin: 6, alignItems: 'center' }}>
                  <Text style={styles.roomsTxt}>{room.name.length > 15 ? room.name.substr(0,15) : room.name}</Text>
                  <MaterialCommunityIcons name="bed-queen-outline" size={24} color="#095086" />
                  <Text style={{color: '#095086', fontSize: 12}}>{room.bed}</Text>
                    
                  <Text style={{color: '#095086', fontSize: 12}}>size of {room.size}</Text>
                </View>
              ))}

            </View>
          </View>
          {/* <View style={styles.offContainer}>
            <MaterialIcons name="local-offer" size={18} color="white" />
            <Text style={styles.offTxt}>
              {offerPrice.toFixed(0)} % OFF
            </Text>
          </View> */}
        </View>
        
       

      </ScrollView>
      
    </SafeAreaView>
    {/* Your Trip */}
        {/* <View style={styles.stayContainer}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Your Application</Text>
          <View style={styles.appContainer}>
           
            <View style={styles.container}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>CheckIn/CheckOut Dates</Text>
              <Text style={styles.detailsTxt}>{route.params.startDate}-{route.params.endDate}</Text>
            </View>
           
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: StyleSheet.hairLineWidth
              }}
            />
           
            <View style={styles.container}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>Guests</Text>
              <View style={styles.guestsContainer}>
                <Text style={styles.detailsTxt}>{route.params.adults} </Text>
                <Text style={styles.detailsTxt}>{route.params.children} </Text>
              </View>
            </View>
            
            <View style={styles.container}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>Rooms</Text>
              <Text style={styles.detailsTxt}>{route.params.rooms}</Text>
            </View>
           
            <View style={styles.container}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>Total Price</Text>
              <Text style={{fontSize: 16, fontWeight: '600'}}>$ {route.params.nowPrice * route.params.adults}</Text>
            </View>
          </View>
          
         
          
        </View> */}
    </>
  )
}

export default PropertyInfoScreen
