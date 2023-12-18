import { Heading, Image, FlatList, Box, Input, HStack, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenTop } from "../components";
import data from "../dataSemen";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Semen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Detail Product", { item: item })}
      >
        <Box
          shadow={5}
          backgroundColor={'#FFFFFF'}
          mx={2}
          my={2}
          borderRadius={5}
          flexDirection={"column"}
          w={190}
          h={180}
        >
          <Box backgroundColor={"gray.200"}py={2}>
            <Image source={{ uri: item.image }} w="full" h="100" resizeMode="contain" alt="Image Data"/>
          </Box>
          <Box
          p={2}>
          <Text fontSize={"12"} fontWeight={'semibold'} color={'black'} >
              {item.title}
            </Text>
            <Heading mt={2} fontSize={"sm"}color={'#006664'} > 
            {item.Price}
            </Heading>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };
  const filteredData = data.filter((item) =>
  item.title.toLowerCase().includes(searchText.toLowerCase())
);
return (
  <>
    <ScreenTop />
    <Box>
      <HStack mx={2} my={3} alignItems="left">
        <Input
          placeholder="Cari produk..."
          placeholderTextColor={'#006664'}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          py={4}
          px={4}
          w={"full"}
          flex={1}
          borderRadius={10}
          bgColor="white"
        />
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Box
            px={3}
            py={2}
            borderRadius={10}
            bgColor="white"
            shadow={5}
            marginLeft={3}
          >
            <Ionicons name="cart-outline" size={24} color="#006664" />
          </Box>
        </TouchableOpacity> */}
      </HStack>
      <Box backgroundColor={"white"} py={3} mb={3}>
        <Text ml={7} fontWeight={"bold"} color={'#006664'}>
          PRODUK KAMI
        </Text>
      </Box>
    </Box>

    <FlatList
      data={filteredData}
      renderItem={renderitem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-evenly' }}
    />
  </>
);
};

export default Semen;