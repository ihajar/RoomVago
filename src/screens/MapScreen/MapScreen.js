import { Pressable, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'

import styles from './styles'

const MapScreen = () => {
    const route = useRoute();
    // console.log(route.params)
    const navigation = useNavigation();
    const mapView = useRef(null);
    const coordinates = [];
    const details = route.params.searchResults.map((item) => item.properties?.map((prop) => {
      coordinates.push({
        latitude:Number(prop.latitude),
        longitude:Number(prop.longitude),
      })
    }));

    useEffect(() => {
      mapView.current.fitToCoordinates(coordinates, {
        edgePadding: {
          top: 120,
          left: 120,
          bottom: 120,
          right: 120,
        }
      })
    }, [])

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: 'Map',
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
      <MapView
        ref={mapView} 
        style={styles.mapContainer}
      >
        {route.params.searchResults.map((item) => item.properties.map((property) => (
            <Marker 
                title={property.name}
                coordinate={{
                  latitude:Number(property.latitude), 
                  longitude:Number(property.longitude),
                }}
            >
              <Pressable style={styles.priceContainer}>
                <Text style={styles.priceTxt}>$ {property.nowPrice}</Text>
              </Pressable>
            </Marker>
        )))}

      </MapView>
    </View>
  )
}

export default MapScreen

