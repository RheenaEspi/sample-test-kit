import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

export default function TabTwoScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [name1, setName1] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [password1, setPassword1] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const nameError1 = nameValidator(name1.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const passwordError1 = passwordValidator(password1.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setName1({ ...name1, error: nameError1 })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setPassword1({ ...password1, error: passwordError1 })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard1' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Register Here</Header>
      <Paragraph>Create your account. It's free and only take a minute.</Paragraph>
      <View style={styles.container}>
      <TextInput
          label="First Name"
          returnKeyType="next"
          value={name1.value}
          onChangeText={(text: any) => setName1({ value: text, error: '' })}
          error={!!name1.error}
          errorText={name1.error}
          style={{ marginTop: 20 }} description={undefined}      
      />
      <TextInput
          label="Last Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text: any) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
          style={{ marginTop: 20, }} description={undefined}
      
      />
      </View>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: any) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={{ marginTop: 1 }} description={undefined}      />
      <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={password1.value}
        onChangeText={(text: any) => setPassword1({ value: text, error: '' })}
        error={!!password1.error}
        errorText={password1.error}
        secureTextEntry description={undefined}      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: any) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry description={undefined}      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 10 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('TabOneScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  container:{
    display:'flex',
    width:'50%',
    justifyContent: 'center',
    flexDirection:'row',
  },
  col:{
    flex:1,
  }
})
