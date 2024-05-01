import Route from "./src/route";
import './src/utils/axiosConfig';
import {actionType, Dispatch} from "./src/reducer";
import {useEffect, useState} from "react";
import {RootSiblingParent} from "react-native-root-siblings";
export default function App() {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loading && Dispatch(actionType.AUTH_INFO, {
            setData: setUser,
            setAuth: setAuth
        }).then(() => setLoading(false));
    },[]);
    return (
        <RootSiblingParent>
            {!loading && <Route auth={auth} user={user} />}
        </RootSiblingParent>
    )
}
