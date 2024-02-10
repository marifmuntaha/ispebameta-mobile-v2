import {Dimensions} from "react-native";

const Dimension = {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height,
    screenWidth: Dimensions.get('screen').width,
    screenHeight: Dimensions.get('screen').height,
}
export default Dimension;