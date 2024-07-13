import {Box, Heading, HStack, Icon, Image, MenuIcon} from "@gluestack-ui/themed";
import IconLogo from "../../images/IconLogo.png";

const DashboardScreen = () => {
    return (
        <Box bg="#161D6F" p="$5" h="30%">
            <HStack space="md" justifyContent="space-between" mt="$2">
                <HStack justifyContent="center">
                    <Image w="$8" h="$8" source={IconLogo} alt="IconLogo" mr="$2"/>
                    <Heading size="sm" color="white">Dashboard</Heading>
                </HStack>
                <Icon as={MenuIcon} m="$2" w="$5" h="$5" color="white"/>
            </HStack>
        </Box>
    )
}

export default DashboardScreen;