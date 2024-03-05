import {Alert} from "react-native";
import SecureStore from "expo-secure-store";
import {useNavigation} from "@react-navigation/native";

const handleError = (error) => {
    const navigation = useNavigation();
    if (error.response) {
        const response = error.response;
        if (response.status === 403) {
            Alert.alert('Kesalahan', 'Anda tidak mempunyai akses pada halaman ini.');
        } else if (response.status === 401) {
            Alert.alert('Kesalahan', 'Sesi anda telah berakhir, silahkan masuk kembali.');
            SecureStore.deleteItemAsync('token').then();
            setTimeout(() => {
                navigation.navigate('LoginScreen');
            }, 2000);
        } else {
            Alert.alert('Kesalahan', response.data.message);
        }
    } else {
        Alert.alert('Kesalahan', error.message);
    }
}
export default handleError;