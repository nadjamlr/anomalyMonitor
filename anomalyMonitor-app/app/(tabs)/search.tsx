// Author: Nadja Müller
// Search for Anomaly Screen


import { globalStyles } from '../../constants/styles';
import SearchCard from '../../components/SearchCard';
import Button from '../../components/Button'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router'
import { useAnomaly } from '../../context/AnomalyContext';
// import { filterAnomalies } from '../../'


export default function SearchScreen() {

  const allAnomalies = useAnomaly()

  function filterAnomalies() {
    // TODO: implement function
    console.log("Anomalies get filtered after parameters")
  }

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

      <ScrollView style={styles.bodyContent}>

        <View style={globalStyles.flexHorizontal}>
          <View style={styles.filter}>
            <Text style={globalStyles.h2}>
              From
            </Text>
          </View>
          <View style={styles.filter}>
            <Text style={globalStyles.h2}>
              To
            </Text>
          </View>
        </View>

        <Button
          text="Search"
          onClick= {filterAnomalies}
        />

        {allAnomalies.map((anomaly) => (
          <Link key={anomaly.title} href={`/anomaly/${anomaly.title}`} asChild>
            <TouchableOpacity>
              <SearchCard
                image={anomaly.url}
                heading={anomaly.title}
                subheading={anomaly.explanation}
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
  filter: {
    fontSize: 12,
    width: '50%',
    flexDirection: 'column',
    gap: 10,
    height: 60,
  },
})
