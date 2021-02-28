import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function Card({ navigation, onPress, title, picture  }) {

  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<TouchableOpacity onPress={onPress}>
     <Image style={styles.profile} source={picture} />

</TouchableOpacity>
    <Text style={styles.title}>{title}</Text>

  
    </View>
  );
}

const styles = {
  profile: {
    alignSelf: 'center',
    borderWidth: 0,
    marginBottom: 0,
    width: 120,
    height: 120,
    borderRadius: 25,
  },
  image: {
    borderRadius: 8,
    height: 350,
    width: 400,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  }, 
  button: {
    backgroundColor: "orange",
    borderRadius: 4,
padding: 10,
  }
}
