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
                      w={190}
                      h={185}
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/semen.png")}
                          w="150"
                          h="150"
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
                      w={190}
                      h={185}
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/cat.png")}
                          w="150"
                          h="150"
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
                      w={190}
                      h={185}
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/bata.png")}
                          w="150"
                          h="150"
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
                      w={190}
                      h={185}
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/galvalum.png")}
                          w="150"
                          h="150"
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
              <HStack
                justifyContent="space-between"
                style={{
                  ...Platform.select({
                    ios: {
                      marginVertical: 10, // Atur margin pada platform iOS
                      marginHorizontal: 15,
                    },
                    android: {
                      marginVertical: 10, // Atur margin pada platform Android
                      marginHorizontal: 30,
                    },
                  }),
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Product")}
                >
                  <Center>
                    <Box
                      shadow={3}
                      backgroundColor={"#006664"}
                      w={190}
                      h={185}
                      borderRadius={20}
                    >
                      <Center>
                        <Image
                          source={require("../assets/other.png")}
                          w="150"
                          h="150"
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
