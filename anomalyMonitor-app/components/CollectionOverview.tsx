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
        <View style={styles.contentContainer}>
            <View style={globalStyles.heading}>
                <Text style={globalStyles.h2}>
                    Overview
                </Text>
                <Text style={globalStyles.h1}>
                    Collection
                </Text>
            </View>
            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Text style={globalStyles.h2}>
                        Total
                    </Text>
                    <Text style={globalStyles.h1}>
                        {totallyAdded}
                    </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={globalStyles.h2}>
                        Manual
                    </Text>
                    <Text style={globalStyles.h1}>
                        {manuallyAdded}
                    </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={globalStyles.h2}>
                        APOD
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
    contentContainer: {
        gap: 10,
        marginTop: 40,
    },
    stats: {
        width: '100%',
        flexDirection: 'row',
        gap: 10,
    },
    stat: {
        width: '30%',
        backgroundColor: Colors.primary02,
        borderRadius: 8,
        borderColor: Colors.primary04,
        borderWidth: 1,
        padding: 8,
        alignItems: 'center',
    },
})