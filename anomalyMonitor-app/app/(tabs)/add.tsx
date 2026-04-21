// Author: Nadja Müller
// Add Anomaly Screen


import { globalStyles } from '../../constants/styles';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useAnomaly } from '../../context/AnomalyContext'
import { useState } from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';


export default function AddScreen() {

    const { addAnomaly } = useAnomaly()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    // Button funktion:
    function handleSave() {
        addAnomaly({
            copyright: '',
            date: new Date().toISOString().split('T')[0],
            title: name,
            explanation: description,
            url: image,
            hdurl: image,
            media_type: 'image',
            service_version: 'v1',
        })
        setName('')
        setDescription('')
        setImage('')
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
                    value={name}
                    onChangeText={setName}
                />
                <InputField
                    type="text"
                    label="Description"
                    value={description}
                    onChangeText={setDescription}
                />
                <InputField
                    type="image"
                    label="Image"
                    value={image}
                    onImagePicked={setImage}
                />
                <Button
                    text="Save anomaly"
                    onClick={handleSave}
                />
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
})
