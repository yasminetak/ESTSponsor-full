import React from 'react'
import {View, Text, StyleSheet, StatusBar, TextInput, Image, Button, Dimensions, TouchableOpacity} from 'react-native'
import {FlatList} from 'react-native-gesture-handler';

const {width, height}= Dimensions.get('window');

export default class ListeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }

  componentDidMount() {
    var data = [
      {
        name: 'Aicha Laroussi',
        author: 'Parrain génie éléctrique',
        //img: require('./app/assets/1.jpeg'),
        description:
          'Informations.....',
      },
      {
        name: 'Alaa Kamili',
        author: 'Parrain génie informatique',
        //img: require('./app/assets/1.jpeg'),
        description:
          'Informations......',
      },
      {
        name: 'Aya Nakri',
        author: 'Parrain finance comptabilité',
        //img: require('./app/assets/4.jpeg'),
        description:
          'Informations......',
      },
      {
        name: 'Aymen Nabih',
        author: 'Parrain génie éléctrique',
        //img: require('./app/assets/5.jpeg'),
        description:
          'Informations.......',
      },
      {
        name: 'Badr Yahiani',
        author: 'Parrain technique de commercialisation',
        //img: require('./app/assets/1.jpeg'),
        description:
          'Informations....',
      },
      {
        name: 'Chamseddoha Arhad',
        author: 'Parrain finance comptabilité',
        //img: require('./app/assets/6.jpeg'),
        description:
          'Informations.......',
      },
      {
        name: 'Hajar Adnani',
        author: 'Parrain génie des procédés',
        //img: require('./app/assets/6.jpeg'),
        description:
          'Informations.......',
      },
      {
        name: 'Hajar Belkadi',
        author: 'Parrain génie des procédés',
        //img: require('./app/assets/6.jpeg'),
        description:
          'Informations.......',
      },
      {
        name: 'Hajar Lyoubi',
        author: 'Parrain génie informatique',
        //img: require('./app/assets/3.jpeg'),
        description:
          'informations.....',
      },
      {
        name: 'Marouane Bennani',
        author: 'Parrain génie mécanique',
        //img: require('./app/assets/6.jpeg'),
        description:
          'Informations.......',
      },
      {
        name: 'Saad Khalis',
        author: 'Parrain génie mécanique',
        //img: require('./app/assets/6.jpeg'),
        description:
          'Informations.......',
      },
      {
        name: 'Saloua Chakour',
        author: 'Parrain génie éléctrique',
        //img: require('./app/assets/6.jpeg'),
        description:
          'Informations.......',
      },
      {
        name: 'Yasmine Takatart',
        author: 'Parrain génie informatique',
        //img: require('./app/assets/2.jpeg'),
        description:
          'Information......'
      },
      {
        name: 'Youssef Jidri',
        author: 'Parrain Technique de commercialisation',
        //img: require('./app/assets/6.jpeg'),
        description:
          'Informations.......',
      },
      {
        name: 'Zineb Sebti',
        author: 'Parrain génie informatique',
        //img: require('./app/assets/1.jpeg'),
        description:
          'Informations....',
      },
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = event => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter(l => l.name.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {

    return (
      <View style={{height: 10, width: '100%', backgroundColor: '#e5e5e5'}} />
    );
  };

  render() {
    console.disableYellowBox = true;

    return (

      <View style={styles.container}>
        <StatusBar barStyle="light-content"  />
        <View style={styles.header}>
          <TextInput
            placeholder="Enter Text..."
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({item, index}) => {
          return (
              <View style={styles.bookContainer}>
                <Image style={styles.image} source={item.img} />
                <View style={styles.dataContainer}>
                  <Text numberOfLines={1} style={styles.title}>
                    {item.name}
                  </Text>
                  <Text numberOfLines={4} style={styles.description}>
                    {item.description}
                  </Text>
                  <Text style={styles.author}>{item.author}</Text>

                  <Button
                    onPress={()=>{}}
                    title="Demander parrainage"
                    //color="#841584"
                    color= 'teal'

                    accessibilityLabel="Learn more about this purple button"
                    />

                  <Button
                  onPress={()=>{}}
                  title="Voir profil"
                  color="purple"
                  accessibilityLabel="Learn more about this purple button"
                  />
              </View>
              </View>

            );
        }}
        />
      </View>
    );
};
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
  },
  bookContainer: {
    flexDirection: 'row',
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
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  author: {
    fontSize: 16,
  },
});
