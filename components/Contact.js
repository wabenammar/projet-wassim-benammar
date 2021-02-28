import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  WebGLVertexArrayObject,
  Input,
  Form, 
  Select,
  Button, 
  Dimensions, 
  ScrollView
} from 'react-native';
import MapView from 'react-native-maps';
import objets from './objets';

export default function Contact({ navigation }) {
  const onPressHome = () => {
    navigation.navigate('Home');
  };
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [objet, setObjet] = React.useState('');
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Objet: ${objet}
      Accepted Terms: ${acceptedTerms}
    `);
    event.preventDefault();
  };

  var markers = [
  {
    latitude: 48.8885477,
    longitude: 2.2896249,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];

  return (
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={styles.Adresse}>
        <Text style={styles.title}>Accès</Text>
        <Text style={styles.texte}>
          Ligne 2 - Blanche ou Ligne 12 - Abesses
        </Text>
      </View>
      <View style={styles.Adresse}>
        <Text style={styles.title}>Adresse</Text>
        <Text style={styles.texte}>Le Restaurant</Text>
        <Text style={styles.texte}>32 rue Carnot</Text>
        <Text style={styles.texte}>Paris</Text>
        <Text style={styles.texte}>+33 1 00 00 00 00</Text>
      </View>

        <MapView 
              region={{
                latitude: 48.8885477,
                longitude: 2.2896249,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
                
              }}
             style={styles.mapStyle}>
        <MapView.Marker
            coordinate={{latitude: 48.8885477,
            longitude: 2.2896249}}
            title="title"
            description="description"
         />

        </MapView> 

      <View style={styles.horaires}>
        <Text style={styles.title}>Accueil</Text>
        <Text style={styles.texte}>Lundi / Mardi : 18h30 - 23h</Text>
        <Text style={styles.texte}>Mercredi à Vendredi : 18h30 - 23h</Text>
        <Text style={styles.texte}>Samedi : 12h - 15h et 18h30 - 23h30</Text>
        <Text style={styles.texte}>Dimanche : 12h - 15h et 18h30 - 23h</Text>
      </View>

      <TouchableOpacity>
        <Text onPress={onPressHome} style={styles.retourHome}>
          Retour à l'accueil
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = {

    mapStyle: {
    width: Dimensions.get('window').width-40,
    height: Dimensions.get('window').height/2,
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  text: {
    fontWeight: 'bold',
  },

  Adresse: {
    marginTop: 20,
    marginLeft: 25,
  },

  horaires: {
    marginTop: 20,
    marginLeft: 25,
  },

  retourHome: {
    marginTop: 20,
    marginLeft: 25,
    fontWeight: 'bold',
    color: '#0000CD',
  },

};
