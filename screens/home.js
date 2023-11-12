import {  Image, Text,  ScrollView, Box, Heading, Center, VStack, HStack, Link} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <>
    <Header/>
    <ScrollView>
      <VStack>
      <Box>
        <Image source={require("../assets/baner.jpg")}
        alt="banner"
        w="full"
        h="3xs"
        />
      </Box>
      <Box>
      <HStack>
      <Text marginLeft={3} my={5} fontSize={20} fontWeight={'semibold'}>
    Apa Yang Anda Butuhkan ?
    </Text>
    <TouchableOpacity onPress={() => navigation.navigate("Product")}>
    <Text mx={'70px'}my={6} fontSize={14} bold color={"green.600"}>
    Lihat Semua
    </Text>
    </TouchableOpacity>
      </HStack>
    
    </Box>
    <Box>
    <ScrollView marginLeft={'1'} horizontal={true} scrollEnabled={true}>
          <Box marginLeft={3}>
          <Image
                source={require("../assets/dinding.jpg")}
                w="130px"
                h="130px"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Dinding</Text>
          </Center> 
          </Box>   
          <Box marginLeft={3}>
          <Image
                source={require ("../assets/atap.jpg")}
                w="130px"
                h="130px"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Atap</Text>
          </Center> 
          </Box>  
          <Box marginLeft={3}>
          <Image
                source={require ("../assets/cat.jpg")}
                w="130px"
                h="130px"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Cat</Text>
          </Center> 
          </Box>  
          <Box marginLeft={3}>
          <Image
                source={require ("../assets/lain.jpg")}
                w="130px"
                h="130px"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={5} fontSize={18}>Lain-lain</Text>
          </Center> 
          </Box>  
      </ScrollView>
      </Box>
      <Center>
      <Box backgroundColor={'gray.300'} w={'full'}>
          <Center marginTop={5} marginBottom={5}>
            <Text fontWeight={'bold'} fontSize={16} color={'black'}>Kenapa harus beli di <Text bold >RYAPP</Text> ?? </Text>
          <Box mx={3} my={5} >
          <VStack>
            <HStack>
              <Box backgroundColor={"white"} w={'180px'}h={'180px'} rounded={30} mx={3} >
              <Image source={{
      uri: "https://png.pngtree.com/png-clipart/20220705/original/pngtree-vector-red-toolbox-with-hand-tools-png-image_8334929.png"
    }} alt="icon" size="sm" borderRadius={90} m={3}/>
                <Text textAlign={'left'} m={1} fontWeight={"bold"} fontSize={'sm'} color={"gray.700"}>Berbagai produk dan merek bahan material</Text>
              </Box>
              <Box backgroundColor={"white"} w={'180px'}h={'180px'} rounded={30} mx={2}>
              <Image source={{
      uri: "https://i.pinimg.com/736x/2e/f2/f3/2ef2f3289430a49cfbd483bf44dd2f17.jpg"
    }} alt="icon" size="md" borderRadius={90} m={3}/>
                <Text textAlign={'left'} m={1} fontWeight={"bold"} fontSize={'sm'} color={"gray.700"}>Penggiriman Cepat</Text>
              </Box>
            </HStack>
          </VStack>
          <VStack mt={5}>
            <HStack>
            <Box backgroundColor={"white"} w={'180px'}h={'180px'} rounded={30} mx={3}>
              <Image source={{
      uri: "https://png.pngtree.com/png-clipart/20201208/original/pngtree-24-hour-clock-delivery-service-png-image_5518192.jpg"
    }} alt="icon" size="sm" borderRadius={90} m={3}/>
                <Text textAlign={'left'} m={1} fontWeight={"bold"} fontSize={'sm'} color={"gray.700"}>Layanan 24 jam

Bagi Kontraktor dan Vendor</Text>
              </Box>
              <Box backgroundColor={"white"} w={'180px'}h={'180px'} rounded={30} mx={2}>
              <Image source={{
      uri: "https://png.pngtree.com/png-vector/20230328/ourmid/pngtree-best-price-icon-design-vector-png-image_6673126.png"
    }} alt="icon" size="sm" borderRadius={90} m={3}/>
                <Text textAlign={'left'} m={1} fontWeight={"bold"} fontSize={'sm'} color={"gray.700"}>Harga Khusus Untuk Akun Bisnis</Text>
              </Box>
            </HStack>
          </VStack>
          </Box>

          </Center>
      </Box>
      <Box>
      <VStack>
      <Heading  my={5} ml={5} fontSize={20} textAlign={"left"}>Kontak Kami</Heading>
      <HStack mb={5} backgroundColor={"gray.300"} borderRadius={10} shadow={3} >
      <Image
          source={require ("../assets/JAAA.png")}
          w="130"
          h="130"
          alt="Logo"
          resizeMode="cover"
          m={5}
            />
      <Center>
      <Box mx={1} pr={6}>
      <VStack>
      <HStack>
          <Ionicons name="logo-instagram"  size={30} color='purple' />
          <Link ml={5}  href="https://www.instagram.com/hanifbahyhasyid/?hl=en" isUnderlined _text={{fontSize:"md",}} >
            @suburjaya
          </Link>
      </HStack>
      <HStack>
          <Ionicons name="logo-whatsapp"  size={30} color="green"/>
          <Link ml={5}  href="https://www.instagram.com/hanifbahyhasyid/?hl=en" isUnderlined _text={{fontSize:"md",}} >
            08003337221
          </Link>
      </HStack>
      <HStack>
          <Ionicons name="mail-outline"  size={30} color="red" />
          <Link ml={5}  href="https://www.instagram.com/hanifbahyhasyid/?hl=en" isUnderlined _text={{fontSize:"md",}} >
            suburjaya@gmail.com
          </Link>
      </HStack>
      </VStack>
      </Box>
      </Center>
      </HStack>
      </VStack>
      </Box>
      </Center>
    </VStack>
    </ScrollView>
    </>
  );
};

export default HomeScreen;