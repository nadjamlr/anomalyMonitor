// Author: Nadja Müller
// Search for Anomaly Screen


import { globalStyles } from '../../constants/styles';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FadeScrollView from '../../components/FadeScrollView';
import { Link } from 'expo-router'
import { useAnomaly } from '../../context/AnomalyContext';
import { useState } from 'react';
import { Colors } from '../../constants/colors'
import SearchBar from '../../components/SearchBar';
import SearchCard from '../../components/SearchCard';
import Button from '../../components/Button'
import DateTimePicker from '@react-native-community/datetimepicker'



export default function SearchScreen() {

  const { allAnomalies } = useAnomaly()
  const [startDate, setStartDate] = useState(new Date('2020-01-01'))
  const [endDate, setEndDate] = useState(new Date())
  const [filteredAnomalies, setFilteredAnomalies] = useState<typeof allAnomalies | null>(null)
  const [searchName, setSearchName] = useState('')

  function filterAnomalies() {
    const result = allAnomalies.filter(anomaly => {
      const date = new Date(anomaly.date)
      const matchesDate = date >= startDate && date <= endDate
      const matchesName = searchName === '' || anomaly.title.toLowerCase().includes(searchName.toLowerCase())
      return matchesDate && matchesName
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

      <FadeScrollView style={globalStyles.scrollContainer}>

        <View style={globalStyles.flexHorizontal}>
          <View style={styles.filterFull}>
            <Text style={globalStyles.h2}>
              Name
            </Text>
            <SearchBar
              value={searchName}
              onChangeText={setSearchName}
            />
          </View>
        </View>

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
                }}
              />
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
                }}
              />
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
      </FadeScrollView>

  </View>
  );
}


const styles = StyleSheet.create({
  filter: {
    fontSize: 12,
    width: '50%',
    flexDirection: 'column',
    gap: 10,
    height: 60,
    marginBottom: 10,
    marginTop: 10,
  },
  filterFull: {
    fontSize: 12,
    width: '100%',
    flexDirection: 'column',
    gap: 10,
    height: 60,
    marginBottom: 20,
  },
})
