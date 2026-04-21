// Author: Nadja Müller
// Search for Anomaly Screen


import { globalStyles } from '../../constants/styles';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router'
import { useAnomaly } from '../../context/AnomalyContext';
import { useState } from 'react';
import SearchCard from '../../components/SearchCard';
import Button from '../../components/Button'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Colors } from '../../constants/colors'


export default function SearchScreen() {

  const { allAnomalies } = useAnomaly()
  const [startDate, setStartDate] = useState(new Date('2020-01-01'))
  const [endDate, setEndDate] = useState(new Date())
  const [filteredAnomalies, setFilteredAnomalies] = useState<typeof allAnomalies | null>(null)

  function filterAnomalies() {
    const result = allAnomalies.filter(anomaly => {
      const date = new Date(anomaly.date)
      return date >= startDate && date <= endDate
    })
    setFilteredAnomalies(result)
  }

  const displayedAnomalies = filteredAnomalies ?? allAnomalies

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
            <DateTimePicker
              textColor={Colors.white}
              accentColor={Colors.primary01}
              themeVariant="dark"
              value={startDate}
              mode="date"
              onChange={(_event, selectedDate) => {
                if (selectedDate) setStartDate(selectedDate)
              }}>
            </DateTimePicker>
          </View>
          <View style={styles.filter}>
            <Text style={globalStyles.h2}>
              To
            </Text>
            <DateTimePicker
              textColor={Colors.white}
              accentColor={Colors.primary01}
              themeVariant="dark"
              value={endDate}
              mode="date"
              onChange={(_event, selectedDate) => {
                if (selectedDate) setEndDate(selectedDate)
              }}>
            </DateTimePicker>
          </View>
        </View>

        <Button
          text="Search"
          onClick={filterAnomalies}
        />

        {displayedAnomalies.map((anomaly) => (
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
