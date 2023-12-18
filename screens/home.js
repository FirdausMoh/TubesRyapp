import { Heading, Image, FlatList, Box, VStack, HStack, Text, Center, ScrollView, Link, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import data from "../data";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Detail Product", { item: item })}
      >
        <Box>
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
        </Box>
      </TouchableOpacity>
    );
  };

return (
  <View flex={1}>
    <Header/>
    <ScrollView>
    <VStack>
      <Box mx={3} mt={5} >
        <Image source={require("../assets/Suburjaya.png")}
        alt="banner"
        w="full"
        h="3xs"
        borderRadius={25}
        />
      </Box>
      <Box>
    <VStack>
    <Text marginLeft={3} my={5} fontSize={20} fontWeight={'bold'}>
    KATEGORI TERATAS
    </Text>
    <VStack>
    <HStack mx={2} justifyContent="space-between" >
    <TouchableOpacity onPress={() => navigation.navigate("Bata")}>
    <Box backgroundColor={"#006664"} px={2} pt={2} borderRadius={15} > 
      <Image
        source={require("../assets/bata.png")}
        w="80px"
        h="70px"
        alt="Logo"
        resizeMode="contain"
        borderRadius={10}
      />
      <Center mb={1}>
      <Text color={"trueGray.100"} fontSize={14}>Bata</Text>
      </Center> 
      </Box>   
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Semen")}>
    <Box backgroundColor={"#006664"} px={2} pt={2} borderRadius={15}>
      <Image
        source={require("../assets/semen.png")}
        w="80px"
        h="70px"
        alt="Logo"
        resizeMode="contain"
        borderRadius={10}
      />
      <Center mb={1}>
      <Text color={"trueGray.100"}  fontSize={14}>Semen</Text>
      </Center>
      </Box>   
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Cat")}>
    <Box backgroundColor={"#006664"} px={2} pt={2} borderRadius={15}>
      <Image
        source={require("../assets/cat.png")}
        w="80px"
        h="70px"
        alt="Logo"
        resizeMode="contain"
        borderRadius={10}
      />
      <Center mb={1}>
      <Text color={"trueGray.100"} fontSize={14}>Cat</Text>
      </Center> 
      </Box>   
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Category")}>
    <Box backgroundColor={"#006664"} px={2} pt={2} borderRadius={15}>
      <Image
        source={require("../assets/lain.png")}
        w="80px"
        h="70px"
        alt="Logo"
        resizeMode="contain"
        borderRadius={10}
      />
      <Center mb={1}>
      <Text  color={"trueGray.100"} fontSize={14}>Lainnya</Text>
      </Center> 
      </Box>   
    </TouchableOpacity>
    </HStack>
    </VStack>
    </VStack>

    </Box>
    </VStack>
      <Box backgroundColor={'gray.100'} my={5}>
      <Text marginLeft={3} my={3} fontSize={20} fontWeight={'bold'} color={'#006664'}>
          Rekomendasi
        </Text>
      </Box>
    <FlatList
      data={data}
      renderItem={renderitem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-evenly' }}
    />
    <Box  backgroundColor={"#006664"}mt={30} h={80}>
      <Heading  m={5} fontSize={20} color={"trueGray.100"}>Kontak Kami</Heading>
      <HStack mb={5} backgroundColor={"white"} mx={5} borderRadius={30} shadow={2}>
      <Image
          source={require ("../assets/JAAA.png")}
          w="100"
          h="140"
          alt="Logo"
          borderRadius={100}
          resizeMode="contain"
          mb={5}
          mt={5}
          ml={5}
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
</ScrollView>
    
</View>
);
};

export default HomeScreen;