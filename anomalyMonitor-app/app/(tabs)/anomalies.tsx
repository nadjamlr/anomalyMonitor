// Author: Nadja Müller
// List of Anomalies Screen

import { StyleSheet, Text, View, ScrollView} from 'react-native';
import ListedAnomaly from '../../components/ListedAnomaly';

export default function MyAnomaliesScreen() {
  return (
    <View style={styles.container}>

        <View style={styles.heading}>
            <Text style={styles.h2}>
                Assigned to you
            </Text>
            <Text style={styles.h1}>
                My Anomalies
            </Text>
        </View>

        <ScrollView style={styles.bodyContent}>
            <ListedAnomaly>
            </ListedAnomaly>
        </ScrollView>
        
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
  heading: {
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
  bodyContent: {
    width: "100%",
    flex: 8,
    flexDirection: "column",
  },
  navBar: {
    width: "100%",
    flex: 1,
  },
})
