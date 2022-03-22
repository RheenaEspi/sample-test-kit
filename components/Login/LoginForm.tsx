import * as React from "react";
import { Fragment, useState } from "react";
import { View, StyleSheet, Text, Alert, } from "react-native";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { Formik } from 'formik';
import * as yup from "yup";


export default function LoginForm() {
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const loginSchema = yup.object({
        email: yup.string().required('Email address is required')
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
                'Invalid email address'),
        password: yup.string().required('Password is required')
    });

    return (
        <View style={{
            flex: 1,
        }}>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                }}
                validationSchema={loginSchema}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <Fragment>
                        <View style={{
                            flex: 0,
                            marginBottom: 20
                        }}>
                            <Text style={styles.textStyle}>
                                Email
                            </Text>
                            <TextInput
                                label="Email"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                autoComplete={false}
                                keyboardType={"email-address"}
                                mode={"outlined"}
                                right={
                                    <TextInput.Icon
                                        name={"email"}
                                        color={"blue"}
                                    />
                                }
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                autoFocus={true}
                                error={errors.email ? true : false}
                            />
                            {errors.email &&
                                <Text>
                                    {errors.email}
                                </Text>
                            }
                        </View>

                        <View style={{
                            flex: 0,
                            marginBottom: 40
                        }}>
                            <Text style={styles.textStyle}>
                                Password
                            </Text>
                            <TextInput
                                label="Password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                autoComplete={false}
                                mode={"outlined"}
                                right={
                                    <TextInput.Icon
                                        name={visible ? "eye" : "eye-off"}
                                        onPress={() => {
                                            setVisible(!visible);
                                        }}
                                        color={"blue"}
                                    />
                                }
                                secureTextEntry={!visible}
                                error={errors.password ? true : false}
                            />
                            {errors.password &&
                                <Text>
                                    {errors.password}
                                </Text>
                            }
                        </View>
                        <View style={{
                            flex: 0,
                        }}>

                            <View style={{
                                flex: 0
                            }}>
                                <Button
                                    title="SUBMIT"
                                    buttonStyle={{
                                        backgroundColor: 'rgba(78, 116, 289, 1)',
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        marginVertical: 10,
                                    }}
                                    onPress={handleSubmit}
                                    titleStyle={styles.textStyle}
                                    loading={loading}
                                />
                            </View>
                        </View>
                    </Fragment>
                )}
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    overrideContainer: {
        backgroundColor: 'green'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'inspiration-regular',
    },
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
});