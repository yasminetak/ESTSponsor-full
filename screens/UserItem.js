import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../App";
import TypeNotif from "../constants/TypeNotif";
import moment from "moment";
import { DATE_FORMAT, createNotificationsURL } from "../constants/constants";
import { NOTIFICATION_REF } from "../constants/FirebaseRefs";

import * as firebase from "firebase";

const UserItem = ({ item }) => {
  const [showAll, setShowAll] = useState(false);
  const [already, setAlready] = useState(false);
  const { user } = React.useContext(AuthContext);

  const askForParrainage = () => {
    const data = {
      contenu: `${user.name} vous a envoyé une demande de parrainage`,
      id_emeteur: user.id,
      id_recepteur: item.id,
      type: TypeNotif.REQUEST,
      timestamp: moment().format(DATE_FORMAT),
    };

    fetch(createNotificationsURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        
        console.log("responseJson ===+> ");
        console.log(responseJson);
        if (responseJson.data) {
          firebase.database().ref(NOTIFICATION_REF).push(responseJson.data);
          setAlready(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <Text style={styles.row}>{item.name}</Text>
      <Text style={styles.row2}>({item.filiere})</Text>
      <Button
        style={{ padding: 1 }}
        onPress={askForParrainage}
        title="Demander parrainage"
        color="teal"
        disabled={item.relations > 0 || already}
      />
      <Button
        style={{ padding: 1, border: 20 }}
        onPress={() => setShowAll(!showAll)}
        title="Voir Profil"
        color="#d02860"
      />
      {showAll && (
        <View style={{ alignItem: "center" }}>
          {/* name,
            email, 
            number,
            user,
            age, 
            ville,
            filiere */}
          <Image
            source={require("../assets/posts/avatar.jpg")}
            style={{
              alignSelf: "center",
              width: 70,
              height: 70,
              borderRadius: 100,
              marginTop: -5,
            }}
          ></Image>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              alignSelf: "center",
              padding: 10,
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: -250,
              marginTop: -10,
            }}
          >
            <Button title={item.user} color="black" onPress={() => {}} />
          </View>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginRight: -200,
              paddingLeft: 5,
              marginTop: -40,
            }}
          >
            <Button title={item.filiere} color="black" onPress={() => {}} />
          </View>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>{item.number}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>{item.email}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>{item.age}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>{item.ville}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>{item.filiere}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default UserItem;

const styles = StyleSheet.create({
  row: {
    fontSize: 23,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  row2: {
    fontSize: 18,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 10,
    color: "gray",
  },
  userBtn: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "85%",
    height: "9%",
    padding: 20,
    paddingBottom: 20,
    borderRadius: 10,
    shadowOpacity: 40,
    elevation: 15,
    marginTop: 15,
    marginBottom: 20,
  },
});
