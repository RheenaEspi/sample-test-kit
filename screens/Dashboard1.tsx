import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard1({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Success Registration</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project - Rinalyn E.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'TabOneScreen' }],
        })} style={undefined}      >
        Logout
      </Button>
    </Background>
  )
}
