import { Heading, Center,Image, Box, Link,Text, VStack, HStack, ScrollView,} from "native-base";
import { Header, ScreenTop } from "../components";
import {useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


const Aboutus = () => {
  const navigation = useNavigation();

  return (
    <>
    <ScreenTop title={"Tentang Kami"}/>
    <ScrollView>
    <VStack mt={15} >
      <Box margin={5}>
      <Box ml={2} mr={2} backgroundColor={'#006664'} borderRadius={20}>
        <Center>
        <Image
          source={require ("../assets/JAAA.png")}
          w="140"
          h="140"
          alt="Logo"
          borderRadius={100}
          resizeMode="contain"
          mb={5}
            />
        </Center>
      
      </Box>
  
      <Heading ml={2} my={4} fontSize={20} color={'#006664'}>Tentang RYAPP</Heading>
      <Box ml={2} mr={2} mb={5}>
        <Text fontSize={14} fontWeight={'normal'}>RYAPP adalah aplikasi e-commerce yang mengkhususkan diri dalam penjualan bahan-bahan bangunan. Kami adalah solusi terdepan bagi mereka yang sedang merenovasi rumah, membangun proyek konstruksi, atau memerlukan material bangunan berkualitas. Dengan komitmen untuk menyediakan akses mudah, pilihan produk yang beragam, serta pengalaman belanja yang nyaman, RYAPP memungkinkan Anda untuk memenuhi kebutuhan bangunan Anda tanpa kerumitan.</Text>
      </Box>
      <Heading ml={2} mb={4} fontSize={20} color={'#006664'}>Keunggulan Layanan kami</Heading>
      <ScrollView horizontal={true} scrollEnabled={true}>
        <Box maxW="80" maxH={"80"} ml={2} mr={2} mb={5} backgroundColor={"white"} rounded={"lg"} shadow={2} >
          <Center margin={5}>
          <Image source={{
          uri: "https://png.pngtree.com/png-vector/20230328/ourmid/pngtree-best-price-icon-design-vector-png-image_6673126.png"
          }} alt="icon" size="md" borderRadius={90} m={3}/>
            <Heading mt={5} fontSize={20}>
              Harga Termurah
            </Heading>
            <Text mt={2} fontSize={10} fontWeight={'normal'}>        Harga Khusus Untuk Akun Bisnis         </Text>
          </Center>
        </Box>
        <Box maxW="80" maxH={"80"} ml={2} mr={5} mb={5} backgroundColor={"white"} rounded={"lg"} shadow={2} >
          <Center margin={5}>
          <Image source={{
            uri: "https://i.pinimg.com/736x/2e/f2/f3/2ef2f3289430a49cfbd483bf44dd2f17.jpg"
            }} alt="icon" size="md" borderRadius={90} m={3}/>
            <Heading mt={5} fontSize={20}>
            Penggiriman Cepat
            </Heading>
            <Text mt={2} fontSize={10} fontWeight={'normal'}>Berbagai produk dan merek bahan material</Text>
          </Center>
        </Box>
        <Box maxW="80" maxH={"80"} ml={2} mr={5} mb={5} backgroundColor={"white"} rounded={"lg"} shadow={2} >
          <Center margin={5}>
          <Image source={{
            uri: "https://png.pngtree.com/png-clipart/20201208/original/pngtree-24-hour-clock-delivery-service-png-image_5518192.jpg"
            }} alt="icon" size="md" borderRadius={90} m={3}/>
            <Heading mt={5} fontSize={20}>
            Layanan 24 jam
            </Heading>
            <Text mt={2} fontSize={10} fontWeight={'normal'}>              Bagi Kontraktor dan Vendor              </Text>
          </Center>
        </Box>
        <Box maxW="80" maxH={"80"} ml={2} mr={5} mb={5} backgroundColor={"white"} rounded={"lg"} shadow={2} >
          <Center margin={5}>
          <Image source={{
            uri: "https://png.pngtree.com/png-clipart/20220705/original/pngtree-vector-red-toolbox-with-hand-tools-png-image_8334929.png"
            }} alt="icon" size="md" borderRadius={90} m={3}/>
            <Heading mt={5} fontSize={20}>
              Material Premium
            </Heading>
            <Text mt={2} fontSize={10} fontWeight={'normal'}>Berbagai produk dan merek bahan material</Text>
          </Center>
        </Box>
      </ScrollView>
      <Box>
      <Heading ml={2}  mb={4} mt={5} fontSize={20} color={'#006664'}>Kontak Kami</Heading>
      <HStack ml={2} mr={2} mb={5} backgroundColor={"white"} rounded={"lg"} shadow={2}>
      <Image
          source={require ("../assets/JAAA.png")}
          w="140"
          h="140"
          alt="Logo"
          borderRadius={100}
          resizeMode="contain"
          mb={5}
          mt={5}
          ml={2}
            />
      <VStack  mt={8}>
      <HStack ml={5}>
          <Ionicons name="logo-instagram"  size={30} color="black"/>
          <Link ml={5}  href="https://nativebase.io" isUnderlined _text={{fontSize:"md",}} >
            @suburjaya
          </Link>
      </HStack>
      <HStack ml={5} mt={2}>
          <Ionicons name="logo-whatsapp"  size={30} color="black"/>
          <Link ml={5}  href="https://nativebase.io" isUnderlined _text={{fontSize:"md",}} >
            08003337221
          </Link>
      </HStack>
      <HStack ml={5} mt={2}>
          <Ionicons name="mail-outline"  size={30} color="black"/>
          <Link ml={5}  href="https://nativebase.io" isUnderlined _text={{fontSize:"md",}} >
            suburjaya@gmail.com
          </Link>
      </HStack>
      </VStack>
      </HStack>
      </Box>
      </Box>
    </VStack>
      
      
      

    </ScrollView>
    </>
  );
};

export default Aboutus;