import React, { useState } from 'react';
import { Heading, View, Center, Text, Box, Image, Button, HStack, Divider, VStack } from 'native-base';
import { ScreenTop } from '../components';
import { useNavigation } from '@react-navigation/native';

const formatRupiah = (number) => {
  const formattedNumber = new Intl.NumberFormat('id-ID', {
    currency: 'IDR'
  }).format(number);

  return formattedNumber;
};

const Keranjang = ({ route }) => {
  const { image, title, content, price, Price } = route.params.item;
  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 1) {
      setQuantity(newQuantity);
      setTotalPrice(price * newQuantity);
    }
  };

  return (
    <>
      <ScreenTop shadow={3} />
      <View>
        <Box backgroundColor={'#006664'} mt={5}>
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
              <Box mt={3} ml={3}>
                <Heading color={'gray.100'} fontSize={16}>
                  {content}
                </Heading>
                <Heading color={'green.400'} fontSize={16}>
                  {Price}
                </Heading>
                <HStack space={4} mt={4}>
                  <Button
                    onPress={() => handleQuantityChange(-1)}
                    backgroundColor={'#d9d9d9'}
                    _pressed={{ backgroundColor: '#bfbfbf' }}
                  >
                    -
                  </Button>
                  <Text color={'gray.100'}>{quantity}</Text>
                  <Button
                    onPress={() => handleQuantityChange(1)}
                    backgroundColor={'#d9d9d9'}
                    _pressed={{ backgroundColor: '#bfbfbf' }}
                  >
                    +
                  </Button>
                </HStack>
                <Text color={'green.400'} fontSize={18}>
                  Total : {formatRupiah(totalPrice)}
                </Text>
              </Box>
            </Box>
          </HStack>
        </Box>
      </View>
    </>
  );
};

export default Keranjang;
