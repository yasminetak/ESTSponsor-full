import React, { useContext } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  BackHandler,
  Alert
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";

import { AsyncStorage } from "react-native";
import { registerURL } from "../constants/constants";
import { AuthContext } from "../App";

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    number: "",
    user: "",
    filiere: "",
    ville: "",
    age: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const { setUser } = useContext(AuthContext);

  const handleSignUp = () => {
    // request au backend
    console.log("trying to sign up");

    fetch(registerURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((reponse) => {
        console.log(" get a reponse");
        reponse.json().then((json) => {
          console.log(" signed succes");

          // AsyncStorage.setItem(constants.USERSTORAGE, json.data);
          _storeData(json.data);
          setUser(json.data);

          // navigation.navigate("ProfileScreen", {
          //      user: receavedUser});
        });
      })
      .catch((err) => {
        console.log(" error", err);
      });
  };

  const _storeData = async (user) => {
    try {
      await AsyncStorage.setItem(constants.USERSTORAGE, JSON.stringify(user));
    } catch (error) {
      console.log(" can't save in ayinc storage ");
    }
  };

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  
 const handleNameChange = (val) => {
    setData({
      ...data,
      name: val,
    });
  };

  const handleNumberChange = (val) => {
    setData({
      ...data,
      number: val,
    });
  };
  const handleUserChange = (val) => {
    setData({
      ...data,
      user: val,
    });
  };

  const handleFiliereChange = (val) => {
    setData({
      ...data,
      filiere: val,
    });
  };


  const handleVilleChange = (val) => {
    setData({
      ...data,
      ville: val,
    });
  };
  const handleAgeChange = (val) => {
    setData({
      ...data,
      age: val,
    });
  };

// BACK BUTTON
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>BACK</Text>
          </TouchableOpacity>
        </View>
        <StatusBar backgroundColor="teal" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Inscrivez-vous maintenant!</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Nom d'utilisateur</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Saisissez votre nom d'utilisateur"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleNameChange(val)}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Email
          </Text>
          <View style={styles.action}>
            <Entypo name="email" color="#05375a" size={20} />
            <TextInput
              placeholder="Saisissez votre email"
              style={styles.textInput}
              keyboardType={"email-address"}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Mot de passe
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Saisissez votre mot de passe"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity OnPress={updateSecureTextEntry}>
              <Feather name="eye-off" color="grey" size={20} />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Confirmez votre mot de passe
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirmez votre mot de passe"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity OnPress={updateSecureTextEntry}>
              <Feather name="eye-off" color="grey" size={20} />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Numéro de téléphone
          </Text>
          <View style={styles.action}>
            <FontAwesome name="phone" color="#05375a" size={20} />
            <TextInput
              placeholder="Saisissez votre numéro de téléphone"
              style={styles.textInput}
              keyboardType={"numeric"}
              autoCapitalize="none"
              onChangeText={(val) => handleNumberChange(val)}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Parrain ou filleul ?
          </Text>
          <View style={styles.action}>
            <Entypo name="users" color="#05375a" size={20} />
            <TextInput
              placeholder="Qui etes vous ?"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleUserChange(val)}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Fillière ?
          </Text>
          <View style={styles.action}>
            <Entypo name="graduation-cap" color="#05375a" size={20} />
            <TextInput
              placeholder="Quelle est votre fillière ?"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleFiliereChange(val)}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Ville
          </Text>
          <View style={styles.action}>
            <Entypo name="location" color="#05375a" size={20} />
            <TextInput
              placeholder="Saisissez votre ville"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleVilleChange(val)}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Age
          </Text>
          <View style={styles.action}>
            <Entypo name="cake" color="#05375a" size={20} />
            <TextInput
              placeholder="Saisissez votre Age"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleAgeChange(val)}
            />
          </View>
        
          <View style={styles.button}>
            <LinearGradient colors={["purple", "teal"]} style={styles.signIn}>
              <TouchableOpacity
                onPress={() => {
                  handleSignUp();
                }}
                style={[
                  styles.signIn,
                  {
                    borderColor: "teal",
                    boderWidth: 1,
                    marginTop: 1,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  {" "}
                  S'inscrire
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 70,
    marginTop: 60,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
