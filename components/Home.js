import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,  ScrollView} from 'react-native';
import TypeMenus from './TypeMenus';

export default function Home({ navigation }) {
  const onPressLaCarte = () => {
    navigation.navigate('LaCarte');
  };

  const onPressLeBar = () => {
    navigation.navigate('Bar');
  };
  const onPressContact = () => {
    navigation.navigate('Contact');
  };

  const [cards, setCards] = React.useState([
    {
      title: 'La Carte',
      picture: require('../img/laCarte.jpg'),
      action: onPressLaCarte,
    },
    {
      title: 'Le Bar',
      picture: require('../img/leBar.jpg'),
      action: onPressLeBar,
    },
    {
      title: 'Accès / Contacts',
      picture: require('../img/nousContacter.png'),
      action: onPressContact,
    },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Installé à Paris, nous vous accueillons tous les jours pour venir
          partager avec nous une cuisine traditionnelle faite maison à partir de
          produits frais et de saison.
        </Text>

        <View style={styles.container}>
          {cards.map((element) => (
            <TypeMenus
              title={element.title}
              picture={element.picture}
              onPress={element.action}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 0,
    marginTop: 24,
    fontSize: 12,
    textAlign: 'center',

  },

});
