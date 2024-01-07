import {
  Heading,
  Image,
  Text,
  Box,
  ScrollView,
  View,
  Center,
  VStack,
  HStack,
} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";

const Category = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <Header />
      </View>
      <ScrollView>
        <VStack>
          <Box mt={5}>
            <VStack>
              <Heading ml={15} mb={5}>
                Kategori Barang
              </Heading>
              <HStack justifyContent="space-evenly" my={2} mx={4}>
                <TouchableOpacity onPress={() => navigation.navigate("Semen")}>
                  <Center>
                    <Box
                      shadow={3}
                      backgroundColor={"#006664"}
                      w={Platform.OS === "ios" ? 190 : 160} //buat ios
                      h={Platform.OS === "ios" ? 190 : 160} //buat ios
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/semen.png")}
                          w={Platform.OS === "ios" ? 150 : 120} //buat ios
                          h={Platform.OS === "ios" ? 150 : 120} //buat ios
                          borderTopRadius={5}
                          resizeMode="contain"
                          alt="Logo"
                        />
                        <Text color={"#FFFFFF"} mb={2} fontSize={18}>
                          Semen
                        </Text>
                      </Center>
                    </Box>
                  </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Cat")}>
                  <Center>
                    <Box
                      ml={2}
                      shadow={3}
                      backgroundColor={"#006664"}
                      w={Platform.OS === "ios" ? 190 : 160} //buat ios
                      h={Platform.OS === "ios" ? 190 : 160} //buat ios
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/cat.png")}
                          w={Platform.OS === "ios" ? 150 : 120} //buat ios
                          h={Platform.OS === "ios" ? 150 : 120} //buat ios
                          borderTopRadius={5}
                          resizeMode="contain"
                          alt="Logo"
                        />
                        <Text color={"#FFFFFF"} mb={2} fontSize={18}>
                          Cat
                        </Text>
                      </Center>
                    </Box>
                  </Center>
                </TouchableOpacity>
              </HStack>
              <HStack justifyContent="space-evenly" my={2} mx={4}>
                <TouchableOpacity onPress={() => navigation.navigate("Bata")}>
                  <Center>
                    <Box
                      shadow={3}
                      backgroundColor={"#006664"}
                      w={Platform.OS === "ios" ? 190 : 160} //buat ios
                      h={Platform.OS === "ios" ? 190 : 160} //buat ios
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/bata.png")}
                          w={Platform.OS === "ios" ? 150 : 120} //buat ios
                          h={Platform.OS === "ios" ? 150 : 120} //buat ios
                          borderTopRadius={5}
                          resizeMode="contain"
                          alt="Logo"
                        />

                        <Text color={"#FFFFFF"} mb={2} fontSize={18}>
                          Bata
                        </Text>
                      </Center>
                    </Box>
                  </Center>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Galvalum")}
                >
                  <Center>
                    <Box
                      ml={2}
                      shadow={3}
                      backgroundColor={"#006664"}
                      w={Platform.OS === "ios" ? 190 : 160} //buat ios
                      h={Platform.OS === "ios" ? 190 : 160} //buat ios
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/galvalum.png")}
                          w={Platform.OS === "ios" ? 150 : 120} //buat ios
                          h={Platform.OS === "ios" ? 150 : 120} //buat ios
                          borderTopRadius={5}
                          resizeMode="contain"
                          alt="Logo"
                        />

                        <Text color={"#FFFFFF"} mb={2} fontSize={18}>
                          Galvalum
                        </Text>
                      </Center>
                    </Box>
                  </Center>
                </TouchableOpacity>
              </HStack>
              <HStack justifyContent={"space-between"} ml={Platform.OS === "ios" ? 3 : 4}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Product")}
                >
                  <Center>
                    <Box
                      shadow={3}
                      backgroundColor={"#006664"}
                      w={Platform.OS === "ios" ? 190 : 160} //buat ios
                      h={Platform.OS === "ios" ? 190 : 160} //buat ios
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/other.png")}
                          w={Platform.OS === "ios" ? 150 : 120} //buat ios
                          h={Platform.OS === "ios" ? 150 : 120} //buat ios
                          borderTopRadius={5}
                          resizeMode="contain"
                          alt="Logo"
                        />

                        <Text color={"#FFFFFF"} mb={2} fontSize={18}>
                          Semua
                        </Text>
                      </Center>
                    </Box>
                  </Center>
                </TouchableOpacity>
              </HStack>
            </VStack>
            <HStack>
              <Box py={10}></Box>
            </HStack>
          </Box>
        </VStack>
      </ScrollView>
    </>
  );
};

export default Category;
