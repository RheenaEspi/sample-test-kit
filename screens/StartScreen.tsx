import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome Back!</Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('TabOneScreen')} style={undefined}      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('TabTwoScreen')} style={undefined}      >
        Sign Up
      </Button>
    </Background>
  )
}