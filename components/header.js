import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading,Button, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const Header = ({ title, withBack = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={trueGray900} />
      <Box bg={"white"} p={"4"} shadow={3}>
      <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            <Image
              source={require("../assets/JAAA.png")}
              w="100px"
              h="40px"
              alt="Logo"
              resizeMode="cover"
            />
            <Heading color={"red.500"} marginLeft={180}>
              {title}
            </Heading>
          </HStack>
          <Button
            mt="2"
            onPress={() => navigation.navigate("Login")}
            backgroundColor={"red.600"}
          >
            <Text color={"white"}>Login</Text>
          </Button>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;