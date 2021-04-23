//LISTE DES PARRAINS

import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
  Alert,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
} from "react-native";
import { AuthContext } from "../App";
//import ListView from "deprecated-react-native-listview";

import { parainListURL } from "../constants/constants";
import UserItem from "./UserItem";

const { width, height } = Dimensions.get("window");

const ItemSeparator = () => {
  return (
    <View style={{ height: 2, width: "100%", backgroundColor: "#D7CCC8" }} />
  );
};

const ParainsScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(parainListURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoading(false);
        setData(responseJson.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return isLoading ? (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={styles.MainContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
      <View style={styles.button}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
        <TextInput
          placeholder="Recherche..."
          placeholderTextColor="gray"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      <FlatList
        data={data.filter((e) =>
          e.name.toUpperCase().includes(search.toUpperCase())
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <UserItem item={item} />}
      />
    </View>
  );
};

export default ParainsScreen;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
  },

  row: {
    fontSize: 20,
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
  header: {
    height: 80,
    width: "100%",
    backgroundColor: "teal",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    width: "50%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
  },
  bookContainer: {
    flexDirection: "row",
    padding: 5,
  },
  image: {
    height: 150,
    width: 90,
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: width - 100,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "gray",
  },
});
