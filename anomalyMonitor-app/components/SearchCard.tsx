// Author: Nadja Müller
// Search Anomaly Card on Search Screen

import { globalStyles } from '../constants/styles';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../constants/colors'


interface SearchCardProps {
    image: string;
    heading: string;
    subheading: string;
    date: string;
}

export default function SearchCard({image, heading, subheading, date}: SearchCardProps) {
    return(
        <View style={styles.card}>
            <Image
                source={{ uri: image }}
                style={{ width: '25%', height: '100%' }}
                resizeMode="cover"
            />
            <View style={styles.textBox}>
                <View style={globalStyles.bottomMargin}>
                    <Text style={globalStyles.p2} numberOfLines={1}>
                        {date}
                    </Text>
                    <Text style={globalStyles.h3} numberOfLines={1} ellipsizeMode="tail">
                        {heading}
                    </Text>
                </View>
                <Text style={globalStyles.p} numberOfLines={2} ellipsizeMode="tail">
                    {subheading}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    card: {
        flex: 1,
        width: "100%",
        height: 120,
        backgroundColor: Colors.primary02,
        borderColor: Colors.primary04,
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 12,
        flexDirection: 'row',
        alignContent: 'center',
    },
    textBox: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
        gap: 2,
        overflow: 'hidden',
    },
})