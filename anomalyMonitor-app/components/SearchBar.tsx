import { globalStyles } from "../constants/styles";
import { Colors } from '../constants/colors'
import { Text, TextInput, View, StyleSheet} from "react-native";
import { useAnomaly } from "../context/AnomalyContext";


interface SearchBarProps {
    value: string;
    searchValue: () => void;
}


export default function SearchBar({value, searchValue}: SearchBarProps) {
    return(
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor={Colors.primary01}
                value={value}
                onChangeText={searchValue}
            />
        </View>

    )
}

const styles = StyleSheet.create ({
    wrapper: {
        width: '100%',
        backgroundColor: Colors.primary02,
        color: Colors.primary01
    },
    input: {
        width: '100%',
    }
})