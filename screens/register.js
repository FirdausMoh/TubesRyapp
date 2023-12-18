import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Center mb={10}>
      <Image
              source={require("../assets/JAAA.png")}
              w="300px"
              h="200px"
              alt="Logo"
              resizeMode="contain"
            />
      </Center>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Register Account 
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="red.600" fontWeight="bold" size="xs">
          Subur Jaya APP
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2"  onPress={() => navigation.navigate("Home")} backgroundColor={"red.600"}>
            <Text color={"white"}>Register</Text>
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Register/>
            </Center>
          </NativeBaseProvider>
        );
    };
    