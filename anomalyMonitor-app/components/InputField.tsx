// Author: Nadja Müller
// InputField Component

import { TextInput, Text, View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { globalStyles } from "../constants/styles";
import { Colors } from '../constants/colors';

interface InputFieldProps {
    label: string;
    type: "text" | "image";
    value?: string;
    onChangeText?: (text: string) => void;
    onImagePicked?: (uri: string) => void;
}

export default function InputField({ label, type, value, onChangeText, onImagePicked }: InputFieldProps) {

    async function pickImage() {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            Alert.alert("Berechtigung fehlt", "Bitte erlaube den Zugriff auf deine Fotos.");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 0.8,
        });
        if (!result.canceled && onImagePicked) {
            onImagePicked(result.assets[0].uri);
        }
    }

    return (
        <View style={styles.wrapper}>
            <Text style={globalStyles.h2}>{label}</Text>

            {type === "text" && (
                <TextInput
                    style={styles.inputFieldText}
                    placeholder={label}
                    placeholderTextColor={Colors.primary01}
                    value={value}
                    onChangeText={onChangeText}
                />
            )}

            {type === "image" && (
                <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                    {value ? (
                        <Image source={{ uri: value }} style={styles.imagePreview} />
                    ) : (
                        <Text style={styles.imagePickerText}>Bild auswählen</Text>
                    )}
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        gap: 8,
        marginBottom: 16,
    },
    inputFieldText: {
        width: '100%',
        backgroundColor: Colors.primary02,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        color: Colors.white,
    },
    imagePicker: {
        width: '100%',
        height: 200,
        backgroundColor: Colors.primary02,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    imagePickerText: {
        color: Colors.primary01,
        fontSize: 14,
    },
    imagePreview: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
})
