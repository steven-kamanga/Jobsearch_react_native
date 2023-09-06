import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { COLORS, icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance", "More data", "Real"]

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Steven</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?' />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <FlatList
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`)
                }}
                style={{
                  ...styles.tab(activeJobType, item),
                  backgroundColor: activeJobType === item ? COLORS.white : COLORS.lightWhite,
                }} >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{
              columnGap: SIZES.small,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            fadingEdgeLength={30}
          />
        </ScrollView>
      </View>
    </View>
  )
}

export default Welcome