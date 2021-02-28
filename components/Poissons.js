import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Poissons({ navigation }) {
  const onPressHome = () => {
    navigation.navigate('Home');
  };

  const [cards, setCards] = React.useState([
    {
      title: 'Bar grillé : ',
      picture: require('../img/6.jpg'),
      descrption: 'Sauce beurre blanc, Ratatouille (18€)',
    },
    {
      title: 'Dos de Cabillaud : ',
      picture: require('../img/7.jpg'),
      descrption: 'Vinigrette de citron, purée de pommes de terre ((16€)',
    },
    {
      title: 'Steak de thon grillé : ',
      picture: require('../img/8.jpg'),
      descrption: 'accompagné de Ratatouille (18€)',
    },
    {
      title: 'Assiette trois tartares : ',
      picture: require('../img/9.jpg'),
      descrption:
        'Tartare Saumon-avocat, Dorade-Saumon-Avocat, Avocat-Srimi (15€)',
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
