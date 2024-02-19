import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import IconLogo from '../../images/IconLogo.png';
import {actionType, Dispatch} from "../../reducer";
import {useState} from "react";
const RegisterScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#161D6F',
        },
        headerBlock: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        headerLogo: {
            marginTop: 70,
            marginBottom: 10
        },
        headerTitle: {
            fontWeight: "bold",
            fontSize:30,
            color:"#fff",
        },
        headerSubtitle: {
            width: '80%',
            textAlign: 'center',
            fontSize:20,
            color:"#fff",
            marginBottom: 40,
        },
        formBlock: {
            width:"80%",
            alignSelf: 'center'
        },
        formInputLabel: {
            fontSize: 18,
            color:"white",
            marginBottom: 5
        },
        formInput: {
            backgroundColor:"#FFF",
            borderRadius:15,
            height:60,
            marginBottom:20,
            justifyContent:"center",
            padding:20
        },
        formInputPlaceholder: {
            fontSize: 18,
            height:60,
            color:"black"
        },
        formButton: {
            backgroundColor:"#FFC14F",
            borderRadius:15,
            height:60,
            alignItems:"center",
            justifyContent:"center",
            marginTop:20,
            marginBottom: 50
        },
        formButtonLabel: {
            fontWeight: 'bold',
            color:"white",
            fontSize:18
        }
    });
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        nip: '',
        institution: '',
        position: '',

    });
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerBlock}>
                <Image source={IconLogo} style={styles.headerLogo}/>
                <Text style={styles.headerTitle}>PENDAFTARAN</Text>
                <Text style={styles.headerSubtitle}>Silahkan melakukan pendaftaran untuk memulai menggunakan ISPEBAMETA</Text>
            </View>
            <View style={styles.formBlock}>
                <Text style={styles.formInputLabel}>Nama Lengkap</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan Nama Lengkap"
                        placeholderTextColor="#929090"
                        onChangeText={(e) => setFormData({...formData, name: e})}
                    />
                </View>
                <Text style={styles.formInputLabel}>Alamat Email</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan Alamat Email"
                        placeholderTextColor="#929090"
                        onChangeText={(e) => setFormData({...formData, email: e})}
                    />
                </View>
                <Text style={styles.formInputLabel}>Kata Sandi</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan Kata Sandi"
                        placeholderTextColor="#929090"
                        onChangeText={(e) => setFormData({...formData, password: e})}
                    />
                </View>
                <Text style={styles.formInputLabel}>Ulangi Sandi</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Ulangi Kata Sandi"
                        placeholderTextColor="#929090"
                        onChangeText={(e) => setFormData({...formData, password_confirmation: e})}
                    />
                </View>
                <Text style={styles.formInputLabel}>NIP</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan NIP"
                        placeholderTextColor="#929090"
                        onChangeText={(e) => setFormData({...formData, nip: e})}
                    />
                </View>
                <Text style={styles.formInputLabel}>Nama Lembaga</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan Nama Lembaga"
                        placeholderTextColor="#929090"
                        onChangeText={(e) => setFormData({...formData, institution: e})}
                    />
                </View>
                <Text style={styles.formInputLabel}>Jabatan</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan Jabatan"
                        placeholderTextColor="#929090"
                        onChangeText={(e) => setFormData({...formData, position: e})}
                    />
                </View>
                <TouchableOpacity
                    onPress = {() => {
                        Dispatch(actionType.AUTH_REGISTER, {
                            formData: formData,
                            setLoading: setLoading
                        }).then((resp) => {
                            resp ? navigation.replace('LoginScreen') : null
                        })
                    }}
                    style={styles.formButton}>
                    {
                        loading ? <ActivityIndicator  size="large" color="#0000ff"/> : <Text style={styles.formButtonLabel}>DAFTAR</Text>
                    }
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default RegisterScreen