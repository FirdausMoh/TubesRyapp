import { Heading, Image, Text, FlatList, Box } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import data from "../data";

const Product = () => {
  const navigation = useNavigation();
  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Detail Product", { item: item })}
      >
        <Box
          p={"4"}
          borderBottomColor={"coolGray.300"}
        borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={2} mr={"4"}>
            <Image source={{ uri: item.image }} w="100" h="100"alt="Image Data"/>
          </Box>

          <Box flex={4}>
          <Heading lineHeight={"3xl"} fontSize={"sm"}>
             Nama Produk : {item.title}
          </Heading>
          <Heading lineHeight={"3xl"} fontSize={"sm"}color={"gray.500"}>
             Jumlah  Beli : {item.jumlah}
          </Heading>
            <Heading lineHeight={"3xl"} fontSize={"sm"}color={"gray.500"}> Harga : {item.Price}</Heading>
          </Box>
        </Box>

      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={"RYAPP"} />
      <Text fontSize={24} fontWeight="semibold" marginBottom={5} marginLeft={2}>Catatan Pembelian</Text>
      
      <FlatList
        data={data}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Product;

