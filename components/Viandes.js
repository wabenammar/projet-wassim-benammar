import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Viandes({ navigation }) {
  const onPressHome = () => {
    navigation.navigate('Home');
  };

  const [cards, setCards] = React.useState([
    {
      title: 'Smoked Chicken  : ',
      picture: require('../img/1.jpg'),
      descrption: '1/2 Poulet fumé accompagné de petits légumes (18€)',
    },
    {
      title: 'Spare Ribs : ',
      picture: require('../img/2.jpg'),
      descrption: 'Travers de cochon accompagnés de pommes de terre((16€)',
    },
    {
      title: 'Beef Rib 500G : ',
      picture: require('../img/3.jpg'),
      descrption: 'Travers de bœuf accompagné de petits légumes (24€)',
    },
    {
      title: 'Tartare de boeuf : ',
      picture: require('../img/4.jpg'),
      descrption: 'accompagné de petites crudités (15€)',
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
