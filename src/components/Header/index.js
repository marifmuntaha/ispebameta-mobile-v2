import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ArrowLeftIcon from "../../images/icon-arrow-left.png";
import UserIcon from "../../images/UserIconWhite.png";

const Header = ({navigation, backTo, title, subtitle}) => {
    const header = StyleSheet.create({
        container: {
            borderRadius: 20,
            width: "100%",
            height: 200,
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
        navbarTitleIcon: {
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
            fontSize: 20,
            color: "white",
            marginLeft: 20,
            marginRight: 20
        },
    });
    return (
        <View style={header.container}>
            <View style={header.navbar}>
                <View style={header.navbarTitle}>
                    <TouchableOpacity onPress={() => navigation.replace(backTo)}>
                        <Image source={ArrowLeftIcon} style={header.navbarTitleIcon}/>
                    </TouchableOpacity>
                    <Text style={header.navbarTitleText}>{title}</Text>
                </View>
                <View style={header.navbarUser}>
                    <Image source={UserIcon} style={header.navbarUserIcon}/>
                </View>
            </View>
            <View style={header.greeting}>
                <Text style={header.greetingText}>{subtitle}</Text>
            </View>
        </View>
    )
}
export default Header