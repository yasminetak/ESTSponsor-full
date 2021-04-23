import React, { createContext, useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import PublicationsScreen from "./PublicationsScreen";
import ProfileScreen from "./ProfileScreen";
import MessagesScreen from "./MessagesScreen";
/**-------------------------- */
import ParainsScreen from "./ParainsScreen";
import ModificationScreen from "./ModificationScreen";

/**************** /
 * Bottom Tabs
 *****************/
const HomeStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const PublicationsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MessagesStack = createStackNavigator();

/**************** /
 * Drawer Menu
 *****************/
const ParainsStack = createStackNavigator();
const ModificationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

import * as firebase from "firebase";
import {
  MESSAGES_REF,
  NOTIFICATION_REF,
  PUBLICATIONS_REF,
} from "../constants/FirebaseRefs";
import { AuthContext } from "../App";
import { getPublicite } from "../constants/constants";

// reducer jdid
// nouveau context
// messages  + notifs  + post

export const DataContext = createContext({});

const MainTabScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [publications, setPublications] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    // requet  , recuperation des info du base de donné
    // consomé firebase
    // initialisé les notifs
    // listeners

    // messages  -- user est emetteur ou recepteur
    // notifs -- user ==> recepteur

    firebase
      .database()
      .ref(NOTIFICATION_REF)
      .on("value", function (snapshot) {
        var notifs = [];
        // snapshot.map((snap) => snap.val());
        snapshot.forEach((snap) => {
          notifs = [...notifs, snap.val()];
        });

        setNotifications(notifs.filter((n) => n.id_recepteur == user.id));
      });

    firebase
      .database()
      .ref(MESSAGES_REF)
      .on("value", function (snapshot) {
        var MESSGS = [];
        // snapshot.map((snap) => snap.val());
        snapshot.forEach((snap) => {
          MESSGS = [...MESSGS, snap.val()];
        });
        setMessages(
          MESSGS.filter(
            (msg) => msg.id_recepteur == user.id || msg.id_emeteur == user.id
          )
        );
      });

    firebase
      .database()
      .ref(PUBLICATIONS_REF)
      .on("value", function (snapshot) {
        
        fetch(getPublicite)
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.data) {
              setPublications(responseJson.data);
            }
          })
          .catch((error) => {
            console.error("error==>");
            console.error(error);
          });
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        notifications,
        messages,
        publications,
      }}
    >
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        style={{ backgroundColor: "teal" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Fil d'actualité",
            tabBarColor: "teal",
            tabBarIcon: ({ color }) => (
              <Icon name="home-sharp" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsStackScreen}
          options={{
            tabBarLabel: "Notifications",
            tabBarColor: "teal",
            tabBarIcon: ({ color }) => (
              <Icon name="notifications-sharp" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Publication"
          component={PublicationStackScreen}
          options={{
            tabBarLabel: "Publication",
            tabBarColor: "teal",
            tabBarIcon: ({ color }) => (
              <Icon name="add-circle-sharp" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessageStackScreen}
          options={{
            tabBarLabel: "Messages",
            tabBarColor: "teal",
            tabBarIcon: ({ color }) => (
              <Icon name="chatbubble-ellipses-sharp" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarColor: "teal",
            tabBarIcon: ({ color }) => (
              <Icon name="person-sharp" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </DataContext.Provider>
  );
};
export default MainTabScreen;

//--------Stack de HOME ----------
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "teal",
      },
      headerTintColor: "#fff",
      headerTitleStyles: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Fil d 'actualité",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="teal"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

//-------Stack de notification-------
const NotificationsStackScreen = ({ navigation }) => (
  <NotificationsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "teal",
      },
      headerTintColor: "#fff",
      headerTitleStyles: {
        fontWeight: "bold",
      },
    }}
  >
    <NotificationsStack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="teal"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </NotificationsStack.Navigator>
);

//-------Stack de Publication--------
const PublicationStackScreen = ({ navigation }) => (
  <PublicationsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "teal",
      },
      headerTintColor: "#fff",
      headerTitleStyles: {
        fontWeight: "bold",
      },
    }}
  >
    <PublicationsStack.Screen
      name="Publication"
      component={PublicationsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="teal"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </PublicationsStack.Navigator>
);

//-------Stack de Profile--------
const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "teal",
      },
      headerTintColor: "#fff",
      headerTitleStyles: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="teal"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

//-------Stack de Message--------
const MessageStackScreen = ({ navigation }) => (
  <MessagesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "teal",
      },
      headerTintColor: "#fff",
      headerTitleStyles: {
        fontWeight: "bold",
      },
    }}
  >
    <MessagesStack.Screen
      name="Message"
      component={MessagesScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="teal"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </MessagesStack.Navigator>
);

//-------Stack de liste des parrains--------
const BookmarkStackScreen = ({ navigation }) => (
  <ParainsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "teal",
      },
      headerTintColor: "#fff",
      headerTitleStyles: {
        fontWeight: "bold",
      },
    }}
  >
    <ParainsStack.Screen
      name="Liste des parrains"
      component={ParainsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="teal"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
        headerRight: (
          <Button
            onPress={() => alert("This is a button!")}
            title="Info"
            color="#fff"
          />
        ),
      }}
    />
  </ParainsStack.Navigator>
);

//-------Stack modification--------
const ModificationStackScreen = ({ navigation }) => (
  <ModificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "teal",
      },
      headerTintColor: "#fff",
      headerTitleStyles: {
        fontWeight: "bold",
      },
    }}
  >
    <ModificationStack.Screen
      name="Modification"
      component={ModificationScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="teal"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </ModificationStack.Navigator>
);
