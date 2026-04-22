import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors'


export const globalStyles = StyleSheet.create({
    h1: {
        fontSize: 42,
        color: Colors.white,
        fontWeight: "800",
        letterSpacing: -0.5,
    },
    h2: {
        fontSize: 11,
        textTransform: "uppercase",
        color: Colors.primary01,
        letterSpacing: 2.5,
        fontWeight: "600",
        marginBottom: 2,
    },
    h3: {
        fontSize: 17,
        color: Colors.white,
        letterSpacing: 0.2,
        fontWeight: "700",
    },
    p: {
        fontSize: 14,
        color: Colors.primary01,
        lineHeight: 22,
        fontWeight: "400",
    },
    p2: {
        fontSize: 11,
        color: Colors.primary01,
        lineHeight: 17,
        fontWeight: "500",
    },
    container: {
        flex: 1,
        backgroundColor: Colors.primary03,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        gap: 24,
        paddingTop: 70,
        paddingBottom: 0,
        paddingHorizontal: 20,
    },
    scrollContainer: {
        width: "100%",
        flex: 1,
        backgroundColor: Colors.primary03,
    },
    overlayContainer: {
        marginTop: 40,
        flex: 1,
        backgroundColor: Colors.primary03,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        gap: 24,
        paddingTop: 70,
        paddingBottom: 40,
        paddingHorizontal: 20,
    },
    imageContainer: {
        width: '100%',
        height: 300,
        overflow: 'hidden',
        borderRadius: 12,
    },
    heading: {
        flexDirection: "column",
        alignSelf: 'flex-start',
        marginTop: 30,
        gap: 2,
    },
    flexVertical: {
        flexDirection: "column",
        gap: 12,
        width: '100%',
    },
    flexHorizontal: {
        flexDirection: "row",
        gap: 12,
        width: '100%',
    },
    button: {
        width: "100%",
        backgroundColor: Colors.accent,
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.white,
        letterSpacing: 0.5,
    },
    input: {
        width: "100%",
        fontSize: 12,
    },
    bottomMargin: {
        marginBottom: 8,
    },
});
