import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TypeMenus from "./TypeMenus";

export default function LaCarte({ navigation }) {

  const onPressHome = () => {
    navigation.navigate('Home')
  }

  const onPressViandes = () => {
    navigation.navigate("Viandes");
  }

  const onPressPoissons = () => {
    navigation.navigate("Poissons");
  }

  const onPressVegan = () => {
    navigation.navigate("Vegan");
  }


  const [cards, setCards] = React.useState([
    { title: "Les viandes", picture: require('../img/Viandes.jpg'),action:onPressViandes}, 
    { title: "Les poisson", picture: require('../img/Poissons.jpg'), action:onPressPoissons}, 
    { title: "Vegan", picture: require('../img/Vegan.jpg'),action:onPressVegan}, 
    ])

  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>

      {cards.map(element => <TypeMenus title={element.title} picture={element.picture} onPress={element.action} /> )}
    
      <TouchableOpacity>
        <Text onPress={onPressHome} style={styles.retourHome}>
            Aller sur la home
        </Text>
      </TouchableOpacity>
  </View>
  );
}

const styles = {
  title: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  profile: {
    alignSelf: 'center',
    borderWidth: 1,
    marginBottom: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  image: {
    borderRadius: 8,
    height: 250,
    width: 300,
  },
  text: {
    fontWeight: 'bold',
  }, 

  retourHome: {
    marginTop: 20,
    fontWeight: 'bold',
    color: "#0000CD",
  }, 
  button: {
    backgroundColor: "orange",
    borderRadius: 4,
padding: 10,
  }
}
