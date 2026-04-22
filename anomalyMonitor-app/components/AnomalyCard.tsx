// Author: Nadja Müller
// Anomaly Card on Anomalies Screen


import { globalStyles } from '../constants/styles';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../constants/colors'


interface AnomalyCardProps {
    image: string;
    heading: string;
    date: string;
    time?: string;
}


export default function AnomalyCard({image, heading, date, time}: AnomalyCardProps) {
    return(
        <View style={styles.card}>
            <Image
                source={{ uri: image }}
                style={{ width: '100%', height: '60%' }}
                resizeMode="cover"
            />
            <View style={styles.textBox}>
                <Text style={globalStyles.h3}>
                    {heading}
                </Text>
                <View style={globalStyles.flexHorizontal}>
                    <Text style={globalStyles.p2}>
                        {date}
                    </Text>
                    <Text style={globalStyles.p2}>
                        {time}
                    </Text>
                </View>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create ({
    card: {
        width: "100%",
        height: 200,
        backgroundColor: Colors.primary02,
        borderColor: Colors.primary04,
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 12,
    },
    cardImage: {
        width: "100%",
        flex: 1,
    },
    textBox: {
        paddingHorizontal: 10,
        paddingVertical: 16,
        gap: 10,
    },
})