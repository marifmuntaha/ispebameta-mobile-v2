import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LogoIcon from "../../images/LogoIcon.png";
import UserIcon from "../../images/UserIconWhite.png";
import UserMenu from "../../images/userDefault.png";
import PencilMenu from "../../images/PencilDefault.png";
import ReportMenu from "../../images/ReportDefault.png";
import AboutMenu from "../../images/AboutDefault.png";
const DashboardScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFF',
        },
        mainmenu: {
            fontWeight: "bold",
            fontSize: 25,
            color: "#161D6F",
            marginTop: 40,
            marginLeft: 30,
            marginBottom: 20
        }
    })
    const header    = StyleSheet.create({
        container: {
            borderRadius: 20,
            width: "100%",
            height: "35%",
            backgroundColor: '#161D6F',
        },
        navbar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        navbarTitle: {
            flexDirection: 'row',
            marginTop: 45,
            marginLeft: 10
        },
        navbarTitleLogo: {
            width: 40,
            height: 35,
            margin: 5,
            alignSelf: 'center'
        },
        navbarTitleText: {
            fontWeight: "bold",
            fontSize: 25,
            color: "white",
            marginLeft: 20,
            alignSelf: 'center'
        },
        navbarUser: {
            marginTop: 45,
            marginRight: 20,
            alignSelf: 'center'
        },
        navbarUserIcon: {
            width: 30,
            height: 37
        },
        greeting: {
            marginTop: 45,
            marginLeft: 10
        },
        greetingText: {
            fontWeight: "bold",
            fontSize: 25,
            color: "white",
            marginLeft: 20,
        },
    })
    const widget = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: -100,
        },
        box: {
            flexDirection: 'column',
            borderRadius: 30,
            width: 200,
            height: 200,
            backgroundColor: '#FFC14F',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingTop: 30
        },
        boxText: {
            fontWeight: "bold",
            fontSize: 25,
            color: "#161D6F",
        },
        boxButton: {
            width: "80%",
            backgroundColor:"#FFF",
            borderRadius:15,
            height:50,
            alignItems:"center",
            justifyContent:"center",
        },
        boxButtonLabel: {
            fontWeight: 'bold',
            color:"#161D6F",
            fontSize:18
        }
    })
    const mainmenu = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            margin: 10
        },
        boxButton: {
            flexDirection: 'column',
            borderRadius: 30,
            width: 200,
            height: 200,
            backgroundColor: '#E9EAEC',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingTop: 30
        },
        boxButtonImage: {
            width: 90,
            height: 90
        }
    })
    return (
        <View style={styles.container}>
            <View style={header.container}>
                <View style={header.navbar}>
                    <View style={header.navbarTitle}>
                        <Image source={LogoIcon} style={header.navbarTitleLogo}/>
                        <Text style={header.navbarTitleText}>Dashboard</Text>
                    </View>
                    <View style={header.navbarUser}>
                        <Image source={UserIcon} style={header.navbarUserIcon}/>
                    </View>
                </View>
                <View style={header.greeting}>
                    <Text style={header.greetingText}>Selamat Datang</Text>
                    <Text style={header.greetingText}>Ali Ma'sum Efendi, S.Pd.</Text>
                </View>
            </View>
            <View style={widget.container}>
                <View style={widget.box}>
                    <Text style={widget.boxText}>2 GURU</Text>
                    <TouchableOpacity
                        onPress = {() => navigation.replace('LoginScreen')}
                        style={widget.boxButton}>
                        <Text style={widget.boxButtonLabel}>LIHAT</Text>
                    </TouchableOpacity>
                </View>
                <View style={widget.box}>
                    <Text style={widget.boxText}>3 LAPORAN</Text>
                    <TouchableOpacity
                        onPress = {() => navigation.replace('LoginScreen')}
                        style={widget.boxButton}>
                        <Text style={widget.boxButtonLabel}>LIHAT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.mainmenu}>MAINMENU</Text>
            <View style={mainmenu.container}>
                <TouchableOpacity
                    onPress = {() => navigation.replace('TeacherScreen')}
                    style={mainmenu.boxButton}>
                    <Image source={UserMenu} style={mainmenu.boxButtonImage}/>
                    <Text style={widget.boxButtonLabel}>DATA GURU</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.replace('SupervisiScreen')}
                    style={mainmenu.boxButton}>
                    <Image source={PencilMenu} style={mainmenu.boxButtonImage}/>
                    <Text style={widget.boxButtonLabel}>PENILAIAN</Text>
                </TouchableOpacity>
            </View>
            <View style={mainmenu.container}>
                <TouchableOpacity
                    onPress = {() => navigation.replace('ReportScreen')}
                    style={mainmenu.boxButton}>
                    <Image source={ReportMenu} style={{
                        height: 90,
                        width: 66
                    }}/>
                    <Text style={widget.boxButtonLabel}>LAPORAN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.replace('LoginScreen')}
                    style={mainmenu.boxButton}>
                    <Image source={AboutMenu} style={{
                        width: 58,
                        height: 90
                    }}/>
                    <Text style={widget.boxButtonLabel}>TENTANG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default DashboardScreen;