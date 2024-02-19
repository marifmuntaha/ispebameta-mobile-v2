import {ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Header from "../../layouts/Header";
import {useContext, useState} from "react";
import {UserContext} from "../UserScreen/UserContext";
import {actionType, Dispatch} from "../../reducer";

const Add = ({route, navigation}) => {
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
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        user: user.id,
        name: '',
        nip: '',
        subject: '',
        phone: '',
    })
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                backTo="TeacherScreen"
                title="TAMBAH GURU"
                subtitle="Silahkan memasukkan Informasi guru baru."
            />
            <ScrollView style={content.container}>
                <View style={content.formBlock}>
                    <Text style={content.formInputLabel}>Nama Lengkap</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholder="Masukkan Nama Lengkap Guru"
                            placeholderTextColor="#929090"
                            onChangeText={(e) => setFormData({...formData, name: e})}
                        />
                    </View>
                    <Text style={content.formInputLabel}>NIP/NPK</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholder="Masukkan NIP/NPK"
                            placeholderTextColor="#929090"
                            onChangeText={(e) => setFormData({...formData, nip: e})}
                        />
                    </View>
                    <Text style={content.formInputLabel}>Mata Pelajaran</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholder="Masukkan Mata Pelajaran"
                            placeholderTextColor="#929090"
                            onChangeText={(e) => setFormData({...formData, subject: e})}
                        />
                    </View>
                    <Text style={content.formInputLabel}>Nomor Whatsapp</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholder="Masukkan Nomor Whatsapp"
                            placeholderTextColor="#929090"
                            onChangeText={(e) => setFormData({...formData, phone: e})}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => Dispatch(actionType.TEACHER_STORE, {
                            formData: formData,
                            setLoading: setLoading
                        }).then(resp => {
                            resp ? navigation.replace('TeacherScreen') : null
                        })}
                        style={content.formButton}
                    >
                        {
                            loading
                                ? <ActivityIndicator size="large"/>
                                : <Text style={content.formButtonLabel}>SIMPAN</Text>
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default Add;