import {StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput} from "react-native";
import Header from "../../layouts/Header";
import {UserContext} from "./UserContext";
import {useContext} from "react";
import * as SecureStore from "expo-secure-store";

const TeacherScreen = ({navigation}) => {
    const user = useContext(UserContext);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        }
    });
    const content = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff"
        },
        formBlock: {
            alignSelf: "center",
            width: "80%",
            marginTop: 30
        },
        formInputLabel: {
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: "bold",
            color: "#161D6F",
            marginBottom: 5,
        },
        formInput: {
            backgroundColor: "#F5F6F9",
            borderRadius: 15,
            height: 60,
            marginBottom: 20,
            justifyContent: "center",
            padding: 20
        },
        formInputPlaceholder: {
            fontSize: 18,
            height: 60,
            color: "black"
        },
        formButton: {
            backgroundColor: "#FFC14F",
            borderRadius: 15,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
        },
        formButtonLabel: {
            fontWeight: 'bold',
            color: "white",
            fontSize: 18
        }
    })
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                backTo="DashboardScreen"
                title="DATA PENGGUNA"
                subtitle="Informasi Data Pengguna"
            />
            <ScrollView style={content.container}>
                <View style={content.formBlock}>
                    <Text style={content.formInputLabel}>Nama Lengkap</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholderTextColor="#929090"
                            value={user.name}
                        />
                    </View>
                    <Text style={content.formInputLabel}>Alamat Email</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholderTextColor="#929090"
                            value={user.email}
                        />
                    </View>
                    <Text style={content.formInputLabel}>Jabatan</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholderTextColor="#929090"
                            value={user.position}
                        />
                    </View>
                    <Text style={content.formInputLabel}>Institusi</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholderTextColor="#929090"
                            value={user.institution}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            SecureStore.deleteItemAsync('token').then(() => navigation.replace('LoginScreen'))
                        }}
                        style={content.formButton}
                    >
                        <Text style={content.formButtonLabel}>KELUAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default TeacherScreen;