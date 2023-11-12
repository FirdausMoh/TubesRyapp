import { Heading, FlatList, Image, Text, Box , ScrollView,View, Center, VStack, HStack} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Category = () => {
  const navigation = useNavigation();
  return (
    <>
    <View>
    <Header/>
    </View>
    <ScrollView>
      <VStack>
      <Box mt={5}>
      <Heading ml={5} mb={4}>Kategori Barang</Heading>
      
      <HStack alignItems={'center'} justifyContent={"center"} my={3}>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Semen")}>
          <Center>
          <Box shadow={5} backgroundColor={'white'} p={5} mr={10} borderRadius={30}>
          <Center>
          <Image
                source={require ("../assets/semen.jpg")}
                w="140"
                h="140"
                alt="Logo"
            />
            <Text color={"gray.600"} my={1} fontSize={18}>Pilihan Semen</Text>
            </Center>
            </Box>
          </Center>   
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Cat")}>
        <Center>
          <Box shadow={5} backgroundColor={'white'} p={5} borderRadius={30}>
          <Center>
          <Image
                source={require ("../assets/cat.png")}
                w="140"
                h="140"
                alt="Logo"
            />
          <Text marginTop={1} color={"gray.600"}  my={1} fontSize={18}>Pilihan Cat</Text>
          </Center> 
          </Box>
        </Center>   
        </TouchableOpacity>     
    </HStack>

    <HStack alignItems={'center'} justifyContent={"center"} my={3} ml={3} >
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Bata")}>
          <Center>
          <Box shadow={5} backgroundColor={'white'} p={5} mr={10} borderRadius={30}>
          <Center>
          <Image
                source={require ("../assets/bata.webp")}
                w="140"
                h="140"
                alt="Logo"
            />
            
            <Text color={"gray.600"} my={1} fontSize={18}>Pilihan Bata</Text>
            </Center>
            </Box>
          </Center>   
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Galvalum")}>
        <Center>
          <Box shadow={5} backgroundColor={'white'} p={5} borderRadius={30}
          >
          <Center>
          <Image
                source={require ("../assets/galvalum.png")}
                w="140"
                h="140"
                alt="Logo"
            />
          
          <Text marginTop={1} color={"gray.600"}  my={1} fontSize={18}>Pilihan Galvalum</Text>
          </Center> 
          </Box>
        </Center>   
        </TouchableOpacity>     
    </HStack>

    <HStack alignItems={'left'} justifyContent={"left"} my={3} ml={10}>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Product")}>
          <Center>
          <Box shadow={5} backgroundColor={'white'} p={5} mr={10} borderRadius={30}>
          <Center>
          <Image
                source={require ("../assets/other.png")}
                w="140"
                h="140"
                alt="Logo"
            />
            
            <Text color={"gray.600"} my={1} fontSize={18}> Semua</Text>
            </Center>
            </Box>
          </Center>   
          </TouchableOpacity>
    </HStack>

    </Box>
    </VStack>
    
    </ScrollView>
    </>
   
    );
}

export default Category;