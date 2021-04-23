import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PublicationItem = ({ item }) => {
  /**
   *  item = 
   *  {
            "id_publicite": "1",
            "titre": "Un cours interessant",
            "description": "waaaw c'eest une description ",
            "timestamp": "2206546496",
            "id_document": "1",
            "id_utilisateur": "3",
            "document": {
                "id_document": "1",
                "titre_document": "Cours java.pdf",
                "chemin_document": "http://www.orimi.com/pdf-test.pdf"
            },
            "utilisateur": {
                "id": "3",
                "name": "hajar_lyoubi",
                "email": "hajar@gmail.com",
                "password": "Hajar",
                "number": "0677778899",
                "user": "parrain",
                "filiere": "genie informatique",
                "ville": "Casablanca",
                "age": "19ans"
            }
       
    ]
}
   * 
   * 
   * 
   * 
   * 
   * 
   */
  return (
    <View stye={{ display: "flex", flexDirection: "row" }}>
      <View stye={{ display: "flex", flexDirection: "column" }}>
        <Text style={styles.row}>{item.titre}</Text>
        <Text style={styles.row2}>{item.description}</Text>
        <Text style={styles.row2}>{item.timestamp}</Text>
      </View>

      {/* show image/document  + author/user */}
    </View>
  );
};
export default PublicationItem;

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
