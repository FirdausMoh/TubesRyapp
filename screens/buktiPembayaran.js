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
  Select,
} from "native-base";
import React, { useState, useEffect } from "react";
import FIREBASE from "../config/FIREBASE";
import ScreenTop from "../components/ScreenTop";
import { Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Pembayaran = () => {
  const [Nama, setNama] = useState("");
  const [NoTelpon, setnoTelpon] = useState("");
  const [Email, setEmail] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [Pesan, setPesan] = useState("");
  const [image, setImage] = useState(null);
  const [modal, setModal] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedRegency, setSelectedRegency] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = FIREBASE.auth().currentUser;
        if (user) {
          const userRef = FIREBASE.database().ref(`users/${user.uid}`);
          userRef.once("value", (snapshot) => {
            const userDataFromDatabase = snapshot.val();
            setNama(userDataFromDatabase.nama);
            setnoTelpon(userDataFromDatabase.nohp);
            setEmail(userDataFromDatabase.email);
            // Set state untuk data lainnya jika ada
          });
        } else {
          console.log("User not logged in!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json"
        );
        if (response.ok) {
          const data = await response.json();
          setProvinces(data);
        } else {
          throw new Error("Gagal mengambil data provinsi");
        }
      } catch (error) {
        console.error(error);
        // Handle error, bisa menampilkan pesan kepada pengguna
      }
    };

    fetchProvinces();
  }, []);

  const fetchRegencies = async (provinceId) => {
    try {
      const response = await fetch(
        `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`
      );
      if (response.ok) {
        const data = await response.json();
        setRegencies(data);
      } else {
        throw new Error("Gagal mengambil data kabupaten/kota");
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const fetchDistricts = async (regencyId) => {
    try {
      const response = await fetch(
        `https://emsifa.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`
      );
      if (response.ok) {
        const data = await response.json();
        setDistricts(data);
      } else {
        throw new Error("Gagal mengambil data kecamatan");
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  const handleProvinceChange = (provinceId) => {
    setSelectedProvince(provinceId);
    setSelectedRegency("");
    fetchRegencies(provinceId);
  };

  const handleRegencyChange = (regencyId) => {
    setSelectedRegency(regencyId);
    fetchDistricts(regencyId);
  };

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
        setProvinces([]);
        setRegencies([]);
        setDistricts([]);
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
              <FormControl.Label> Provinsi </FormControl.Label>
              <Select
                selectedValue={selectedProvince}
                onValueChange={(itemValue) => handleProvinceChange(itemValue)}
                h={12}
                backgroundColor={"white"}
                
              >
                <Select.Item label="Pilih Provinsi" value="" />
                {provinces.map((province) => (
                  <Select.Item
                    key={province.id}
                    label={province.name}
                    value={province.id}
                    onChangeText={setProvinces}
                  />
                ))}
              </Select>

              <FormControl.Label> Kabupaten/Kota </FormControl.Label>
              <Select
                selectedValue={selectedRegency}
                onValueChange={(itemValue) => handleRegencyChange(itemValue)}
                h={12}
                backgroundColor={"white"}
             
              >
                <Select.Item label="Pilih Kabupaten/Kota" value="" />
                {regencies.map((regency) => (
                  <Select.Item
                    key={regency.id}
                    label={regency.name}
                    value={regency.id}
                    onChangeText={setRegencies}
                  />
                ))}
              </Select>

              <FormControl.Label> Kecamatan/District </FormControl.Label>
              <Select
                selectedValue={selectedDistrict}
                onValueChange={(itemValue) => setSelectedDistrict(itemValue)}
                h={12}
                backgroundColor={"white"}
  
              >
                <Select.Item label="Pilih Kecamatan/District" value="" />
                {districts.map((district) => (
                  <Select.Item
                    key={district.id}
                    label={district.name}
                    value={district.id}
                    onChangeText={setDistricts}
                  />
                ))}
              </Select>
              <FormControl.Label>
                {" "}
                Tambahkan Informasi Alamat{" "}
              </FormControl.Label>
              <Input
                placeholder="Masukkan Detail Alamat Seperti Blok/nomer rumah"
                value={`${
                  provinces.find((p) => p.id === selectedProvince)?.name || ""
                }, ${
                  regencies.find((r) => r.id === selectedRegency)?.name || ""
                }, ${
                  districts.find((d) => d.id === selectedDistrict)?.name || ""
                }, ${Alamat}`}
                onChangeText={(text) => setAlamat(text)}
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
