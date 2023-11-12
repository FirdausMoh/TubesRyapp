import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text, } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Profile from "./screens/profile"
import HomeScreen from "./screens/home";
import Category from "./screens/category";
import Product from "./screens/Product";
import Login from "./screens/login";
import Register from "./screens/register";
import DetailProduct from "./screens/detailproduct";
import Aboutus from "./screens/AboutUs";
import Semen from "./screens/Semen";
import Cat from "./screens/Cat";
import Bata from "./screens/Bata";
import History from "./screens/History";
import Faqs from "./screens/Faq";
import Pembelian from "./screens/Pembelian";
import Galvalum from "./screens/Galvalum";


Ionicons.loadFont();

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
            case "Category":
            iconName = "menu";
            break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 100,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={noHead} />
      <Tab.Screen name="Category" component={Category} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />

    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />

          <Stack.Screen
            name="Product"
            component={Product}
            options={noHead}
          />
          <Stack.Screen
            name="Detail Product"
            component={DetailProduct}
            options={noHead}
          />
           <Stack.Screen
            name="Login"
            component={Login}
            />
          <Stack.Screen
            name="AboutUs"
            component={Aboutus}
            options={noHead}
          />
          <Stack.Screen
            name="Semen"
            component={Semen}
            options={noHead}
          />
          <Stack.Screen
            name="Bata"
            component={Bata}
            options={noHead}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={noHead}
          />
          <Stack.Screen
            name="Cat"
            component={Cat}
            options={noHead}
          />
          <Stack.Screen
            name="Faq"
            component={Faqs}
            options={noHead}
          />
          <Stack.Screen
            name="Pembelian"
            component={Pembelian}
            options={noHead}
          />
           <Stack.Screen
            name="Register"
            component={Register}
            options={noHead}
          />
            <Stack.Screen
            name="Galvalum"
            component={Galvalum}
            options={noHead}
          />
        </Stack.Navigator>
        
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;