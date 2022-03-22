import * as React from "react";
import { View, Text } from "react-native";

interface IProps {
    text?: string;
}

export default function Footer(props: IProps) {
    const { text } = props;
    return (
        <View style={{
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingBottom: 20
        }}>
            <Text style={{
                fontSize: 18
            }}>
                {text ?
                    text
                    :
                    "Create an account?"
                }
            </Text>
        </View>
    )
}