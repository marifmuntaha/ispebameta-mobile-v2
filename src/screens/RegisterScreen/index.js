import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import IconLogo from '../../images/IconLogo.png';
const RegisterScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#161D6F',
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerBlock: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        headerLogo: {
            marginBottom: 10
        },
        headerTitle: {
            fontWeight: "bold",
            fontSize:30,
            color:"#fff",
        },
        headerSubtitle: {
            textAlign: 'center',
            fontSize:20,
            color:"#fff",
            marginBottom: 40,
        },
        formBlock: {
            width:"80%",
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
        },
        formButtonLabel: {
            fontWeight: 'bold',
            color:"white",
            fontSize:18
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.headerBlock}>
                <Image source={IconLogo} style={styles.headerLogo}/>
                <Text style={styles.headerTitle}>PENDAFTARAN</Text>
                <Text style={styles.headerSubtitle}>Silahkan melakukan pendaftaran untuk memulai menggunakan ISPEBAMETA</Text>
            </View>
            <View style={styles.formBlock}>
                <Text style={styles.formInputLabel}>Alamat Email</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan Alamat Email"
                        placeholderTextColor="#929090"
                    />
                </View>
                <Text style={styles.formInputLabel}>Kata Sandi</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan Kata Sandi"
                        placeholderTextColor="#929090"
                    />
                </View>
                <Text style={styles.formInputLabel}>Ulangi Sandi</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Ulangi Kata Sandi"
                        placeholderTextColor="#929090"
                    />
                </View>
                <Text style={styles.formInputLabel}>Nama Lengkap</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan Nama Lengkap"
                        placeholderTextColor="#929090"
                    />
                </View>
                <Text style={styles.formInputLabel}>Nomor Whatsapp</Text>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.formInputPlaceholder}
                        placeholder="Masukkan Nomor Whatsapp"
                        placeholderTextColor="#929090"
                    />
                </View>
                <TouchableOpacity
                    onPress = {() => navigation.replace('LoginScreen')}
                    style={styles.formButton}>
                    <Text style={styles.formButtonLabel}>DAFTAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default RegisterScreen