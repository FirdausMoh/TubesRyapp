import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text, } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Profile from "./screens/profile"
import HomeScreen from "./screens/home";
import Category from "./screens/category";
import Product from "./screens/Product";
import DetailProduct from "./screens/detailproduct";
import Aboutus from "./screens/AboutUs";
import Semen from "./screens/Semen";


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
            name="AboutUs"
            component={Aboutus}
            options={noHead}
          />
          <Stack.Screen
            name="Semen"
            component={Semen}
            options={noHead}
          />
        </Stack.Navigator>
        
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;