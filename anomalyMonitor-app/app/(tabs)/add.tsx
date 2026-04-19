// Author: Nadja Müller
// Add Anomaly Screen

import { StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';

export default function NewAnomalyScreen() {
  return (
    <View style={styles.container}>

        <View style={styles.heading}>
            <Text style={styles.h2}>
                Create a report
            </Text>
            <Text style={styles.h1}>
                New Anomaly
            </Text>
        </View>

        <ScrollView style={styles.bodyContent}>
            <TextInput
                style={styles.input}
                value="string"
                placeholder="Name">
            </TextInput>
            <TextInput
                style={styles.input}
                value="string"
                placeholder="Description">
            </TextInput>
            <TextInput
                style={styles.input}
                value="string"
                placeholder="Image">
            </TextInput>
            <Button
                title="Save anomaly">
            </Button>

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
  input: {
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
