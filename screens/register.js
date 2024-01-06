import React, { useState } from "react";
import {
  Box,
  Text,
  FormControl,
  Input,
  Button,
  Center,
  View,
  VStack,
  useToast,
  Heading,
  Image,
} from "native-base";
import { registerUser } from "../actions/AuthAction";
import { TouchableOpacity } from "react-native";


const Register = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const onRegister = async () => {
    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.navigate("Tabs");
      } catch (error) {
        console.log("Error", error.message);
        showToast('Cek Ulang Format Data');
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      showToast("Pastikan Form Telah Terisi Semua");
    }
  };

  const showToast = (message) => {
    toast.show({
      title: "Cek Ulang Form",
      description: message,
      status: "Cek Ulang Form",
      duration: 3000,
        backgroundColor: "red.500",
        borderRadius: 8,
        w: 400,   
    });
  };

  return (
    <View flex={1} backgroundColor="#016B69">
      <Center>
      <Box backgroundColor={'#006664'} w={"100%"} h={'35%'} roundedBottom={300} shadow={9} py={10}>
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


      <Box my={16} h={'55%'} w={'90%'}>
        <VStack>
            <Box   mb={5}>
            <Heading color={'white'}>Selamat Datang</Heading>
            <Text color={'gray.400'} fontWeight={"semibold"}>Silahkan Melakukan Pendaftaran Akun</Text>
            </Box> 
        <FormControl>
          <Input
            placeholder="Nama"
            width="full"
            color={"gray.600"}
            py={ Platform.OS === "ios" ? 4 : 2 } // Tambahkan buat ios
            mb={5}
            rounded={10}
            backgroundColor={"gray.200"}
            value={nama}
            onChangeText={(nama) => setNama(nama)}
          />
          <Input
            placeholder="Email"
            width="full"
            color={"gray.600"}
            py={ Platform.OS === "ios" ? 4 : 2 } // Tambahkan buat ios
            mb={5}
            rounded={10}
            backgroundColor={"gray.200"}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <Input
            placeholder="No. Handphone"
            width="full"
            color={"gray.600"}
            py={ Platform.OS === "ios" ? 4 : 2 } // Tambahkan buat ios
            mb={5}
            rounded={10}
            backgroundColor={"gray.200"}
            keyboardType="phone-pad"
            value={nohp}
            onChangeText={(nohp) => setNohp(nohp)}
          />
          <Input
            placeholder="Password"
            width="full"
            color={"gray.600"}
            py={ Platform.OS === "ios" ? 4 : 2 } // Tambahkan buat ios
            mb={5}
            rounded={10}
            backgroundColor={"gray.200"}
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </FormControl>
        <Box>
        <Button
          backgroundColor={'#2893A9'}
          rounded={10}
          padding={3}
          onPress={() => {
            onRegister();
          }}>
            <Heading fontSize={18} color={"white"}>Daftar</Heading>
            </Button>
        <TouchableOpacity onPress= {() => {navigation.navigate('Login')}}>
        <Text size="sm" fontWeight={'semibold'} color="blue.500" mt={4}>
            Sudah Punya Akun ?
          </Text>
        </TouchableOpacity>
        </Box>
        
        </VStack>
      </Box>
      </Center>
    </View>
  );
};

export default Register;