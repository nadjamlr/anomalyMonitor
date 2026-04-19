import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors'


export const globalStyles = StyleSheet.create({
    h1: {
        fontSize: 44,
        color: Colors.white,
        fontWeight: "800",
    },
    h2: {
        fontSize: 12,
        textTransform: "uppercase",
        color: Colors.primary01,
        letterSpacing: 2,
        fontWeight: "500",
    }, 
    h3: {
        fontSize: 18,
        color: Colors.white,
        letterSpacing: 0.5,
        fontWeight: "600",
    },
    p: {
        fontSize: 14,
        color: Colors.primary01,
        marginTop: 16,
        lineHeight: 24,
        fontWeight: "500",
    },
    p2: {
        fontSize: 10,
        color: Colors.primary01,
        lineHeight: 16,
        fontWeight: "500",
    },
    container: {
        flex: 1,
        backgroundColor: Colors.primary03,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        gap: 20,
        paddingTop: 80,
        paddingBottom: 40,
        paddingHorizontal: 20,
    },
    imageContainer: {
        flex: 4,
        width: '100%',
        overflow: 'hidden',
        borderRadius: 8, 
    },
    heading: {
        flexDirection: "column",
        alignSelf: 'flex-start',
    },
    flexVertical: {
        flexDirection: "row",
        gap: 12,
    },
});
