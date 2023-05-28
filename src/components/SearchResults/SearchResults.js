import { FlatList, Pressable, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchResults = ({data, input, setInput}) => {
    const navigation = useNavigation();

  return (
    <View style={{padding:10}}>
      <FlatList
        data={data} renderItem={({item})=>{
            if(item.place.toLowerCase().includes(input.toLowerCase())) {
                if(input === "") {
                    return null;
                }
                return (
                    <Pressable style={styles.cardContainer} 
                        onPress={() =>{
                            setInput(item.place)
                            navigation.navigate('Home', {
                                input: item.place
                            })
                        }}
                    > 
                        <View style={styles.imgContainer}>
                            <Image
                                style={styles.image}
                                source={{uri:item.placeImage}}
                            />
                            <View style={styles.ratingContainer}>
                                <Entypo name="star" size={24} color="#F5E663"  />
                                <Text style={styles.ratingNb}>{item.Grating}</Text>
                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <Text style={{fontSize: 18, fontWeight: '700', color: '#095086', padding: 5}}>
                                {item.place}</Text>
                            <Text style={{fontSize: 16, color: 'grey', paddingVertical: 2, paddingHorizontal: 5 }}>
                                {item.description}</Text>
                            <Text style={{fontSize: 16, color: '#0D72BF', paddingVertical: 2, paddingHorizontal: 5 }}>
                                {item.properties.length} properties</Text>

                        </View>
                    </Pressable>
                )
            }
        }}
      
      />
    </View>
  )
}

export default SearchResults

