import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
         source={require('../assets/galaxy-home.jpg')}
         style={{ width: '100%', height: '100%' }}
         resizeMode="cover"
      />
      </View>
      <View style={styles.textContainer}>
          <Text style={styles.h2}>
              Nasa Anomaly Monitor
          </Text>
          <Text style={styles.h1}>
              Home
          </Text>
          <Text style={styles.p}>
              Review the mission status, recent activity and the most important anomaly alerts in one place.
          </Text>
      </View>

  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050A25',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    gap: 28,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 3,
    backgroundColor:'#000',
    width: '100%',
  },
  textContainer: {
    flex: 6,
    flexDirection: "column",
  },
  h1: {
    fontSize: 48,
    color: "#fff",
    fontWeight: "600",
  },
  h2: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#ABDFFF",
    letterSpacing: 2,
  }, 
  p: {
    fontSize: 16,
    color: "#ABDFFF",
    marginTop: 16,
    lineHeight: 24,
  },
})
