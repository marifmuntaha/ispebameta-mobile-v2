import {Alert} from "react-native";
import SecureStore from "expo-secure-store";
import {useNavigation} from "@react-navigation/native";
import Toast from "react-native-root-toast";

const handleError = (error) => {
    const navigation = useNavigation();
    if (error.response) {
        const response = error.response;
        if (response.status === 403) {
            Toast.show('Anda tidak mempunyai akses pada halaman ini.', {duration: 1000});
        } else if (response.status === 401) {
            Toast.show('Sesi anda telah berakhir, silahkan masuk kembali.', {duration: 1000})
            SecureStore.deleteItemAsync('token').then();
            setTimeout(() => {
                navigation.navigate('LoginScreen');
            }, 2000);
        } else {
            Toast.show(response.data.message, {duration: 2000});
        }
    } else {
        Toast.show(error.message, {duration: 2000});
    }
}
export default handleError;