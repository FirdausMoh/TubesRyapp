import {
  Heading,
  Image,
  FlatList,
  Box,
  Input,
  HStack,
  Text,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenTop } from "../components";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import FIREBASE from "../config/FIREBASE";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

const Semen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const formatToRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(amount);
  };
  const [filteredProducts, setFilteredProducts] = useState([]);

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
            // Filter products with category "galvalum"
            const SemenProducts = updatedProducts.filter(
              (product) => product.kategoriproduct === "Semen"
            );
            setProducts(SemenProducts);
          });
        }
      });
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Detail Product", { item })}
      >
        <Box
          shadow={5}
          backgroundColor={"#FFFFFF"}
          mx={2}
          my={2}
          borderRadius={5}
          flexDirection={"column"}
          w={190}
          h={180}
        >
          <Box backgroundColor={"gray.200"} py={2}>
            <Image
              source={{ uri: item.gambar }}
              w="full"
              h="100"
              resizeMode="contain"
              alt="ImageData"
            />
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
      </TouchableOpacity>
    );
  };

  // Filter data produk berdasarkan teks pencarian
  const filterData = (text) => {
    const filtered = products.filter((item) =>
      item.namaproduct.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    // Panggil filterData saat nilai searchText berubah
    filterData(searchText);
  }, [searchText]);

  return (
    <>
      <ScreenTop />
      <Box>
        <HStack mx={5} my={3} alignItems="center">
          <Input
            placeholder="Cari produk..."
            placeholderTextColor={"#006664"}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            py={2}
            px={3}
            flex={1}
            borderRadius={10}
            bgColor="white"
          />
          <TouchableOpacity onPress={() => navigation.navigate("Keranjang")}>
            <Box
              px={3}
              py={2}
              borderRadius={10}
              bgColor="white"
              shadow={5}
              marginLeft={3}
            >
              <Ionicons name="cart-sharp" size={20} color="#006664" />
            </Box>
          </TouchableOpacity>
        </HStack>
        <Box backgroundColor={"white"} py={3} mb={3}>
          <Text ml={7} fontWeight={"bold"} color={"#006664"}>
            PRODUK KAMI
          </Text>
        </Box>
      </Box>

      <FlatList
        data={searchText ? filteredProducts : products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
      />
    </>
  );
};
export default Semen;