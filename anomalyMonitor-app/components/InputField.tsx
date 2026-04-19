// Author: Nadja Müller
// 

import { TextInput, Text, View, StyleSheet} from "react-native";
import { globalStyles } from "../constants/styles";

interface InputFieldProps {
    label: string;
    type: "text" | "Image"
}

export default function InputField({ label, type }: InputFieldProps) {
    return (
        <View style={globalStyles.flexVertical}>
            <Text style={globalStyles.h2}>
                {label}
            </Text>
            {type==="text" && (
                <TextInput
                    style={styles.inputFieldText}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputFieldText: {
        width: '100%',
        height: 150,
    },
    inputFieldImage: {
        width: '100%',
        height: 200,
    }
})