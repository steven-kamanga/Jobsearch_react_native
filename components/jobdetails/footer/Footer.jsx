import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeBtn}
      >
        <Image
          resizeMode='contain'
          style={styles.likeBtnImage}
          source={icons.heartOutline} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL(url)}
        style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer