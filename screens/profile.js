import { Heading, Center,Image, Box,Text, VStack, Button} from "native-base";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
    <VStack >
      <Box backgroundColor={'red.600'}>
      <Image
          source={require ("../assets/pp.jpg")}
          w="90"
          h="90"
          alt="Logo"
          borderRadius={100}
          resizeMode="contain"
          m={5}
          borderWidth={5}
          borderColor={'white'}
            />
      <Box ml={5}>
        <Text fontSize={24} fontWeight={'semibold'} color={"white"}> Miftah Syukron</Text>
        <Box backgroundColor={'yellow.500'} w={'115px'} borderRadius={30} mb={'20px'}>
        <Text fontSize={14}  color={"white"} textAlign={"center"}>Member VIP</Text>
        </Box>  
      </Box>
      </Box>
      <Box>
        <Box borderBottomWidth={1} borderColor={"gray.300"} p={3}>
        <TouchableOpacity activeOpacity={0.5}
        onPress={() => navigation.navigate("AboutUs")}><Text fontSize={'2xl'} fontWeight={"semibold"}>Tentang kami</Text>
        </TouchableOpacity>
        </Box>
        <Box borderBottomWidth={1} borderColor={"gray.300"} p={3}>
        <TouchableOpacity activeOpacity={0.5}
        onPress={() => navigation.navigate("Product")}><Text fontSize={'2xl'} fontWeight={"semibold"}>Produk</Text>
        </TouchableOpacity>
        </Box>
        <Box borderBottomWidth={1} borderColor={"gray.300"} p={3}>
        <TouchableOpacity activeOpacity={0.5}
        onPress={() => navigation.navigate("History")}><Text fontSize={'2xl'} fontWeight={"semibold"}>Catatan Pembelian</Text>
        </TouchableOpacity>
        </Box>
        <Box borderBottomWidth={1} borderColor={"gray.300"} p={3}>
        <TouchableOpacity activeOpacity={0.5}
        onPress={() => navigation.navigate("Faq")}><Text fontSize={'2xl'} fontWeight={"semibold"}>FAQs</Text>
        </TouchableOpacity>
        </Box>
        <Box borderBottomWidth={1} borderColor={"gray.300"} p={3}>
        <TouchableOpacity activeOpacity={0.5}
        onPress={() => navigation.navigate("Login")}><Text fontSize={'2xl'} fontWeight={"semibold"}>Keluar</Text>
        </TouchableOpacity>
        </Box>
      </Box>
    </VStack>
      
      
      

    </>
  );
};

export default Profile;