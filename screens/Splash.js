import React, { useEffect } from 'react';
import { View, Center, Box, Image } from 'native-base';
import { getData } from '../utils';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const checkUserData = async () => {
      try {
        const userData = await getData('user');
        if (userData) {
          navigation.replace('Login');
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigation.navigate('Login');
      }
    };

    const timer = setTimeout(checkUserData, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View flex={1} backgroundColor="#016B69">
      <Center>
        <Box backgroundColor={'#006664'} w="full" height={'80'} pt={500} roundedBottom={300} shadow={9} py={10}>
          <Center>
            <Image
              source={require('../assets/JAAA.png')}
              w="full"
              h="80"
              alt="Logo"
              resizeMode="cover"
              mb={200}
            />
          </Center>
        </Box>
      </Center>
    </View>
  );
};

export default Splash;