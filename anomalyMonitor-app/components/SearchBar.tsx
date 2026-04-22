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
                placeholder="Search by name..."
                placeholderTextColor={Colors.muted}
                value={value}
                onChangeText={onChangeText}
                selectionColor={Colors.primary01}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: Colors.primary02,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: Colors.primary04,
    },
    input: {
        width: '100%',
        color: Colors.white,
        fontSize: 15,
    }
})
