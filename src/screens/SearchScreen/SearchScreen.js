import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'

import styles from './styles'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

// import hotelsData from '../../../assets/data/hotelsData.json';
import data from '../../../assets/data/data.json'

import SearchResults from '../../components/SearchResults/SearchResults';

const SearchScreen = () => {
    const [input, setInput] = useState("");
    // console.log(hotelsData)

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.searchField}>
            {/* <Feather name="search" size={28} color="#095086" /> */}
            <TextInput placeholder='Explore Something Fun' placeholderTextColor={'#095086'} style={{fontSize: 15}}
                value={input} onChangeText={(text) => setInput(text)}
            />
            <View style={styles.searchBtn}>
            <MaterialCommunityIcons name="map-search-outline" size={28} color="#095086" />
        </View>
        </View>
        
        

      </View>
      <SearchResults data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  )
}

export default SearchScreen

