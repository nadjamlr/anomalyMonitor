// Author: Nadja Müller
// Detailed Anomaly Screen


import { useLocalSearchParams, useRouter } from "expo-router";
import { globalStyles } from '../../../constants/styles';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../../../components/Button'
import myAnomaliesData from '../../../data/myAnomalies.json'
import allAnomaliesData from '../../../data/allAnomalies.json'
import { Colors } from '../../../constants/colors'

const myAnomalies = myAnomaliesData.myanomalies
const allAnomalies = allAnomaliesData.allanomalies


export default function AnomalyDetails() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const anomaly = [...myAnomalies, ...allAnomalies].find(a => a.id === id);

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
            </ScrollView>
            <View style={styles.bottomOverlay}>
                <Button
                    text="Save to my anomalies"
                />
            </View>
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
        color: '#fff',
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
