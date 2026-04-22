// Author: Nadja Müller
// List of Anomalies Screen


import { globalStyles } from '../../constants/styles';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import AnomalyCard from '../../components/AnomalyCard';
import { Link } from 'expo-router'
import { useAnomaly } from '../../context/AnomalyContext';


export default function AnomaliesScreen() {

  const { myAnomalies } = useAnomaly()

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
          {myAnomalies.map((anomaly) => (
            <Link key={anomaly.title} href={`/anomaly/${anomaly.title}`} asChild>
              <TouchableOpacity>
                <AnomalyCard 
                  image={anomaly.url} 
                  heading={anomaly.title} 
                  date={anomaly.date}
                />
              </TouchableOpacity>
            </Link>
          ))}
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
})
