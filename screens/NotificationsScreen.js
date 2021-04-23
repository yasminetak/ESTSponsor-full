import * as React from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import { DataContext } from "./MainTabScreen";
import Notification from "./Notification";

const ItemSeparator = () => {
  return (
    <View style={{ height: 2, width: "100%", backgroundColor: "#D7CCC8" }} />
  );
};

const NotificationsScreen = ({ navigation }) => {
  const { notifications } = React.useContext(DataContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Notification item={item} />}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
