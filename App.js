import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import "react-native-gesture-handler";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerContent } from "./screens/DrawerContent";

import MainTabScreen from "./screens/MainTabScreen";
import ParainsScreen from "./screens/ParainsScreen";
import ModificationScreen from "./screens/ModificationScreen";

import RootStackScreen from "./screens/RootStackScreen";
import constants from "./constants/constants";
const Drawer = createDrawerNavigator();

export const AuthContext = React.createContext({});

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ6CwzQD338X1_hwo0wggWj6sCeyVJX_I",
  authDomain: "estsponsor-35154.firebaseapp.com",
  projectId: "estsponsor-35154",
  storageBucket: "estsponsor-35154.appspot.com",
  messagingSenderId: "696311384091",
  appId: "1:696311384091:web:8c5802cf87ede6d3bb50be",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  const loadUserFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem(constants.USERSTORAGE);
      console.log(" user is ", value);
      setUser(JSON.parse(value));
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    loadUserFromStorage();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user != null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Bookmark" component={ParainsScreen} />
            <Drawer.Screen name="Modification" component={ModificationScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
