// Author: Nadja Müller
// Detailed Anomaly Screen


import { useLocalSearchParams, useRouter } from "expo-router";
import { globalStyles } from '../../../constants/styles';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useAnomaly } from '../../../context/AnomalyContext'
import { Colors } from '../../../constants/colors'
import Button from '../../../components/Button'


export default function AnomalyDetails() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { getAnomalyByName, addAnomaly, myAnomalies } = useAnomaly()

    const anomaly = getAnomalyByName(id as string);
    const isAlreadySaved = myAnomalies.some(a => a.title === anomaly?.title);

    if (!anomaly) {
        return (
            <View style={globalStyles.overlayContainer}>
                <Text style={globalStyles.p}>Anomaly not found.</Text>
            </View>
        );
    }

    return (
        <View style={globalStyles.overlayContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
                <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <ScrollView style={styles.scrollView}>
                <View style={globalStyles.imageContainer}>
                    <Image
                        source={{ uri: anomaly.url }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={globalStyles.flexVertical}>
                    <Text style={globalStyles.p2}>
                        {anomaly.date}
                    </Text>
                    <Text style={globalStyles.h1}>
                        {anomaly.title}
                    </Text>
                    <Text style={globalStyles.p}>
                        {anomaly.explanation}
                    </Text>
                </View>
                <Text style={globalStyles.p2}>
                    {anomaly.copyright}
                </Text>
            </ScrollView>
            {!isAlreadySaved && (
                <View style={styles.bottomOverlay}>
                    <Button
                        text="Save to my anomalies"
                        onClick={() => addAnomaly({ ...anomaly, source: 'search' })}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 10,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.primary02,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    scrollView: {
        width: '100%',
        flex: 1,
        gap: 20,
    },
    image: {
        width: '100%',
        height: 260,
    },
    bottomOverlay: {
        width: "100%",
        paddingBottom: 10,
    },
})
