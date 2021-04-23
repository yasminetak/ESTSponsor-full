//PROFILE SCREEN

import * as React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AuthContext } from "../App";

const ProfileScreen = ({ navigation,props }) => {
  const { user } = React.useContext(AuthContext);

  // const {user} = route.params;
  //export default class ProfileScreen extends React.Component {

  return (
    /*<View style={styles.container}>
      <Image
        source={require("../assets/posts/avatar.jpg")}
        style={{ width: 20, height: 20 }}
      ></Image>
      <Text>L'auréat de l'EST</Text>
      <Text>{user.email}</Text>
      <Text>{user.name}</Text>
      <Text>{user.number}</Text>
    </View>
  );*/

    <View>
      <ScrollView>
        <View
          style={{
            padding: 80,
            width: "100%",
            backgroundColor: "#000",
            heignt: 300,
          }}
        >
          <TouchableOpacity>
            <View></View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItem: "center" }}>
          <Image
            source={require("../assets/posts/avatar.jpg")}
            style={{
              alignSelf: "center",
              width: 140,
              height: 140,
              borderRadius: 100,
              marginTop: -80,
            }}
          ></Image>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              alignSelf: "center",
              padding: 10,
            }}
          >
            {user.name}
          </Text>
          <Text style={styles.shortBio}>
            Nous aurons le destin que nous aurons mérité , Albert Einstein.
          </Text>
          <View style={styles.profileTabsContainer}>
            <View style={styles.tabContainer}>
              <View style={styles.tabImageContainer}>
                <AntDesign
                  name="pluscircle"
                  size={25}
                  color="black"
                  onPress={() => {
                    navigation.navigate("PublicationsScreen");
                  }}
                />
              </View>
              <Text style={styles.tabText}>Post</Text>
            </View>
            <View style={styles.tabContainer}>
              <View style={styles.tabImageContainer}>
                <MaterialCommunityIcons
                  name="account-edit"
                  size={25}
                  color="black"
                  onPress={() => navigation.navigate("Modification")}
                />
              </View>
              <Text style={styles.tabText}>Modifier</Text>
            </View>
            <View style={styles.tabContainer}>
              <View style={styles.tabImageContainer}>
                <Ionicons name="logo-facebook" size={25} color="black" />
              </View>
              <Text style={styles.tabText}>Facebook</Text>
            </View>
            <View style={styles.tabContainer}>
              <View style={styles.tabImageContainer}>
                <Feather name="more-horizontal" size={25} color="black" />
              </View>
              <Text style={styles.tabText}>Plus..</Text>
            </View>
          </View>
          <View style={styles.devider}></View>
          <View style={styles.aboutheadingContainer}>
          <Text style={styles.aboutText}>A propos : </Text>
          </View>
          <View style= {styles.workContainer}>
          <Entypo name="graduation-cap" color="#05375a" size={20} style={{ marginTop: 10, marginLeft: 5}} />
          <Text style= {{ fontSize: 18 , marginLeft: 10 ,marginTop: 10}}>Fillière : </Text>
          <Text style= {{ fontSize: 18 , fontWeight: 'bold', marginLeft: 5 ,marginTop: 10}}>{user.filiere}</Text>
          </View>
          <View style= {styles.workContainer}>
          <Entypo name="users" color="#05375a" size={20} style={{ marginTop: 10, marginLeft: 5}} />
          <Text style= {{ fontSize: 18 , marginLeft: 10 ,marginTop: 10}}>Utilisateur :</Text>
          <Text style= {{ fontSize: 18 , fontWeight: 'bold', marginLeft: 5 ,marginTop: 10}}>{user.user}</Text>
          </View>
          <View style= {styles.workContainer}>
          <Entypo name="location" color="#05375a" size={20} style={{ marginTop: 10, marginLeft: 5}} />
          <Text style= {{ fontSize: 18 , marginLeft: 10 ,marginTop: 10}}>Ville : </Text>
          <Text style= {{ fontSize: 18 , fontWeight: 'bold', marginLeft: 5 ,marginTop: 10}}>{user.ville}</Text>
          </View>
          <View style= {styles.workContainer}>
          <Entypo name="cake" color="#05375a" size={20} style={{ marginTop: 10, marginLeft: 5}} />
          <Text style= {{ fontSize: 18 , marginLeft: 10 ,marginTop: 10}}>Age : </Text>
          <Text style= {{ fontSize: 18 , fontWeight: 'bold', marginLeft: 5 ,marginTop: 10}}>{user.age}</Text>
          </View>
          <View style= {styles.workContainer}>
          <Entypo name="phone" color="#05375a" size={20} style={{ marginTop: 10, marginLeft: 5}} />
          <Text style= {{ fontSize: 18 , marginLeft: 10 ,marginTop: 10}}>Téléphone : </Text>
          <Text style= {{ fontSize: 18 , fontWeight: 'bold', marginLeft: 5 ,marginTop: 10}}>{user.number}</Text>
          </View>
          <View style= {styles.workContainer}>
          <Entypo name="email" color="#05375a" size={20} style={{ marginTop: 10, marginLeft: 5}} />
          <Text style= {{ fontSize: 18 , marginLeft: 10 ,marginTop: 10}}>Email : </Text>
          <Text style= {{ fontSize: 18 , fontWeight: 'bold', marginLeft: 5 ,marginTop: 10}}>{user.email}</Text>
          </View>

          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          >
            <Text style={styles.userBtnTxt}>Déconnexion</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userBtn: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "85%",
    height: "10%",
    padding: 20,
    paddingBottom: 20,
    borderRadius: 10,
    shadowOpacity: 40,
    elevation: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  shortBio: {
    alignSelf: "center",
    fontSize: 16,
    color: "gray",
  },
  profileTabsContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabContainer: {
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  tabImageContainer: {
    height: 50,
    width: 50,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  devider: {
    height: 3,
    width: "90%",
    backgroundColor: "lightgray",
    alignSelf: "center",
    marginTop: 5,
  },
  aboutheadingContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  aboutText: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 200,
    marginTop: 3,
  },
  workContainer: {
    flexDirection: 'row',
  },
});
