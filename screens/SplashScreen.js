import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image
                animation="bounceIn"
                animation-duration="1500"
            source={require('../assets/logo_size.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >

                <Text style={styles.title}>Vous souhaitez parrainer ou vous cherchez un parrain?</Text>
                <Text style={styles.text}>ESTSponsor vous donne l'opportunité d'élargir votre cercle d'amis et d'ajouter des éxperiences à votre parcours .</Text>
                <Text style={styles.text}>Une éxperience qui se révèle enrichissante à bien des égards.</Text>

            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Connectez-vous</Text>
                    <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
               <LinearGradient
                  colors={['teal', 'purple']}
                  style={styles.signup}>
                   <Text style={styles.textSign}> Inscrivez vous </Text>
                   <MaterialIcons
                      name="navigate-next"
                      color="#fff"
                      size={20}
                      />
               </LinearGradient>
            </TouchableOpacity>
            </View>
            </Animatable.View>

      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 25,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5,
      fontSize: 16
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 160,
      height: 40,
     justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      marginTop: 1

  },
  signup: {
      width: 160,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      marginTop: 10

  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
