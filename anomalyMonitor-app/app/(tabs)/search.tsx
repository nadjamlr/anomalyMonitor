// Author: Nadja Müller
// Search for Anomaly Screen

import ListedAnomaly from '../../components/ListedAnomaly';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>

        <View style={styles.heading}>
            <Text style={styles.h2}>
                Explore Records
            </Text>
            <Text style={styles.h1}>
                APOD Search
            </Text>
        </View>

        <View style={styles.filter}>
        </View>
        <Button
            title="Search">
        </Button>

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
  filter: {
    width: "100%",
    fontSize: 12,
  },
  button: {
    width: "100%",
    fontSize: 16,
  },
  navBar: {
    width: "100%",
    flex: 1,
  },
})
