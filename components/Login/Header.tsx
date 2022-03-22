import * as React from "react";
import { View } from "react-native";
import LottieView from 'lottie-react-native';


export default function Header() {
    return (
        <View style={{ flex: 1 }}>
            <LottieView
                source={require('../../assets/lottie/39476-login-screen.json')}
                autoPlay={true}
                loop={true}
                style={{
                    flex: 1,
                }}
            />
        </View>
    )
}