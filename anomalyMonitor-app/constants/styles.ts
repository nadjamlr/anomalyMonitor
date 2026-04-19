import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors'

export const globalStyles = StyleSheet.create({
    h1: {
        fontSize: 42,
        color: Colors.white,
        fontWeight: "600",
    },
    h2: {
        fontSize: 16,
        textTransform: "uppercase",
        color: Colors.primary01,
        letterSpacing: 2,
    }, 
    p: {
        fontSize: 12,
        color: Colors.primary01,
        marginTop: 16,
        lineHeight: 24,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.primary03,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        gap: 28,
        paddingTop: 80,
        paddingBottom: 40,
        paddingHorizontal: 20,
    },
    heading: {
        flexDirection: "column",
        alignSelf: 'flex-start',
    },
});
