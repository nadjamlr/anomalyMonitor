import { Colors } from '../constants/colors'
import { TextInput, View, StyleSheet } from "react-native";


interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
}


export default function SearchBar({ value, onChangeText }: SearchBarProps) {
    return(
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                placeholder="Search by name"
                placeholderTextColor={Colors.primary01}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: Colors.primary02,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 8,
        overflow: 'hidden',
    },
    input: {
        width: '100%',
        color: Colors.white,
        fontSize: 18,
    }
})
