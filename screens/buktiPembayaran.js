import {
  Input,
  Text,
  Button,
  ScrollView,
  Box,
  Heading,
  FormControl,
  Image,
  Center,
  HStack,
  Modal,
} from "native-base";
import React, { useState } from "react";
import FIREBASE from "../config/FIREBASE";
import ScreenTop from "../components/ScreenTop";
import { Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

const Pembayaran = () => {
  const [Nama, setNama] = useState("");
  const [NoTelpon, setnoTelpon] = useState("");
  const [Email, setEmail] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [Pesan, setPesan] = useState("");
  const [image, setImage] = useState(null);
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    if (Nama && NoTelpon && Email && Alamat && image) {
      setModal(true);
    } else {
      Alert.alert("Harap lengkapi semua form !");
    }
  };

  const sendDataToFirebase = () => {
    FIREBASE.database()
      .ref("formData")
      .push({
        Nama,
        NoTelpon,
        Email,
        Alamat,
        Pesan,
        image,
      })
      .then(() => {
        console.log("Data berhasil terkirim ke Firebase!");
        setModal(false);

        // Mengosongkan nilai state
        setNama("");
        setnoTelpon("");
        setEmail("");
        setAlamat("");
        setPesan("");
        setImage(null);
      })
      .catch((error) => {
        console.error("Gagal menyimpan data:", error);
        Alert.alert("Gagal menyimpan data!");
      });
  };

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Izin akses galeri diperlukan");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // Menggunakan kunci "assets" untuk mengakses gambar yang dipilih
      setImage(result.assets[0].uri);
    } else {
      console.log("Pemilihan gambar dibatalkan");
    }
  };
  return (
    <>
      <ScreenTop />
      <ScrollView flex={1}>
        <Box my={5} mx={5}>
          <Heading mb={4} fontSize={18} color={"#006664"}>
            Form Pembayaran
          </Heading>
          <Box>
            <FormControl>
              <FormControl.Label> Nama Lengkap</FormControl.Label>
              <Input
                placeholder="Nama"
                value={Nama}
                onChangeText={setNama}
                h={12}
                backgroundColor={"white"}
                shadow={4}
              />
              <FormControl.Label> Nomer Telepon</FormControl.Label>
              <Input
                placeholder="NoTelpon"
                value={NoTelpon}
                onChangeText={setnoTelpon}
                h={12}
                backgroundColor={"white"}
                shadow={4}
              />
              <FormControl.Label> Email </FormControl.Label>
              <Input
                placeholder="Email"
                value={Email}
                onChangeText={setEmail}
                h={12}
                backgroundColor={"white"}
                shadow={4}
              />
              <FormControl.Label> Alamat Lengkap</FormControl.Label>
              <Input
                placeholder="Alamat"
                value={Alamat}
                onChangeText={setAlamat}
                h={12}
                backgroundColor={"white"}
                shadow={4}
              />
              <FormControl.Label> Pesan</FormControl.Label>
              <Input
                placeholder="Tinggalkan Pesan"
                value={Pesan}
                onChangeText={setPesan}
                h={12}
                backgroundColor={"white"}
                shadow={4}
              />
              <Box mt={5}>
                <Heading color={"#006664"} fontSize={18}>
                  Upload Bukti Pembayaran
                </Heading>
                <HStack>
                  <TouchableOpacity onPress={pickImage}>
                    <Box
                      backgroundColor={"gray.200"}
                      size={100}
                      mt={4}
                      display={!image ? "flex" : "none"} // Menyembunyikan box  saat ada gambar
                    >
                      <Center mt={4}>
                        <Ionicons name="cloud-upload" size={60} color="gray" />
                      </Center>
                    </Box>
                  </TouchableOpacity>
                  {image && (
                    <Image
                      source={{ uri: image }}
                      size={200}
                      alt="foto"
                      value={image}
                      mt={4}
                      borderRadius={10}
                    />
                  )}
                </HStack>
              </Box>
            </FormControl>
          </Box>
          <Center>
            <Button
              mt={5}
              h={16}
              w={"80%"}
              backgroundColor={"#006664"}
              rounded={40}
              onPress={handleModalOpen}
            >
              Kirim Bukti
            </Button>
            <Modal isOpen={modal} onClose={() => setModal(false)}>
              <Modal.Content>
                <Modal.Header>
                  Proses Pengiriman Form
                  <Ionicons></Ionicons>
                </Modal.Header>
                <Modal.Body>
                  <Box
                    backgroundColor={"white"}
                    alignItems={"center"}
                    rounded={20}
                  >
                    <Ionicons name="time-outline" size={100} color="#4B4B4B" />
                    <Text>
                      Baik, silakan tunggu 1x24 jam apabila dalam 1x24 jam masih
                      berkendala silakan konfirmasi kembali agar dibantu lebih
                      lanjut. Terima kasih.
                    </Text>
                    <Button
                      m={6}
                      borderRadius={10}
                      onPress={sendDataToFirebase}
                      backgroundColor={"#006664"}
                    >
                      <Heading color={"white"}>OK</Heading>
                    </Button>
                  </Box>
                </Modal.Body>
              </Modal.Content>
            </Modal>
          </Center>
        </Box>
      </ScrollView>
    </>
  );
};

export default Pembayaran;
