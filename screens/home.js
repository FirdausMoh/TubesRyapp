import {
  Heading,
  Image,
  FlatList,
  Box,
  VStack,
  HStack,
  Text,
  Center,
  ScrollView,
  Link,
  View,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [randomProducts, setRandomProducts] = useState([]);
  const formatToRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(amount);
  };

  useEffect(() => {
    const db = getDatabase();
    const productRef = ref(db, "Product");

    const fetchData = () => {
      onValue(productRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const productList = Object.keys(data).map(async (key) => {
            const product = {
              id: key,
              ...data[key],
            };
            const storage = getStorage();
            const imageRef = storageRef(
              storage,
              `images/${product.gambar}.jpg`
            );
            const imageUrl = await getDownloadURL(imageRef);
            return { ...product, gambar: imageUrl };
          });

          Promise.all(productList).then((updatedProducts) => {
            // Ambil 8 produk secara acak
            const randomProducts = getRandomProducts(updatedProducts, 8);
            setRandomProducts(randomProducts);
          });
        }
      });
    };

    // Fungsi untuk mendapatkan 6 produk secara acak
    const getRandomProducts = (products, count) => {
      const shuffled = products.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    fetchData();
  }, []);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Detail Product", { item: item })}
      >
        <Box>
          <Box
            shadow={5}
            backgroundColor={"#FFFFFF"}
            mx={Platform.OS === "ios" ? 2 : 3} //buat ios
            my={2}
            borderRadius={5}
            flexDirection={"column"}
            w={Platform.OS === "ios" ? 185 : 155} //buat ios
            h={180}
          >
            <Box backgroundColor={"gray.200"} py={2}>
              <Center>
                <Image
                  source={{ uri: item.gambar }}
                  w="100"
                  h="100"
                  resizeMode="contain"
                  alt="Image Data"
                />
              </Center>
            </Box>
            <Box p={2}>
              <Text fontSize={"12"} fontWeight={"semibold"} color={"black"}>
                {item.namaproduct}
              </Text>
              <Heading mt={2} fontSize={"sm"} color={"#006664"}>
                Rp {formatToRupiah(item.harga)}
              </Heading>
            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <View flex={1}>
      <Header />
      <ScrollView>
        <VStack>
          <Box mx={3} mt={5}>
            <Image
              source={require("../assets/Suburjaya.png")}
              alt="banner"
              w="full"
              h={Platform.OS === "ios" ? "220" : "190"} // Tambahkan buat ios
              borderRadius={25}
            />
          </Box>
          <Box>
            <VStack>
              <HStack justifyContent={"space-between"} mx={2}>
                <Heading
                  marginLeft={3}
                  my={5}
                  fontSize={18}
                  fontWeight={"bold"}
                >
                  Kategori Produk
                </Heading>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("Product")}
                >
                  <Text
                    color={"#006664"}
                    marginLeft={3}
                    my={5}
                    fontSize={14}
                    fontWeight={"bold"}
                  >
                    Lihat Semua
                  </Text>
                </TouchableOpacity>
              </HStack>

              <VStack>
                <Center>
                  <ScrollView
                    horizontal
                    mx={2}
                    showsHorizontalScrollIndicator={false}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Bata")}
                      mx
                    >
                      <Box
                        backgroundColor={"#006664"}
                        px={2}
                        pt={2}
                        borderRadius={15}
                        mx={2}
                        w={"90%"}
                      >
                        <Image
                          source={require("../assets/bata.png")}
                          w="80px"
                          h="70px"
                          alt="Logo"
                          resizeMode="contain"
                          borderRadius={10}
                        />
                        <Center mb={1}>
                          <Text color={"trueGray.100"} fontSize={14}>
                            Bata
                          </Text>
                        </Center>
                      </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Semen")}
                    >
                      <Box
                        backgroundColor={"#006664"}
                        px={2}
                        pt={2}
                        borderRadius={15}
                        mx={2}
                        w={"90%"}
                      >
                        <Image
                          source={require("../assets/semen.png")}
                          w="80px"
                          h="70px"
                          alt="Logo"
                          resizeMode="contain"
                          borderRadius={10}
                        />
                        <Center mb={1}>
                          <Text color={"trueGray.100"} fontSize={14}>
                            Semen
                          </Text>
                        </Center>
                      </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Cat")}
                    >
                      <Box
                        backgroundColor={"#006664"}
                        px={2}
                        pt={2}
                        borderRadius={15}
                        mx={2}
                        w={"90%"}
                      >
                        <Image
                          source={require("../assets/cat.png")}
                          w="80px"
                          h="70px"
                          alt="Logo"
                          resizeMode="contain"
                          borderRadius={10}
                        />
                        <Center mb={1}>
                          <Text color={"trueGray.100"} fontSize={14}>
                            Cat
                          </Text>
                        </Center>
                      </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Galvalum")}
                    >
                      <Box
                        backgroundColor={"#006664"}
                        px={2}
                        pt={2}
                        borderRadius={15}
                        mx={2}
                        w={"90%"}
                      >
                        <Image
                          source={require("../assets/galvalum.png")}
                          w="80px"
                          h="70px"
                          alt="Logo"
                          resizeMode="contain"
                          borderRadius={10}
                        />
                        <Center mb={1}>
                          <Text color={"trueGray.100"} fontSize={14}>
                            Galvalum
                          </Text>
                        </Center>
                      </Box>
                    </TouchableOpacity>
                  </ScrollView>
                </Center>
              </VStack>
            </VStack>
          </Box>
        </VStack>
        <Box backgroundColor={"gray.100"} my={5}>
          <Text
            marginLeft={3}
            my={3}
            fontSize={20}
            fontWeight={"bold"}
            color={"#006664"}
          >
            Rekomendasi
          </Text>
        </Box>
        <Center>
          <FlatList
            data={randomProducts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-Between" }}
          />
        </Center>
        <Box backgroundColor={"#006664"} mt={30} h={80}>
          <Heading m={5} fontSize={20} color={"trueGray.100"}>
            Kontak Kami
          </Heading>
          <HStack
            mb={5}
            backgroundColor={"white"}
            mx={5}
            borderRadius={30}
            shadow={2}
          >
            <Image
              source={require("../assets/JAAA.png")}
              w={Platform.OS === "ios" ? "140" : "105"} // Tambahkan buat ios
              h="140"
              alt="Logo"
              borderRadius={100}
              resizeMode="contain"
              my={5}
            />
            <VStack mt={8}>
              <HStack ml={2}>
                <Ionicons name="logo-instagram" size={30} color="black" />
                <Link
                  ml={5}
                  href="https://www.instagram.com/hanifbahyhasyid/?hl=en"
                  isUnderlined
                  _text={{ fontSize: "md" }}
                >
                  @suburjaya
                </Link>
              </HStack>
              <HStack ml={2} mt={2}>
                <Ionicons name="logo-whatsapp" size={30} color="black" />
                <Link
                  ml={5}
                  href="whatsapp://send?text=Saya Customer Ryapp &phone=+6282229850927"
                  isUnderlined
                  _text={{ fontSize: "md" }}
                >
                  08003337221
                </Link>
              </HStack>
              <HStack ml={2} mt={2}>
                <Ionicons name="mail-outline" size={30} color="black" />
                <Link
                  ml={5}
                  href="mailto:mohamadfahri302@gmail.com"
                  isUnderlined
                  _text={{ fontSize: "md" }}
                >
                  suburjaya@gmail.com
                </Link>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;