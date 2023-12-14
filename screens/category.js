import { Heading, Image, Text, Box , ScrollView,View, Center, VStack, HStack} from "native-base";
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
      <Box my={5}>
      <Heading ml={'16px'}>Kategori Barang</Heading>

      <HStack alignItems={'center'} justifyContent={"center"} my={3}>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Semen")}>
          <Center>
          <Box 
          shadow={3} 
          backgroundColor={'#006664'} 
          w={220}
          h={185}
          borderRadius={20}
            >
          <Center>
          <Image
                source={require ("../assets/semen.png")}
                w="150"
                h="150"
                borderTopRadius={5}
                resizeMode="contain"
                alt="Logo"

            />
            <Text 
            color={"#FFFFFF"}mb={2} fontSize={18}>
              Semen
            </Text>
            </Center>
            </Box>
          </Center>   
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Cat")}>
        <Center>
          <Box
          ml={2} 
          shadow={3} 
          backgroundColor={'#006664'} 
          w={220}
          h={185}
          borderRadius={20}
          >
          <Center>
          <Image
                source={require ("../assets/cat.png")}
                w="220"
                h="150"
                borderTopRadius={5}
                resizeMode="contain"
                alt="Logo"
            />
           <Text 
            color={"#FFFFFF"}mb={2} fontSize={18}>
              Cat
              </Text>
          </Center> 
          </Box>
        </Center>   
        </TouchableOpacity>     
    </HStack>

    <HStack alignItems={'center'} justifyContent={"center"} my={3}>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Bata")}>
          <Center>
          <Box 
          shadow={3} 
          backgroundColor={'#006664'} 
          w={220}
          h={185}
          borderRadius={20}
          >
          <Center>
          <Image
                source={require ("../assets/bata.png")}
                w="220"
                h="150"
                borderTopRadius={5}
                resizeMode="contain"
                alt="Logo"
            />
            
            <Text 
           color={"#FFFFFF"}mb={2} fontSize={18}>Bata</Text>
            </Center>
            </Box>
          </Center>   
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Galvalum")}>
        <Center>
        <Box 
          ml={2} 
          shadow={3} 
          backgroundColor={'#006664'} 
          w={220}
          h={185}
          borderRadius={20}
          >
          <Center>
          <Image
                source={require ("../assets/galvalum.png")}
                w="220"
                h="150"
                borderTopRadius={5}
                resizeMode="contain"
                alt="Logo"
            />
          
          <Text  color={"#FFFFFF"}mb={2} fontSize={18}>Galvalum</Text>
          </Center> 
          </Box>
        </Center>   
        </TouchableOpacity>     
    </HStack>

    <HStack mx={3} my={3}>
        <TouchableOpacity 
        onPress={() =>
          navigation.navigate("Product")}>
        <Center>
        <Box 
          ml={2} 
          shadow={3} 
          backgroundColor={'#006664'} 
          w={220}
          h={185}
          borderRadius={20}
          >
          <Center>
          <Image
                source={require ("../assets/other.png")}
                w="220"
                h="150"
                borderTopRadius={5}
                resizeMode="contain"
                alt="Logo"
            />
          
          <Text color={"#FFFFFF"}mb={2} fontSize={18}>Semua</Text>
          </Center> 
          </Box>
        </Center>   
        </TouchableOpacity>     
    </HStack>
    <HStack>
      <Box py={10}>

      </Box>
    </HStack>

    </Box>
    </VStack>
    
    </ScrollView>
    </>
   
    );
}

export default Category;