import axios from "axios";
import * as SecureStore from "expo-secure-store";
axios.defaults.baseURL = `${process.env.EXPO_PUBLIC_API_URL}`;
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + SecureStore.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';