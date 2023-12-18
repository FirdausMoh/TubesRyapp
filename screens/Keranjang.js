import React, { useState } from 'react';
import { Heading, View, Radio, Text, Box, Image, Button, HStack, VStack, FormControl, Input, Modal } from 'native-base';
import { ScreenTop } from '../components';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';



const Keranjang = ({ route }) => {
  const [cartItems, setCartItems] = useState([route.params.item]); // Menyimpan item-item dalam keranjang
  const { image, title, content, price, Price } = route.params.item;
  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      setTotalPrice(price * newQuantity);
    }
  };
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('bankTransfer');
  const formatRupiah = (number) => {
  const formattedNumber = new Intl.NumberFormat('id-ID', {
    currency: 'IDR'
  }).format(number);

  return formattedNumber;
};
  return (
    <>
      <ScreenTop shadow={3} />
      <View flex={1}>
      <Box m={5}>
      <Text fontSize={20} fontWeight={'bold'} color={"#006664"}>Keranjang Saya</Text>
      <Box backgroundColor={'white'} mt={5} shadow={3} borderWidth={1} borderColor={'#006664'} rounded={30}>
          <HStack my={5} mx={3}>
            <Box backgroundColor={'gray.100'} borderRadius={20}>
              <Image
                source={{ uri: image }}
                width={140}
                height={140}
                alt={title}
                resizeMode="contain"
                borderRadius={20}
              />
            </Box>
            <Box>
              <VStack>
              <Box mx={4} mt={2}>
                <Box ml={3}>
                <Heading color={'black'} fontSize={16} mb={4}>
                  {content}
                </Heading>
                <Heading color={'gray.500'} fontSize={16} mb={4}>
                  {Price}
                </Heading>
                </Box>
                <HStack alignItems={'center'} mr={10} >
                <Button
                  onPress={() => handleQuantityChange(-1)}
                  backgroundColor={'white'}
                >
                  <Ionicons name="remove-circle" size={25} color="#006664"/>
                </Button>
                <Text color={'gray.900'}>{quantity}</Text>
                <Button
                  onPress={() => handleQuantityChange(1)}
                  backgroundColor={'white'}
                >
                  <Ionicons name="add-circle" size={25} color="#006664"/>
                </Button>
                </HStack>
              </Box>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </Box>
        
        <Box   
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          backgroundColor={'#006664'}
          p={5}
          m={3}
          rounded={20}
          >
          <HStack justifyContent="space-between" alignItems="center">
          <Heading fontSize={'xl'} color={"gray.100"} >Total : Rp {formatRupiah(totalPrice)}</Heading>
          <Button onPress={() => setShowModal(true)} backgroundColor={'white'} rounded={10} >
            <Heading fontSize={'xl'} color={'#006664'}>Bayar</Heading>
          </Button>
          </HStack>
        </Box>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content>
            <Modal.Header>
              <HStack justifyContent={'space-between'}>
                <Heading color={'#006664'}>Form Pembayaran</Heading>
                <TouchableOpacity onPress={() => { setShowModal(false)}}>
                <Ionicons name="close" size={25} color="#006664"/>
                </TouchableOpacity>
                </HStack>
            
            </Modal.Header>
            <Modal.Body>
              <Box >
                <FormControl>
                <VStack mt={3}>
                    <Heading fontSize={'sm'} color={"gray.800"} mb={3}>Nama Pembeli :</Heading>
                    <Input backgroundColor={"gray.200"} w={'full'} h={'35px'} />
                  </VStack>
                  <VStack mt={3}>
                    <Heading fontSize={'sm'} color={"gray.800"} mb={3}>Alamat Pengiriman :</Heading>
                    <Input backgroundColor={"gray.200"} w={'full'} h={'35px'} />
                  </VStack>
                  <VStack mt={3}>
                    <Heading fontSize={'sm'} color={"gray.800"} mb={3}>No Telpon :</Heading>
                    <Input  backgroundColor={"gray.200"} w={'full'} h={'35px'} keyboardType='numeric'  />
                  </VStack>
                  <VStack mt={3}>
                  <Heading color={'gray.900'} fontSize={16} mb={3}>
                    Pilih Metode Pembayaran:
                    </Heading>
                    <Radio.Group
                    name="paymentMethod"
                    value={selectedPaymentMethod}
                    onChange={setSelectedPaymentMethod}
                    colorScheme= {"green"}
                  
                    >
                      <VStack space={3}>
                        <Radio value="bankTransfer">
                          <Text color={'gray.900'}>Transfer Bank</Text>
                        </Radio>
                        <Radio value="creditCard">
                          <Text color={'gray.900'}>LinkAja</Text>
                        </Radio>
                        <Radio value="eWallet">
                          <Text color={'gray.900'}>Dana</Text>
                        </Radio>
                      </VStack>
                    </Radio.Group>
                  </VStack>

                </FormControl>
              </Box>
            </Modal.Body>
            <Modal.Footer>
              <Button backgroundColor={'#006664'} onPress={() => {setShowSuccessModal(true);setShowModal(false)}}>Bayar</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
  <Modal.Content>
    <Modal.Header>
      Informasi Pembayaran
    <Ionicons></Ionicons>
    </Modal.Header>
    <Modal.Body >
      <Box backgroundColor={"white"} alignItems={'center'} rounded={20}>
            <Image
              source={require("../assets/JAAA.png")}
              w="200px"
              h="200px"
              alt="Logo"
              resizeMode="cover"
            />
            <Heading>Pembayaran Berhasil</Heading>
          <Button m={10} borderRadius={10} onPress={() => { setShowSuccessModal(false)}} backgroundColor={'#006664'}>
            <Heading color={"white"}>OK</Heading>
          </Button>
      </Box>
    </Modal.Body>
  </Modal.Content>
</Modal>
        
      </View>
    </>
  );
};

export default Keranjang;
