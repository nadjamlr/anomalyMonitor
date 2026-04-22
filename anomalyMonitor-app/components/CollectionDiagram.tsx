// Additional Feature
// Author: Nadja Müller
// Collection Diagram on Home Screen


import { Colors } from '../constants/colors'
import { Text, StyleSheet, View } from 'react-native'
import { useAnomaly } from '../context/AnomalyContext'
import { globalStyles } from '../constants/styles'


export default function CollectionOverview() {
    const  {myAnomalies} = useAnomaly()

    const manuallyAdded = myAnomalies.filter(a => a.source === 'manual').length

    const searchAdded = myAnomalies.filter(a => a.source === 'search').length

    const totallyAdded = myAnomalies.length

    return(
        <View style={styles.wrapper}>
            <Text style={globalStyles.h2}>
                Collection Oerview
            </Text>
            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Text style={globalStyles.h3}>
                        Total
                    </Text>
                    <Text style={globalStyles.h1}>
                        {totallyAdded}
                    </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={globalStyles.h3}>
                        Manuallly Added
                    </Text>
                    <Text style={globalStyles.h1}>
                        {manuallyAdded}
                    </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={globalStyles.h3}>
                        APOD Added
                    </Text>
                    <Text style={globalStyles.h1}>
                        {searchAdded}
                    </Text>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: Colors.primary02,
        paddingHorizontal: 10,
    },
    stats: {
        width: '100%',
    },
    stat: {
        width: '30%',
    },
})