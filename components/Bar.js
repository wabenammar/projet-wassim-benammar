import * as React from 'react';
import { View, Text, TouchableOpacity, Image , ScrollView} from 'react-native';

export default function Contact({ navigation }) {
  const onPressHome = () => {
    navigation.navigate('Home');
  };

  const [cocktails, setCocktails] = React.useState([
    {
      title: 'CARROUSEL :',
      composition: 'Mandarine Impériale, Gin, Nectar d’abricot',
    },

    {
      title: 'PANTHEON : ',
      composition: 'Vodka, Malibu Coco, Passoã, Nectar de banane',
    },
    {
      title: 'VOSGES : ',
      composition: 'Cognac, Grand Marnier, Jus de citron frais',
    },
    {
      title: 'MENILMONTANT : ',
      composition: 'Concombre frais, Martini Blanc, Midori Melon',
    },
  ]);

  const [bellinis, setBellinis] = React.useState([
    {
      title: 'BELLINI ABRICOT :',
      composition: 'Nectar abricot, liqueur Drambuie, Champagne',
    },

    {
      title: 'ROSSINI : ',
      composition: 'Liqueur Chambord Royale, Champagne',
    },
    {
      title: 'NAPOLI : ',
      composition: 'Cognac, Grand Marnier, Jus de citron frais',
    },
    {
      title: 'MENILMONTANT : ',
      composition: 'Amaretto, Nectar Framboise, Sirop basilic, Champagne',
    },
  ]);

  const [champagnes, setChampagne] = React.useState([
    {
      title: 'Henricot :',
      prix: '19 €',
    },

    {
      title: 'Moët et Chandon 2012 : ',
      prix: '19 €',
    },
    {
      title: 'Henriot Blanc de Blancs : ',
      prix: '22 €',
    },
    {
      title: 'Joseph Perrier Blanc de Blancs : ',
      prix: '23 €',
    },
  ]);

  return (
    <ScrollView>
    <View style={{ flex: 1 , alignItems: 'center'}}>
      <View style={styles.container}>
        <Text style={styles.title}>COCKTAILS : 19 € (22cl)</Text>
        {cocktails.map((element) => (
          <View>
            <Text style={styles.texte}>
              {element.title} {element.composition}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>BELLINIS : 19 € (16cl)</Text>
        {bellinis.map((element) => (
          <View>
            <Text style={styles.texte}>
              {element.title} {element.composition}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Coupe de champagne</Text>
        {champagnes.map((element) => (
          <View>
            <Text style={styles.texte}>
              {element.title} {element.prix}
            </Text>
          </View>
        ))}
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
  title: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 15,
  },

  texte: {
    marginTop: 20,
    fontSize: 12,
    marginLeft: 15,
  },

  retourHome: {
    marginTop: 20,
    marginLeft: 25,
    fontWeight: 'bold',
    color: '#0000CD',
  },

  container: {
    width: 250,
    height: 300,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
};
