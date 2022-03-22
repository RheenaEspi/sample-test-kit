import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8afef60261411.5a44784a9dcc3.gif' }} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 230,
    marginBottom: 1,
  },
})
