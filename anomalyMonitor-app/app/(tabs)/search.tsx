// Author: Nadja Müller
// Search for Anomaly Screen


import { globalStyles } from '../../constants/styles';
import SearchCard from '../../components/SearchAnomalyCard';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
// import { filterAnomalies } from '../../'


const FoundAnomalies = [
  {
    "copyright":"Miguel Claro\n(TWAN,\nDark Sky Alqueva)",
    "date":"2026-04-19",
    "explanation":"Have you ever had stars in your eyes? It appears that the eye on the left does, and moreover, it appears to be gazing at even more stars. The featured 27-frame mosaic was taken in 2019 from Ojas de Salar in the Atacama Desert of Chile.  The eye is actually a small lagoon captured reflecting the dark night sky as the Milky Way Galaxy arched overhead. The seemingly smooth band of the Milky Way is really composed of billions of stars, but decorated with filaments of light-absorbing dust and red-glowing nebulas. Additionally, both Jupiter (slightly left the galactic arch) and Saturn (slightly to the right) are visible.  The lights of small towns dot the unusual vertical horizon.  The rocky terrain around the lagoon appears to some more like the surface of Mars than our Earth.   Sky Surprise: What picture did APOD feature on your birthday? (after 1995)",
    "hdurl":"https://apod.nasa.gov/apod/image/2604/EyeOnMW_Claro_1380.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"Eye on the Milky Way",
    "url":"https://apod.nasa.gov/apod/image/2604/EyeOnMW_Claro_960.jpg"
  },
  {
    "copyright":"Miguel Claro\n(TWAN,\nDark Sky Alqueva)",
    "date":"2026-04-19",
    "explanation":"Have you ever had stars in your eyes? It appears that the eye on the left does, and moreover, it appears to be gazing at even more stars. The featured 27-frame mosaic was taken in 2019 from Ojas de Salar in the Atacama Desert of Chile.  The eye is actually a small lagoon captured reflecting the dark night sky as the Milky Way Galaxy arched overhead. The seemingly smooth band of the Milky Way is really composed of billions of stars, but decorated with filaments of light-absorbing dust and red-glowing nebulas. Additionally, both Jupiter (slightly left the galactic arch) and Saturn (slightly to the right) are visible.  The lights of small towns dot the unusual vertical horizon.  The rocky terrain around the lagoon appears to some more like the surface of Mars than our Earth.   Sky Surprise: What picture did APOD feature on your birthday? (after 1995)",
    "hdurl":"https://apod.nasa.gov/apod/image/2604/EyeOnMW_Claro_1380.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"Test Milky Way",
    "url":"https://apod.nasa.gov/apod/image/2604/EyeOnMW_Claro_960.jpg"
  },
  {
    "copyright":"Miguel Claro\n(TWAN,\nDark Sky Alqueva)",
    "date":"2026-04-19",
    "explanation":"Have you ever had stars in your eyes? It appears that the eye on the left does, and moreover, it appears to be gazing at even more stars. The featured 27-frame mosaic was taken in 2019 from Ojas de Salar in the Atacama Desert of Chile.  The eye is actually a small lagoon captured reflecting the dark night sky as the Milky Way Galaxy arched overhead. The seemingly smooth band of the Milky Way is really composed of billions of stars, but decorated with filaments of light-absorbing dust and red-glowing nebulas. Additionally, both Jupiter (slightly left the galactic arch) and Saturn (slightly to the right) are visible.  The lights of small towns dot the unusual vertical horizon.  The rocky terrain around the lagoon appears to some more like the surface of Mars than our Earth.   Sky Surprise: What picture did APOD feature on your birthday? (after 1995)",
    "hdurl":"https://apod.nasa.gov/apod/image/2604/EyeOnMW_Claro_1380.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"Test Milky Way",
    "url":"https://apod.nasa.gov/apod/image/2604/EyeOnMW_Claro_960.jpg"
  },
  {
    "copyright":"Miguel Claro\n(TWAN,\nDark Sky Alqueva)",
    "date":"2026-04-19",
    "explanation":"Have you ever had stars in your eyes? It appears that the eye on the left does, and moreover, it appears to be gazing at even more stars. The featured 27-frame mosaic was taken in 2019 from Ojas de Salar in the Atacama Desert of Chile.  The eye is actually a small lagoon captured reflecting the dark night sky as the Milky Way Galaxy arched overhead. The seemingly smooth band of the Milky Way is really composed of billions of stars, but decorated with filaments of light-absorbing dust and red-glowing nebulas. Additionally, both Jupiter (slightly left the galactic arch) and Saturn (slightly to the right) are visible.  The lights of small towns dot the unusual vertical horizon.  The rocky terrain around the lagoon appears to some more like the surface of Mars than our Earth.   Sky Surprise: What picture did APOD feature on your birthday? (after 1995)",
    "hdurl":"https://apod.nasa.gov/apod/image/2604/EyeOnMW_Claro_1380.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"Test Milky Way",
    "url":"https://apod.nasa.gov/apod/image/2604/EyeOnMW_Claro_960.jpg"
  },
]


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

        <View style={globalStyles.flexVertical}>
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
        {/*<Button
          text="Search"
          onClick= {filterAnomalies(from, to)}
        />*/}

        <ScrollView style={styles.bodyContent}>
            {FoundAnomalies.map((anomaly) => (
              <SearchCard
                image={anomaly.url}
                heading={anomaly.title}
                subheading={anomaly.explanation}
                date={anomaly.date}
              />
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
  },
})
