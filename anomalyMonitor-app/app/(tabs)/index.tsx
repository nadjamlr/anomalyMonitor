// Author: Nadja Müller
// Home Screen Screen

import { globalStyles } from '../../constants/styles';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>

      <View style={globalStyles.imageContainer}>
        <Image
         source={require('../../assets/galaxy-home.jpg')}
         style={{ width: '100%', height: '100%' }}
         resizeMode="cover"
      />
      </View>
      <View style={styles.textContainer}>
          <Text style={globalStyles.h2}>
              Nasa Anomaly Monitor
          </Text>
          <Text style={globalStyles.h1}>
              Home
          </Text>
          <Text style={globalStyles.p}>
              Review the mission status, recent activity and the most important anomaly alerts in one place.
          </Text>
      </View>
  </View>

  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 6,
    flexDirection: "column",
  },
})
