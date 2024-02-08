import {StyleSheet, Text, View} from "react-native";
import Header from "../../components/Header";

const ReportScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1
        }
    })
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                backTo="DashboardScreen"
                title="LAPORAN"
                subtitle="Hasil Supervisi bisa dicetak/dikirim."
            />
        </View>
    )
}
export default ReportScreen;