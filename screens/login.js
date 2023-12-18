import React, { useState } from "react";
import {
  Box,
  Text,
  FormControl,
  Heading,
  Input,
  Button,
  Center,
  VStack,
  Image,
  View,
  useToast,
  IconButton
} from "native-base";
import { loginUser } from "../actions/AuthAction";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle showPassword state
  };
  
  //tidak sesuai
  const login = () => {
    if (!email || !password) {
      showToast('Email atau Password Tidak Boleh Kosong');
      return;
    }

    if (!password) {
      showToast('Password Tidak Boleh Kosong');
      return;
    }
    // sesuai
      loginUser(email, password)
        .then((user) => {
          // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
          navigation.navigate("Tabs");
        })
        .catch((error) => {
          // Terjadi kesalahan saat login, tampilkan pesan kesalahan
          console.log("ERROR", error.message);
          showToast('Cek Ulang E-Mail / Password');
        });
  };

  const showToast = (message) => {
    toast.show({
      title: "Error",
      description: message,
      status: "Error",
      duration: 3000,
        backgroundColor: "red.500",
        borderRadius: 8,
        w: 400,   
    });
  };

  return (
    <View flex={1} backgroundColor="#016B69">
      <Center>
        <Box backgroundColor={'#006664'} w={"full"} h={80} roundedBottom={300} shadow={9} py={10}>
        <Center>
        <Image
          source={require ("../assets/JAAA.png")}
          w="full"
          h="full"
          alt="Logo"
          resizeMode="cover"
          mb={5}
            />
        </Center>
        </Box>

        <Box my={16} h={80}>
          <VStack>
            <Box   mb={5}>
            <Heading color={'white'}>Masuk</Heading>
            <Text color={'gray.400'} fontWeight={"semibold"}>Masukan Akun Terlebih dahulu</Text>
            </Box>     
          <FormControl>
          <Input
            placeholder={"Masukkan E-mail"}
            width="full"
            color={"gray.600"}
            py={4}
            mb={5}
            rounded={10}
            backgroundColor={"gray.200"}
            onChangeText={(text) => setEmail(text)} // Set email ke dalam state
            value={email}
          />
          <Input
            placeholder="Password"
            width="full"
            color={"gray.600"}
            mb={5}
            rounded={10}
            backgroundColor={"gray.200"}
            secureTextEntry={!showPassword} // Use showPassword state to toggle secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
            InputRightElement={
              <IconButton
                variant="unstyled"
                icon={
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={20}
                    color="gray"
                  />
                }
                onPress={togglePasswordVisibility}
              />
            }
          />
        </FormControl>
        <Box>
          <Button
            backgroundColor={'#2893A9'}
            rounded={10}
            padding={3}
            onPress={() => login()}
          >
            <Heading fontSize={15} color={"white"}>Masuk</Heading>
            </Button>
          <TouchableOpacity onPress={() => {
              navigation.navigate("Register")
            }}>
          <Text size="sm" fontWeight={'semibold'} color="blue.500" mt={4}>
            Belum Punya Akun ?
          </Text>
          </TouchableOpacity>
        </Box>
          </VStack>
        
      </Box>
      </Center>
    </View>
  );
};

export default Login;