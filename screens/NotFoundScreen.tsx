import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from "react-native";
import { Button, ListItem } from "react-native-elements";
import LottieView from 'lottie-react-native';
import { Entypo } from '@expo/vector-icons';
import { List, TextInput } from 'react-native-paper';
import Header from "../components/Login/Header";
import LoginForm from "../components/Login/LoginForm";
import ViewWithLoading from "../components/ViewWithLoading";

export default function NotFoundScreen() {

  const arrays = [1, 2, 3, 4, 5, 23, 7, 93, 9, 10, 11, 12];

  const handlePressItem = (num: number) => {
    Alert.alert(num.toString());
  }

  return (
    <ViewWithLoading loading={false}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {arrays.map((num: number) => (
          <ListItem key={num.toString()} bottomDivider
            onPress={() => {
              handlePressItem(num);
            }}
          >
            <ListItem.Content>
              <ListItem.Title>
                {num} This is a title
              </ListItem.Title>
              <ListItem.Subtitle>
                This is a subtitle
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron tvParallaxProperties />
          </ListItem>

        ))}

      </ScrollView>
    </ViewWithLoading>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});