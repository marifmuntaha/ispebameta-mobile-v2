import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Header from "../../layouts/Header";
const Add = ({navigation}) => {
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
            width:"80%",
            marginTop: 30
        },
        formInputLabel: {
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: "bold",
            color:"#161D6F",
            marginBottom: 5,
        },
        formInput: {
            backgroundColor:"#F5F6F9",
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
                        />
                    </View>
                    <Text style={content.formInputLabel}>NIP/NPK</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholder="Masukkan NIP/NPK"
                            placeholderTextColor="#929090"
                        />
                    </View>
                    <Text style={content.formInputLabel}>Mata Pelajaran</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholder="Masukkan Mata Pelajaran"
                            placeholderTextColor="#929090"
                        />
                    </View>
                    <Text style={content.formInputLabel}>Nomor Whatsapp</Text>
                    <View style={content.formInput}>
                        <TextInput
                            style={content.formInputPlaceholder}
                            placeholder="Masukkan Nomor Whatsapp"
                            placeholderTextColor="#929090"
                        />
                    </View>
                    <TouchableOpacity
                        onPress = {() => navigation.replace('TeacherScreen')}
                        style={content.formButton}>
                        <Text style={content.formButtonLabel}>SIMPAN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default Add;