import { Heading, Center, Box, VStack, HStack, Button, } from "native-base";
import { Header, ScreenTop } from "../components";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


const Pembelian = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScreenTop/>
      <VStack >
        <Box backgroundColor={"green.400"}>
        <Box margin={5} mt={10} >
          <Center >
            <HStack>
              <Ionicons name="checkmark-circle" size={35} color="white" />
              <Heading  ml={2} mt={2} fontSize={"md"} color={"white"}>
                Pembelian Berhasil
              </Heading>
            </HStack> 
            <Center mt={5}>
            <Text fontSize={24} fontWeight={'semibold'} color={"white"}> Lihat Pesanan Saya untuk informasi lebih lanjut </Text>  
            </Center>        
          </Center>
          <HStack mt={5} space={3} justifyContent="center">
            <Button  w={150} variant={"ghost"} borderWidth={2} borderColor={"white"} onPress={() => navigation.navigate("Category")}>
              <Text>Beranda</Text>
            </Button>
          </HStack>
        </Box>
        </Box>
      </VStack>
      
    </>
  );
};

export default Pembelian;