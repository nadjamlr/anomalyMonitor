// Author: Nadja Müller
// Add Anomaly Screen


import { globalStyles } from '../../constants/styles';
import Button from '../../components/Button';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';


export default function AddScreen() {
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
                style={globalStyles.input}
                value="string"
                placeholder="Name">
            </TextInput>
            <TextInput
                style={globalStyles.input}
                value="string"
                placeholder="Description">
            </TextInput>
            <TextInput
                style={globalStyles.input}
                value="string"
                placeholder="Image">
            </TextInput>
            <Button
                text="Save anomaly"
                onClick={}>
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
  button: {
    width: "100%",
    fontSize: 16,
  },
})
