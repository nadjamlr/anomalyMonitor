// Author: Nadja Müller
// Add Anomaly Screen


import { globalStyles } from '../../constants/styles';
import Button from '../../components/Button';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import InputField from '../../components/InputField';
import { useAnomaly } from '../../context/AnomalyContext'


export default function AddScreen() {

    function addAnomaly() {
        // TODO: implement addAnomaly
        console.log("addAnomaly called");
        useAnomaly(addAnomaly)
    }
    return (
        <View style={globalStyles.container}>

            <View style={globalStyles.heading}>
                <Text style={globalStyles.h2}>
                    Create a report
                </Text>
                <Text style={globalStyles.h1}>
                    New Anomaly
                </Text>
            </View>

            <ScrollView style={styles.bodyContent}>
                <InputField
                    type="text"
                    label="Name"
                />
                <InputField
                    type="text"
                    label="Description"
                />
                <InputField
                    type="image"
                    label="Image"
                />
                <Button
                    text="Save anomaly"
                    onClick={addAnomaly}>
                </Button>

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
    button: {
        width: "100%",
        fontSize: 16,
    },
    })
