import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../components/Header";
import UserIconDefault from "../../images/userDefault.png";
import IconTrash from "../../images/IconTrash.png";
import ArrowRight from "../../images/icon-arrow-right.png";
import React from "react";

const SupervisiScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1
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
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 20,
            borderColor: "#F1F107",
            borderWidth: 3,
            alignSelf: "center",
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
    const aspects = [
        {
            id: 1,
            name: 'Rencana Pembelajaran'
        },
        {
            id: 2,
            name: 'Pelaksanaan Pembelajaran'
        },
        {
            id: 3,
            name: 'Evaluasi Pembelajaran'
        }
    ]
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                backTo="DashboardScreen"
                title="SUPERVISI"
                subtitle="Silahkan melakukan penilaian Guru"
            />
            <ScrollView style={content.container}>
                {teachers && teachers.map((teacher) => (
                    <View key={teacher.id}>
                        {aspects && aspects.map((aspect) => (
                            <View style={content.box} key={aspect.id}>
                                <View style={content.boxContent}>
                                    <View style={content.boxImage}>
                                        <Image source={UserIconDefault} style={{width: 40, height: 40}}/>
                                    </View>
                                    <View style={content.boxText}>
                                        <Text style={{fontWeight: 'bold', fontSize: 20, color: "#161D6F"}}>{teacher.name}</Text>
                                        <Text style={{fontSize: 18, color: "#161D6F"}}>{aspect.name}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={content.boxButton} onPress={() => navigation.replace('EvaluationScreen')}>
                                    <Image source={ArrowRight} style={{width: 20, height: 2}}/>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
export default SupervisiScreen;