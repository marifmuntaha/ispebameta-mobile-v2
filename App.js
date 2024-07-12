import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import {GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"
import {NavigationContainer} from "@react-navigation/native";
import AllRoutes from "./src/route/Routes";

export default function App() {
    return (
        <Provider store={store}>
            <GluestackUIProvider config={config}>
            <NavigationContainer>
                <AllRoutes/>
            </NavigationContainer>
            </GluestackUIProvider>
        </Provider>
    )
}
