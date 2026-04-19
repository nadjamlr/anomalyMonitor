// Author: Nadja Müller
// Add Anomaly Screen

import { globalStyles } from '../../constants/styles';
import { StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';

export default function NewAnomalyScreen() {
  return (
    <View style={globalStyles.container}>

        <View style={globalStyles.heading}>
            <Text style={globalStyles.h2}>
                Create a report
            </Text>
            <Text style={globalStyles.h1}>
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
