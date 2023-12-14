import { Heading, ScrollView, Center, Text, Box, Image, Button, HStack, Divider, VStack } from "native-base";
import { ScreenTop } from "../components";
import { useNavigation } from "@react-navigation/native";


const DetailProduct = ({ route }) => {
    const { image, title, content, Price,deskripsi } = route.params.item;
    const navigation = useNavigation();

return (
    <>
    <ScreenTop shadow={3}/>
    <ScrollView>
    <Box m={5} shadow={3} backgroundColor={"#006664"} borderRadius={30} pb={10}>
    <Center mt={30}>
        <HStack>
        <Box w={400} backgroundColor={"gray.100"} borderRadius={20}> 
        <Image
            source={{ uri: image }}
            width={400}
            height={200}
            alt={title}
            resizeMode="contain"
          />
          </Box>
          
        </HStack>
    </Center>
        <Box>
            <Box mt={3} ml={3} textAlign={"center"}>
            <Heading color={"gray.100"} fontSize={16}> Nama produk : <Text color={"gray.100"}>{content}</Text></Heading>
            <Heading color={"gray.100"}fontSize={16}> Harga : <Text color={"gray.100"}>{Price}</Text></Heading>  
            <Divider  mt={5} backgroundColor={"red.100"} thickness={2} w={400}></Divider>
            </Box>
            <Box ml={3} mt={5}>
            <VStack>
            <Heading  fontSize={20} color={"gray.100"} mb={3} > Deskripsi</Heading>
                <HStack alignItems={'left'} justifyContent={"left"}>
                 <Heading fontSize={16} color={"gray.100" } mr={2}>{deskripsi}</Heading>
                </HStack>
            </VStack>
            </Box>    
        </Box> 
    </Box>
    <Box>
                <Center>
                <Button 
                w={430} borderRadius={10} backgroundColor={'#006664'} 
                onPress={() => navigation.navigate("Keranjang", { item: route.params.item })}>
                    <Text fontSize={"xl"} fontWeight={"bold"} color={"#FFFFFF"}>Tambah Keranjang</Text>
                </Button>
                <Button mt={5} 
                w={430} borderRadius={10} backgroundColor={'#006664'} 
                onPress={() => navigation.navigate("Pembelian", { item: route.params.item })}>
                    <Text fontSize={"xl"} fontWeight={"bold"} color={"#FFFFFF"}>Beli Sekarang</Text>
                </Button>
                </Center>  
            </Box>
       
    </ScrollView>
    </>
  );
 
};

export default DetailProduct;
