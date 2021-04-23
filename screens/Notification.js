import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from "../App";
import TypeNotif from "../constants/TypeNotif";
import moment from "moment";
import { DATE_FORMAT, createNotificationsURL } from "../constants/constants";
import { NOTIFICATION_REF } from "../constants/FirebaseRefs";

import * as firebase from "firebase";

const Notification = ({ item }) => {
  const [accepted, setAccepted] = useState(false);
  const [refused, setRefused] = useState(false);
  const { user } = React.useContext(AuthContext);

  const accepter = () => {
    const data = {
      contenu: `${user.name} a accepté votre demande de parrainage`,
      id_emeteur: user.id,
      id_recepteur: item.id_emeteur,
      type: TypeNotif.RESPONSE,
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
        if (responseJson.data) {
          firebase.database().ref(NOTIFICATION_REF).push(responseJson.data);
          setAccepted(true);
        }
      })
      .catch((error) => {
        console.error("error==>");
        console.error(error);
      });
  };

  const refuser = () => {
    // needs to be saved in database // again ?
    setRefused(true);
  };
  const sendMessage = () => {

      
    // navigate to message scrreeeen with item  ,
    // needs to be saved in database // again ?
  };

  return (
    <View stye={{ display: "flex", flexDirection: "row" }}>
      <View stye={{ display: "flex", flexDirection: "column" }}>
        <Text style={styles.row}>{item.contenu}</Text>
        <Text style={styles.row2}>{item.timestamp}</Text>
      </View>
      {item.type == TypeNotif.REQUEST ? (
        <View stye={{ display: "flex", flexDirection: "row" }}>
          <Button
            style={{ padding: 1 }}
            onPress={accepter}
            title="Accepter"
            color="teal"
            disabled={accepted}
          />
          <Button
            style={{ padding: 1, border: 20 }}
            onPress={refuser}
            title="Refuser"
            color="#d02860"
            disabled={refused}
          />
        </View>
      ) : (
        <View stye={{ display: "flex", flexDirection: "row" }}>
          <Button
            style={{ padding: 1 }}
            onPress={accepter}
            title="Envoyez un message"
            color="teal"
            disabled={sendMessage}
          />
        </View>
      )}
    </View>
  );
};
export default Notification;

const styles = StyleSheet.create({
  row: {
    fontSize: 15,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  row2: {
    fontSize: 13,
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
