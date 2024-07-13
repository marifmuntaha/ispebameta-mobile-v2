import IconLogo from '../../images/IconLogo.png';
import {
    ActivityIndicator,
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput, ToastAndroid,
    TouchableOpacity,
    View
} from "react-native";
import {useEffect, useState} from "react";
import {
    Alert,
    AlertText,
    Box, Button, ButtonText,
    Center,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Heading, Input, InputField, Spinner, KeyboardAvoidingView, ScrollView
} from "@gluestack-ui/themed";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {resetAuth, signupUser} from "../../redux/auth/actions";

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.auth);
    const {success, loading, error} = selector;
    const navigation = useNavigation();
    const handleSubmit = () => {
        dispatch(signupUser(formData.name,
            formData.email,
            formData.password,
            formData.password_confirmation,
            formData.nip,
            formData.institution,
            formData.position))
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        nip: '',
        institution: '',
        position: '',

    });
    useEffect(() => {
        success && setFormData({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            nip: '',
            institution: '',
            position: '',
        });
        dispatch(resetAuth());
    }, [success]);
    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : "height"}
            style={{flex: 1, zIndex: 999}}
        >
            <ScrollView>
                <Box bg="#161D6F" p="$5" alignItems='center' h="100%" justifyContent="center">
                    <Center w="90%" mb="$3">
                        <Image size="md" source={IconLogo} alt="IconLogo"/>
                        <Heading size="xl" color="white">PENDAFTARAN</Heading>
                        <Heading size="sm" color="white">Silahkan melakukan pendaftaran untuk memulai menggunakan
                            ISPEBAMETA</Heading>
                    </Center>
                    {success && (
                        <Alert minWidth="$80" action="success" variant="solid" mb="$3">
                            <AlertText>{success}</AlertText>
                        </Alert>
                    )}
                    {error && (
                        <Alert minWidth="$80" action="error" variant="solid" mb="$3">
                            <AlertText>{error}</AlertText>
                        </Alert>
                    )}
                    <FormControl minWidth="$80" isRequired={true} mb="$3">
                        <FormControlLabel mb="$1">
                            <FormControlLabelText color="white">Nama Lengkap</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="text"
                                color="white"
                                value={formData.name}
                                onChangeText={(e) => setFormData({...formData, name: e})}
                            />
                        </Input>
                    </FormControl>
                    <FormControl minWidth="$80" isRequired={true} mb="$3">
                        <FormControlLabel mb="$1">
                            <FormControlLabelText color="white">Alamat Email</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="text"
                                color="white"
                                value={formData.email}
                                onChangeText={(e) => setFormData({...formData, email: e})}
                            />
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
                                onChangeText={(e) => setFormData({...formData, password: e})}
                            />
                        </Input>
                    </FormControl>
                    <FormControl minWidth="$80" isRequired={true} mb="$3">
                        <FormControlLabel mb="$1">
                            <FormControlLabelText color="white">Ulangi Sandi</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="password"
                                color="white"
                                value={formData.password_confirmation}
                                onChangeText={(e) => setFormData({...formData, password_confirmation: e})}
                            />
                        </Input>
                    </FormControl>
                    <FormControl minWidth="$80" isRequired={true} mb="$3">
                        <FormControlLabel mb="$1">
                            <FormControlLabelText color="white">NIP</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="text"
                                color="white"
                                value={formData.nip}
                                onChangeText={(e) => setFormData({...formData, nip: e})}
                            />
                        </Input>
                    </FormControl>
                    <FormControl minWidth="$80" isRequired={true} mb="$3">
                        <FormControlLabel mb="$1">
                            <FormControlLabelText color="white">Nama Lembaga</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="text"
                                color="white"
                                value={formData.institution}
                                onChangeText={(e) => setFormData({...formData, institution: e})}
                            />
                        </Input>
                    </FormControl>
                    <FormControl minWidth="$80" isRequired={true} mb="$3">
                        <FormControlLabel mb="$1">
                            <FormControlLabelText color="white">Jabatan</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="text"
                                color="white"
                                value={formData.position}
                                onChangeText={(e) => setFormData({...formData, position: e})}
                            />
                        </Input>
                    </FormControl>
                    <Button
                        mt="$3"
                        minWidth="$80"
                        variant="solid"
                        bg="$warning400"
                        onPress={handleSubmit}
                    >
                        <ButtonText>{loading ? <Spinner size="small" color="white"/> : 'DAFTAR'}</ButtonText>
                    </Button>
                    <Button
                        mt="$3"
                        minWidth="$80"
                        variant="solid"
                        bg="white"
                        isDisabled={false} isFocusVisible={false} onPress={() => navigation.navigate('LoginScreen')}>
                        <ButtonText color="#161D6F">MASUK</ButtonText>
                    </Button>
                </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default RegisterScreen