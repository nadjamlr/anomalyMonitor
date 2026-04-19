import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import { Link } from 'expo-router'

interface NavButtonProps {
    text: string;
    icon: ImageSourcePropType;
    href: string;
}

export default function NavButton ({text, icon, href}: NavButtonProps) {
    return (
        <Link href={href} style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image
                    source={icon}
                    style={styles.icon}
                    resizeMode="contain"
                />
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </Link>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: "column",
        width: "25%",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    iconWrapper: {
        width: 28,
        height: 28,
    },
    icon: {
        width: 28,
        height: 28,
    },
    buttonText: {
        fontSize: 12,
        color: "#fff",
    },
})