import IconLogo from '../../images/IconLogo.png';
import {
    Box,
    Image,
    Center,
    Heading,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Input,
    InputField, ButtonText, Button, Spinner, Alert, AlertText, KeyboardAvoidingView
} from "@gluestack-ui/themed";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {Platform} from "react-native";
import {loginUser, resetAuth} from "../../redux/auth/actions";

const LoginScreen = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.auth);
    const {user, loading, error} = selector;
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        dispatch(resetAuth())
    }, [dispatch]);
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{flex: 1, zIndex: 999}}>
            <Box bg="#161D6F" p="$5" alignItems='center' h="100%" justifyContent="center">
                <Center w="90%" mb="$3">
                    <Image size="md" source={IconLogo} alt="IconLogo"/>
                    <Heading size="xl" color="white">MASUK</Heading>
                    <Heading size="sm" color="white">Silahkan masuk menggunakan akun anda</Heading>
                </Center>
                {error && (
                    <Alert minWidth="$80" action="error" variant="solid" mb="$3">
                        <AlertText>{error}</AlertText>
                    </Alert>
                )}
                <FormControl minWidth="$80" isRequired={true} mb="$3">
                    <FormControlLabel mb="$1">
                        <FormControlLabelText color="white">Alamat Email</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField
                            type="text"
                            color="white"
                            value={formData.email}
                            onChangeText={(e) => setFormData({...formData, email: e})}/>
                    </Input>
                </FormControl>
                <FormControl minWidth="$80" isRequired={true} mb="$3">
                    <FormControlLabel mb="$1">
                        <FormControlLabelText color="white">Kata Sandi</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField
                            type="password"
                            color="white"
                            value={formData.password}
                            onChangeText={(e) => setFormData({formData, password: e})}
                        />
                    </Input>
                </FormControl>
                <Button
                    mt="$3"
                    minWidth="$80"
                    variant="solid"
                    bg="$warning400"
                    onPress={() => {
                        dispatch(loginUser({
                            formData: [formData.email, formData.password]
                        }))
                    }}>
                    <ButtonText>{loading ? <Spinner size="small" color="white"/> : 'MASUK'}</ButtonText>
                </Button>
                <Button
                    mt="$3"
                    minWidth="$80"
                    variant="solid"
                    bg="white"
                    onPress={() => navigation.navigate('RegisterScreen')}>
                    <ButtonText color="#161D6F">DAFTAR</ButtonText>
                </Button>
            </Box>
        </KeyboardAvoidingView>
    )
}
export default LoginScreen