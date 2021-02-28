import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Vegan({ navigation }) {
  const onPressHome = () => {
    navigation.navigate('Home');
  };

  const [cards, setCards] = React.useState([
    {
      title: 'Butternut farcie  : ',
      picture: require('../img/10.jpg'),
      descrption: 'Butternut farcie au quinoa, kale, noix de pécan, grenade & persil (12€)',
    },
    {
      title: 'Salade : ',
      picture: require('../img/11.jpg'),
      descrption: 'Salade de fruits aux feuilles de blettes et zestes d’orange(12€)',
    },
    {
      title: 'Soupe Minestrone d\'hiver : ',
      picture: require('../img/12.jpg'),
      descrption: 'haricots mungo , céleri branche, carottes, choux, laurier (12€)',
    },
    {
      title: 'Polenta crémeuse et mijoté de champignons : ',
      picture: require('../img/13.jpg'),
      descrption: 'Polenta, champignons, lentilles verstes(12€)',
    },
  ]);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        {cards.map((element) => (
          <View style={styles.plat}>
            <Image source={element.picture} style={styles.image} />
            <Text style={styles.texte}>
              {element.title} {element.descrption}
            </Text>
          </View>
        ))}

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
  title: {
    fontWeight: 'bold',
    fontSize: 28,
  },

  image: {
    borderRadius: 8,
    height: 150,
    width: 175,
    marginLeft: 25,
  },
  texte: {
    marginLeft: 25,
  },

  retourHome: {
    marginTop: 15,
    marginBtton: 20,
    fontWeight: 'bold',
    color: '#0000CD',
  },
  plat: {
    width: 250,
    height: 250,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
};
