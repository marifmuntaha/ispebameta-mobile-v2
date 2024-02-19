import {createContext, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";

export const UserContext = createContext({});
export const UserProvider = () => {
    const [user, setUser] = useState({});
    return <UserContext.Provider value={{user, setUser}}>
        <NavigationContainer children=""/>
    </UserContext.Provider>
}