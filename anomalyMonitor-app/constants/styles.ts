import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    h1: {
        fontSize: 42,
        color: "#fff",
        fontWeight: "600",
    },
    h2: {
        fontSize: 16,
        textTransform: "uppercase",
        color: "#ABDFFF",
        letterSpacing: 2,
    }, 
    p: {
        fontSize: 12,
        color: "#ABDFFF",
        marginTop: 16,
        lineHeight: 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#050A25',
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
