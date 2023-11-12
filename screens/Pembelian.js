import { Box, Heading, ScrollView,Image, Center, HStack, Text, VStack, FormControl, Input, Divider, Button} from "native-base";
import { useNavigation } from "@react-navigation/native";
import HeaderCategory from "../components/HeaderCategory";

const Pembelian = ({ route }) => {
 const { image, title, content, Price, category } = route.params.item;
 const navigation = useNavigation();

return (
        <ScrollView>
          <HeaderCategory/>
          <Heading mt={5}> Pembelian </Heading>
          <Box mt={3} >
          <HStack shadow={3} w={"full"} py={2} px={5} backgroundColor={"white"} >
          <Box >
            <Image
            source={{ uri: image }}
            w={"100"}
            h={"150"}
            alt="title"
            resizeMode="contain"
            mr={5}
            />
          </Box>
          <Center>
          <Box>
          <Heading fontSize={"sm"} mt={2} > Kategori Barang : {category}</Heading> 
          <Heading fontSize={"sm"} mt={2} > Nama Barang : {title}</Heading>
          <Heading fontSize={"sm"} mt={2}> Deskripsi : {content}</Heading>
          <Heading fontSize={'sm'} mt={2} > Harga Barang : {Price}</Heading> 
          </Box>
          </Center>
          </HStack>
          </Box>

          <Box mt={3} >
          <HStack shadow={3} w={"full"} py={5} px={5} backgroundColor={"white"} >
          <Center>
          <Box>
          <FormControl>
            <VStack >
            <Heading fontSize={'sm'}>Jumlah Pesanan : </Heading>
            <Input borderColor={"black"}w={'430px'} h={'35px'} />
            </VStack>
            <VStack mt={3}>
            <Heading fontSize={'sm'}>Alamat Pengiriman : </Heading>
            <Input borderColor={"black"}w={'430px'} h={'35px'} />
            </VStack>
            <VStack mt={3}>
            <Heading fontSize={'sm'}>Nama Pembeli : </Heading>
            <Input borderColor={"black"}w={'430px'} h={'35px'} />
            </VStack>
          </FormControl>
          </Box>
          </Center>
          </HStack>
          </Box>

          <Box mt={3} >
          <HStack shadow={3} w={"full"} py={2} px={5} backgroundColor={"white"} >
          <Center>
          <Box>
            <HStack>
            <Heading color={"black"} fontSize={'md'} mt={2} > 
          Total Harga : Rp 200.000
          </Heading>
          <Box ml={'80px'}>
          <Button 
              w={150}  borderRadius={10} backgroundColor={'red.600'} 
              onPress={() => navigation.navigate("TransaksiBerhasil")}>
                <Text fontSize={"sm"} color={"white"} >Bayar Sekarang</Text>
            </Button>
          </Box>
            </HStack>
          
          </Box>
          </Center>
          </HStack>
          </Box>

          <Box mt={3} >
          <HStack shadow={3} w={"full"} py={2} px={5} backgroundColor={"white"} >
          <Center>
          <Box>
            
          </Box>
          </Center>
          </HStack>
          </Box>
          
          
        </ScrollView>
    );

};

export default Pembelian;