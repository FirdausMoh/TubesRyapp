import {
  Image,
  Box,
  Text,
  VStack,
  Center,
  Heading,
  ScrollView,
  Button,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import firebase from "../config/FIREBASE";
import "firebase/auth";

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          const userRef = firebase.database().ref(users/${user.uid});
          userRef.on("value", (snapshot) => {
            const userDataFromDatabase = snapshot.val();
            setUserData(userDataFromDatabase);
          });
        } else {
          console.log("User not logged in!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <ScrollView flex={1} backgroundColor={"white"}>
      <VStack>
        <Box backgroundColor={"#078684"} h={"50%"}>
          <Box backgroundColor={"#006664"} h={"70%"} roundedBottom={200}>
            <Center mt={"15%"}>
              <Ionicons name="person-circle" size={100} color="black" />
              <Heading color={"white"} mb={4}>
                {userData ? userData.nama : "Nama"}
              </Heading>
            </Center>
          </Box>
          <Center mt={2}>
            <Text color={"white"} fontSize={20}>
              {userData ? userData.email : "email"}
            </Text>
            <Text color={"white"} fontSize={20}>
              {userData ? userData.nohp : "No Telepon"}
            </Text>
          </Center>
        </Box>
        <Box
          bottom={12}
          left={0}
          right={0}
          backgroundColor={"white"}
          p={3}
          m={4}
          rounded={30}
          shadow={8}
        >
          <Box borderBottomWidth={1} borderColor={"gray.400"} p={3}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("AboutUs")}
            >
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                Tentang kami
              </Text>
            </TouchableOpacity>
          </Box>
          <Box borderBottomWidth={1} borderColor={"gray.300"} p={3}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Product")}
            >
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                Produk
              </Text>
            </TouchableOpacity>
          </Box>
          <Box borderBottomWidth={1} borderColor={"gray.300"} p={3}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Keranjang")}
            >
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                Keranjang
              </Text>
            </TouchableOpacity>
          </Box>
          <Box borderBottomWidth={1} borderColor={"gray.300"} p={3}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Faq")}
            >
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                FAQs
              </Text>
            </TouchableOpacity>
          </Box>
          <Box p={3}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Pembayaran")}
            >
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                Form Bukti Pembayaran
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
        <Center>
          <Button
            w={"50%"}
            h={12}
            rounded={16}
            backgroundColor={"#006664"}
            onPress={handleLogout}
          >
            <Heading color={"white"}>Keluar</Heading>
          </Button>
        </Center>
      </VStack>
    </ScrollView>
  );
};

export default Profile;