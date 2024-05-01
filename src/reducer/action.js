import axios from "axios";
import handleError from "../utils/handleError";
import {Alert} from "react-native";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-root-toast";
export const AuthLogin = async (url, state) => {
    state.setLoading && state.setLoading(true);
    return await axios.post(url, state.formData).then(resp => {
        SecureStore.setItem('token', resp.data.result.token);
        state.setLoading && state.setLoading(false);
        return resp.data.result;
    });
}
export const AuthInfo = async (url, state) => {
    return await axios.get(url).then(resp => {
        state.setData(resp.data.result);
        state.setAuth(true);
        return resp.data.result;
    }).catch(error => {
        state.setAuth(false);
        // handleError(error);
    })
}

export const getData = async (url, state, params) => {
    return await axios.get(url, {
        params: params
    }).then(resp => {
        state.setData && state.setData(resp.data.result);
        return resp.data.result;
    }).catch(error => handleError(error));
}
export const storeData = async (url, state) => {
    state.setLoading && state.setLoading(true);
    return await axios.post(url, state.formData).then(resp => {
        Toast.show(resp.data.message, {duration: 2000});
        state.setLoading && state.setLoading(false);
        return resp.data.result
    });
}
export const updateData = async (url, state) => {
    state.setLoading && state.setLoading(true);
    return await axios.put(url, state.formData).then(resp => {
        Alert.alert('Sukses', resp.data.message);
        state.setLoading && state.setLoading(false);
        state.toggle && state.toggle();
        state.setReload && state.setReload(true);
        return resp.data.result;
    }).catch(error => {
        handleError(error);
        state.setLoading && state.setLoading(false);
    })
}
export const deleteData =  async (url, state) => {
    state.setLoading && state.setLoading(state.id);
    return await axios.delete(url).then(resp => {
        state.setLoading && state.setLoading(0);
        state.setReload && state.setReload(true);
        return resp.data.result;
    }).catch(error => {
        handleError(error);
        state.setLoading && state.setLoading(0);

    })
}