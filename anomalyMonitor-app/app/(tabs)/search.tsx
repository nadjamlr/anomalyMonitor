// Author: Nadja Müller
// Search for Anomaly Screen

import { globalStyles } from '../../constants/styles';
import ListedAnomaly from '../../components/AnomalyCard';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';


export default function SearchScreen() {
  return (
    <View style={globalStyles.container}>

        <View style={globalStyles.heading}>
            <Text style={globalStyles.h2}>
                Explore Records
            </Text>
            <Text style={globalStyles.h1}>
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
})
