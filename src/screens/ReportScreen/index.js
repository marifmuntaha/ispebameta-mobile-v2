import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../layouts/Header";
import UserIconDefault from "../../images/IconUserDefault.png";
import IconPrinter from "../../images/IconPrinter.png";
import {useContext, useEffect, useState} from "react";
import {actionType, Dispatch} from "../../reducer";
import {UserContext} from "../UserScreen/UserContext";
import * as WebBrowser from 'expo-web-browser';

const ReportScreen = ({navigation}) => {
    const user = useContext(UserContext);
    const [reports, setReports] = useState([]);
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
            borderColor: "#07F136",
            borderWidth: 3,
            alignSelf: "center",
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    const [evaluation, setEvaluation] = useState({});
    useEffect(() => {
        Dispatch(actionType.EVALUATION_GET, {setData: setReports}, {
            user: user.id,
            withTeacher: true,
            withAspect: true,
        }).then(resp => console.log(resp));
    }, []);
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                backTo="DashboardScreen"
                title="LAPORAN"
                subtitle="Hasil Supervisi bisa dicetak/dikirim."
            />
            <ScrollView style={content.container}>
                {reports && reports.map((report) => (
                    <View style={content.box} key={report.id}>
                        <View style={content.boxContent}>
                            <View style={content.boxImage}>
                                <Image source={UserIconDefault} style={{width: 40, height: 40}}/>
                            </View>
                            <View style={content.boxText}>
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: "#161D6F"}}>{report.teacher.name}</Text>
                                <Text style={{fontSize: 18, color: "#161D6F"}}>{report.aspect.name}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={content.boxButton} onPress={() => {
                            setEvaluation({
                                id: report.id,
                                user: report.user,
                                teacher: report.teacher.id,
                                aspect: report.aspect.id,
                                finish: 0,
                                result: report.result,
                                feedback: report.feedback,
                            });
                            Dispatch(actionType.EVALUATION_PRINT, {formData: evaluation}).then(resp => {
                                WebBrowser.openBrowserAsync(resp).then()
                            });
                        }}>
                            <Image source={IconPrinter} style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
export default ReportScreen;