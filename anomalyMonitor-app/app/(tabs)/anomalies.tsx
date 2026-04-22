// Author: Nadja Müller
// List of Anomalies Screen


import { globalStyles } from '../../constants/styles';
import { Text, View, TouchableOpacity } from 'react-native';
import FadeScrollView from '../../components/FadeScrollView';
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

        <FadeScrollView style={globalStyles.scrollContainer}>
          {myAnomalies.length > 0 ? (
            myAnomalies.map((anomaly) => (
              <Link key={anomaly.title} href={`/anomaly/${anomaly.title}`} asChild>
                <TouchableOpacity>
                  <AnomalyCard
                    image={anomaly.url}
                    heading={anomaly.title}
                    date={anomaly.date}
                  />
                </TouchableOpacity>
              </Link>
            ))
          ) : (
            <Text style={globalStyles.p}>
              Currently no saved anomalies
            </Text>
          )}
        </FadeScrollView>
        
  </View>
  );
}
