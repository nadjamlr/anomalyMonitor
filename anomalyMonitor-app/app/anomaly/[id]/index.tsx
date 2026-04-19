// Author: Nadja Müller
// Detailed Anomaly Screen


import { useLocalSearchParams } from "expo-router";
import { globalStyles } from '../../../constants/styles';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Button from '../../../components/Button'
// import { useAnomaly } from "../../context/AnomalyContext";


interface AnomalyDetailsProps {
    image: string;
    heading: string;
    subheading: string;
    date: string;
    time?: string;
}


export default function AnomalyDetails({heading, subheading, date, image}: AnomalyDetailsProps) {
//     const { id } = useLocalSearchParams();
//     const { getAnomalyById } = useAnomaly();
//     const anomaly = getAnomalyById(id as string);

    // if (!anomaly)
    return (
        <View style={globalStyles.overlayContainer}>
            <View style={globalStyles.flexHorizontal}>
                <Text>
                    {date}
                </Text>
                <Button
                    text="X"
                />
            </View>
            <ScrollView>
                <Image
                    source={{ uri: image }}
                    style={{ width: '100%', height: '60%' }}
                    resizeMode="cover"
                />
                <Text>
                    {heading}
                </Text>
                <Text>
                    {subheading}
                </Text>
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
    bottomOverlay: {
        width: "100%",
        position: "absolute",
    },
})