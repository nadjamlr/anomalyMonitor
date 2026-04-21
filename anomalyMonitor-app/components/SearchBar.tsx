import { globalStyles } from "../constants/styles";
import { Colors } from '../constants/colors'
import { Text, TextInput, View, StyleSheet} from "react-native";


interface SearchBarProps {
    value: string;
}


export default function SearchBar({value}: SearchBarProps) {
    return(
        <TextInput
            style={styles.searchbar}
            placeholder="Search"
            placeholderTextColor={Colors.primary01}
            value={value}
            onChangeText={}
        />
    )

}

const styles = StyleSheet.create ({
    searchbar: {
        width: '100%',
        backgroundColor: Colors.primary02,
        color: Colors.primary01
    },
})