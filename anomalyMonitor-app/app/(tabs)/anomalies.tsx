// Author: Nadja Müller
// List of Anomalies Screen

import { globalStyles } from '../../constants/styles';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import ListedAnomaly from '../../components/ListedAnomaly';

export default function MyAnomaliesScreen() {
  return (
    <View style={globalStyles.container}>

        <View style={globalStyles.heading}>
            <Text style={globalStyles.h2}>
                Assigned to you
            </Text>
            <Text style={globalStyles.h1}>
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
  imageContainer: {
    flex: 3,
    width: '100%',
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
