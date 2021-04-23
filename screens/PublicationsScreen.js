//PUBLICATIONS SCREEN

import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import styled from "styled-components";
import { DataContext } from "./MainTabScreen";
import PublicationCreator from "./PublicationCreator";
import PublicationItem from "./PublicationItem";

const ItemSeparator = () => {
  return (
    <View style={{ height: 2, width: "100%", backgroundColor: "#D7CCC8" }} />
  );
};

const PublicationsScreen = ({ navigation }) => {
  const { publications } = React.useContext(DataContext);
  return (
    <SafeAreaView style={styles.container}>
      
        <PublicationCreator style={styles.child}></PublicationCreator>
      

      <FlatList
        style={{ flex: 1 }}
        data={publications}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <PublicationItem item={item} />}
      />
    </SafeAreaView>
  );
};

export default PublicationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  child: {
    backgroundColor: "green",
  },
});

