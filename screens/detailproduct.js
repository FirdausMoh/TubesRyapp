import { Heading, ScrollView, Center, Text, Box, Image, Button, HStack, Divider, VStack } from "native-base";
import { ScreenTop } from "../components";
import { useNavigation } from "@react-navigation/native";


const DetailProduct = ({ route }) => {
    const { image, title, content, Price,deskripsi } = route.params.item;
    const navigation = useNavigation();
    

return (
    <>
    <ScreenTop shadow={3}/>
    <ScrollView >
    <Box backgroundColor={"white"} pb={20} mt={2} >
        <VStack>
        <Box mx={5} my={5}borderRadius={20}> 
        <Image
            source={{ uri: image }}
            alt={title}
            resizeMode='cover'
            w={'full'}
            h={400}
            borderRadius={20}
          />
        </Box>
        <HStack mx={5} justifyContent={"space-between"} >
            <Box  flex={1}>
            <Heading fontSize={20} color={"gray.800"} >{content}</Heading>
            <Heading fontSize={20} color={"gray.800"}>{Price}</Heading>
            </Box>
            
            <Box>
                <Button 
                borderRadius={10} backgroundColor={'#006664'} w={40} h={'50px'}
                onPress={() => navigation.navigate("Keranjang", { item: route.params.item })}>
                    <Text fontSize={"sm"} fontWeight={"bold"} color={"#FFFFFF"}>Beli Sekarang</Text>
                </Button>
            </Box>
        </HStack> 
        
        </VStack>
        <Box>
            <VStack justifyContent={"space-between"}>
            
            </VStack>
            <Center>
            <Divider  mt={5} backgroundColor={"gray.300"} thickness={2} w={'300'} ></Divider>
            </Center>  
            </Box>
            <Box ml={3} mt={5}>
            <VStack>
            <Heading  fontSize={20} color={"gray.800"} mb={3} >Deskripsi</Heading>
                <HStack alignItems={'left'} justifyContent={"left"}>
                 <Heading fontSize={16} color={"gray.800" } mr={2}>{deskripsi}</Heading>
                </HStack>
            </VStack>
            </Box>    
    </Box>
       
    </ScrollView>
    </>
  );
 
};

export default DetailProduct;