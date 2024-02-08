import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import UserIconDefault from "../../images/userDefault.png";
import IconTrash from "../../images/IconTrash.png";
import Header from "../../components/Header";

const TeacherScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        formButton: {
            width: "90%",
            backgroundColor:"#FFC14F",
            borderRadius:30,
            height:60,
            alignSelf: "center",
            alignItems:"center",
            justifyContent:"center",
            marginTop: 20
        },
        formButtonLabel: {
            fontWeight: 'bold',
            color:"white",
            fontSize:18
        }
    });
    const content = StyleSheet.create({
        container: {
            padding: 20
        },
        box: {
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 30,
            width: "100%",
            height: 70,
            backgroundColor: '#E9EAEC',
            marginBottom: 20
        },
        boxContent: {
            flexDirection: "row"
        },
        boxImage: {
            width: 70,
            height: 70,
            borderRadius: 70,
            borderColor: "#161D6F",
            borderWidth: 3,
            alignItems: 'center',
            justifyContent: 'center'
        },
        boxText: {
            marginLeft: 10,
            alignItems: 'flex-start',
            justifyContent: 'center'
        },
        boxButton: {
            width: 70,
            height: 70,
            borderRadius: 70,
            borderColor: "#BC0808",
            borderWidth: 3,
            alignSelf: "flex-end",
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    const teachers = [
        {
            id: 1,
            name: 'Muhammad Arif M., S.Pd.',
            subject: 'Sejarah'
        },
        {
            id: 2,
            name: 'Eka Maftukhatul K., S.Pd.',
            subject: 'Geografi'
        },
        {
            id: 3,
            name: 'Eli Astuti, S.Hum.',
            subject: 'Bahasa Indonesia'
        }
    ];
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                backTo="DashboardScreen"
                title="DATA GURU"
                subtitle="Anda dapat menambah, mengubah & menghapus data guru"
            />
            <TouchableOpacity
                onPress = {() => navigation.replace('TeacherAddScreen')}
                style={styles.formButton}>
                <Text style={styles.formButtonLabel}>TAMBAH GURU</Text>
            </TouchableOpacity>
            <ScrollView style={content.container}>
                {teachers && teachers.map((teacher) => (
                    <View style={content.box} key={teacher.id}>
                        <View style={content.boxContent}>
                            <View style={content.boxImage}>
                                <Image source={UserIconDefault} style={{width: 40, height: 40}}/>
                            </View>
                            <View style={content.boxText}>
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: "#161D6F"}}>{teacher.name}</Text>
                                <Text style={{fontSize: 18, color: "#161D6F"}}>{teacher.subject}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={content.boxButton}>
                            <Image source={IconTrash} style={{width: 25, height: 30}}/>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
export default TeacherScreen;