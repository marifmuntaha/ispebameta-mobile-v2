import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../layouts/Header";
import UserIconDefault from "../../images/IconUserDefault.png";
import IconPrinter from "../../images/IconPrinter.png";

const ReportScreen = ({navigation}) => {
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
    const reports = [
        {id: 1, name: 'Eka Maftukhatul K., S.Pd.', aspect: 'Rencana Pembelajaran'},
        {id: 2, name: 'Muhammad Arif M., S.Pd.', aspect: 'Rencana Pembelajaran'},
        {id: 3, name: 'Eli Astuti., S.Hum.', aspect: 'Rencana Pembelajaran'}
    ]
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
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: "#161D6F"}}>{report.name}</Text>
                                <Text style={{fontSize: 18, color: "#161D6F"}}>{report.aspect}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={content.boxButton} onPress={() => alert('Laporan Dicetak')}>
                            <Image source={IconPrinter} style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
export default ReportScreen;